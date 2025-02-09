//AIzaSyCHQzYLERAquXEvO4EqiyDs_US2dzjX3VY
import React, { useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([
    { lat: 43.32014954323895, lng: 76.96650193786006, title: 'Гете 265' },
    { lat: 51.17121766379685, lng: 71.42226925720446, title: 'Управление миграционной службы департамента внутренних дел города Астана' },
    { lat: 51.16349504080408, lng: 71.45138810558309, title: 'Marker 3' },
    { lat: 43.2486770773234,  lng: 76.93854414596306, title: 'Управление Миграционной Полиции По Алматинской Области' },
    { lat: 43.249444511948006, lng: 76.93883277501385, title: 'Отдел миграционной полиции управления полиции Медеуского района' },
    { lat: 43.237565886851286, lng: 76.90267825978444, title: 'Миграционная полиция города Алматы' },
    { lat: 43.33771545673108, lng: 76.94919766874865, title: 'Миграционная полиция города Алматы' },
    { lat: 43.342122250861536, lng: 77.04220307964236, title: 'Департамент полиции алматинской области, управление миграционной службы' },
    { lat: 43.25055139692478, lng: 76.92517217321655, title: 'Migration Police Department of the Almalinsky district of Almaty' },
    { lat: 42.32480576715321, lng: 69.58363714911093, title: 'Миграционная Полиция города Шымкент' },
    { lat: 45.01419728659768, lng: 78.39101298084364, title: 'Г. Талдыкорган: ул. Балпык Би 36' },
    { lat: 51.15163850264793, lng: 71.45102338300107, title: 'Убежище мигрантов город Астана' },
    { lat: 51.1613303881185, lng: 71.42469657900756, title: 'Дом ООН города Астана' },
  ]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-maps-script',
    googleMapsApiKey: 'AIzaSyCHQzYLERAquXEvO4EqiyDs_US2dzjX3VY',
  });

  const containerStyle = {
    width: '800px',
    height: '600px',
  };

  const center = {
    lat: 43.32014954323895,
    lng: 76.96650193786006,
  };

  const onLoad = React.useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center mt-8 container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='Map'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Marked
          <span className='ml-2 underline underline-offset-4 decoration-1 under font-light'> Map</span>
        </h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Map with facilities and shelters throughout major cities of Kazakhstan</p>
      </div>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.title}
            />
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default MapComponent;