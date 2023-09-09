/* eslint-disable sort-keys */

'use client';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import translation from '@/translation.yaml';

const placemarkOptions = {
  iconLayout: 'default#image',
  iconImageHref: '/img/marker.svg',
  iconImageSize: [26, 36],
  iconImageOffset: [-13, -36],
};

export default function YandexMap() {
  const { contacts } = translation;

  return (
    <div className="h-[280px] w-full overflow-hidden rounded-xl bg-lite lg:h-[380px]">
      <YMaps query={{ load: 'package.full' }}>
        <Map defaultState={{ center: [55.883, 37.075], zoom: 13, controls: ['zoomControl'], behaviors: ['drag'] }} height="100%" width="100%">
          <Placemark
            geometry={[55.88171, 37.067858]}
            options={placemarkOptions}
            properties={{
              hintContent: contacts.address1.title,
              balloonContentHeader: contacts.address1.title,
              balloonContent: `${contacts.address1.address}<br>${contacts.schedule}`,
              balloonContentFooter: contacts.phones,
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}
