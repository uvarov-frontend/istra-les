/* eslint-disable sort-keys */

'use client';

import { useReCaptcha } from 'next-recaptcha-v3';
import { ChangeEventHandler, FormEvent, useCallback, useState } from 'react';

// import { withMask } from 'use-mask-input';

import { useStore } from '@/store';
import { ITranslate } from '@/types';

export default function ModalCallback({ callback }: { callback: ITranslate }) {
  const { modalCallbackIsOpen } = useStore();
  const [inputs, setInputs] = useState({ name: '', phone: '' });
  const [form, setForm] = useState({ state: '', message: '' });
  const { executeRecaptcha } = useReCaptcha();

  const handlerInput: ChangeEventHandler<HTMLInputElement> = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitCallback = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      setForm({
        state: 'loading',
        message: callback.state.loading,
      });

      try {
        if (!inputs.name[0] || !inputs.phone[0] || inputs.phone.includes('_')) {
          setForm({
            state: 'error',
            message: callback.state.validate,
          });
          return;
        }
        const token = await executeRecaptcha('form_submit');
        if (!token) return;

        const res = await fetch('/api/callback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: inputs,
            token,
          }),
        });

        const { error } = await res.json();

        if (error) {
          // eslint-disable-next-line no-console
          console.log(error);
          setForm({
            state: 'error',
            message: callback.state.error,
          });
          return;
        }
        setForm({
          state: 'success',
          message: callback.state.success,
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        setForm({
          state: 'error',
          message: callback.state.error,
        });
      }

      setInputs({
        name: '',
        phone: '',
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [executeRecaptcha, inputs],
  );

  return (
    <div className={`fixed bottom-0 left-0 right-0 top-0 z-50 bg-dark/50 ${modalCallbackIsOpen ? 'block' : 'hidden'}`}>
      <div data-modal-content className="absolute left-1/2 top-1/2 z-10 min-h-[100px] w-[395px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 shadow-sm">
        <button data-modal-close className="absolute right-3 top-3 text-[0] hover:text-red" type="button">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <b className="mb-2 block text-2xl">{callback.titleForm}</b>
        <p className="mb-6 text-base text-gray_dark">{callback.descriptionForm}</p>
        <form className="grid grid-flow-row gap-3" onSubmit={onSubmitCallback}>
          <input required className="input" name="name" placeholder={callback.name} type="text" value={inputs.name} onChange={handlerInput} />
          <input
            // ref={withMask('+7 (999) 999-99-99')}
            required
            className="input"
            // minLength={18}
            name="phone"
            placeholder={callback.phone}
            type="text"
            value={inputs.phone}
            onChange={handlerInput}
          />
          <button className="btn mt-2 w-full" type="submit">
            {callback.btn}
          </button>
          <small className="mt-2 text-xs text-gray_dark">
            Нажимая на кнопку «{callback.btn}», вы даете согласие на обработку персональных данных и соглашаетесь с условиями{' '}
            <a className="text-green hover:text-green_hover" href="/privacy-policy" target="_blank">
              политики конфиденциальности
            </a>
            .
          </small>
          {form.state[0] ? (
            // eslint-disable-next-line no-nested-ternary
            <small className={`mt-2 text-center ${form.state === 'success' ? 'text-green' : form.state === 'error' ? 'text-red' : ''}`}>{form.message}</small>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
}
