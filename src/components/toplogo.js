import React from 'react';
import logo from '../assets/logo.svg'

const LogoWithText = () => {
  return (
    <div className="flex items-center ml-3 mt-3 mb-2">
      <img src= {logo} alt="Logo" className="w-12 h-12 mr-2" />
      <span className="text-xs font-PressStart2p font-semibold ">Spotidados</span>
    </div>
  );
};

export default LogoWithText;
