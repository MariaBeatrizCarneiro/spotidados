import React from 'react';
import logo from '../assets/logo.svg'

const LogoWithText = () => {
  return (
    <div className="flex items-center pl-3 pt-3 pb-2 fixed bg-lightgrey w-full">
      <img src= {logo} alt="Logo" className="w-12 h-12 mr-2" />
      <span className="text-xs font-PressStart2p font-semibold ">Spotidados</span>
    </div>
  );
};

export default LogoWithText;
