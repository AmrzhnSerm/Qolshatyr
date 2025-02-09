import React from 'react';
import { Link } from 'react-router-dom';

const InfoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 mt-10 lg:px-32 w-full overflow-hidden" id='/info'>
      <h1 className="text-4xl text-[#272263] font-bold mb-2">Detailed info and Contacts</h1>
      <p className="text-gray-500 max-w-80 text-left mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-1">• УВБК ООН</h3>
        <h5 className="text-sm text-gray-600 mb-4">
          г. Астана, ул. Мамбетова 14 <br/>
          +7(7172)696545, 696546 <br/>
        </h5>
        <h3 className="text-lg font-medium text-gray-800 mb-1">• Лига волонтеров Казахстана</h3>
        <h5 className="text-sm text-gray-600 mb-4">
          г. Алматы, ул. Байтурсынова 22 к1<br/>
          +7(707)458-05-70 <br/>
        </h5>
        <h3 className="text-lg font-medium text-gray-800 mb-1">• Управление миграционной службы департамента внутренних дел города Астана</h3>
        <h5 className="text-sm text-gray-600 mb-4">
          г. Астана, ул. Иманова <br/>
          +7(7172)37-48-51 <br/>
        </h5>
        <h3 className="text-lg font-medium text-gray-800 mb-1">• Управление миграционной службы департамента внутренних дел города Алматы</h3>
        <h5 className="text-sm text-gray-600 mb-4">
          г. Алматы, ул. Карасай батыра 109<br/>
          +7(727) 254‒50‒57 <br/>
        </h5>
        <h3 className="text-lg font-medium text-gray-800 mb-1">• Управление миграционной службы департамента внутренних дел города Шымкент</h3>
        <h5 className="text-sm text-gray-600 mb-4">
          г. Шымкент: ул. Желтоксан 3<br/>
          +7(775)923-02-03 <br/>
        </h5>
        <h3 className="text-lg font-medium text-gray-800 mb-1">• Управление миграционной службы департамента внутренних дел города Талдыкорган</h3>
        <h5 className="text-sm text-gray-600 mb-4">
          г. Талдыкорган: ул. Балпык Би 36<br/>
          +7(7282)-32‒97‒29 <br/>
        </h5>
      </p>
      <Link to="/" className="bg-[#272263] hover:bg-[#101054] transition text-white px-8 py-2 rounded-full cursor-pointer">
        Return to main page
      </Link>
    </div>
  );
};

export default InfoPage;