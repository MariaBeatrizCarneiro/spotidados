import React from 'react';
import logo from '../assets/disk.svg'

const LogoWithText = () => {
  return (
    <div className="flex items-center pl-6 pt-3 pb-2 fixed bg-lightgrey w-full top-0">
      <img src= {logo} alt="Logo" className="w-8 h-8 mr-2" />
      <span className="text-xs font-PressStart2p font-semibold ">Spotidados</span>
    </div>
  );
};

export default LogoWithText;
