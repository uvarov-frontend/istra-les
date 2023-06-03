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
    <div className="bg-lite rounded-xl overflow-hidden">
      <YMaps query={{ load: 'package.full' }}>
        <Map defaultState={{ center: [55.883, 37.075], zoom: 13, controls: ['zoomControl'] }}
          height="100%"
          width="100%">
          <Placemark geometry={[55.881710, 37.067858]}
            options={placemarkOptions}
            properties={{
              hintContent: contacts.address1.title,
              balloonContentHeader: contacts.address1.title,
              balloonContent: `${contacts.address1.address}<br>${contacts.schedule}`,
              balloonContentFooter: contacts.phones,
            }}
          />
          <Placemark geometry={[55.879547, 37.095367]}
            options={placemarkOptions}
            properties={{
              hintContent: contacts.address2.title,
              balloonContentHeader: contacts.address2.title,
              balloonContent: `${contacts.address2.address}<br>${contacts.schedule}`,
              balloonContentFooter: contacts.phones,
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}