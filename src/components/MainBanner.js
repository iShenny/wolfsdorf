// src/components/MainBanner.js
import React from 'react';
import Header from './Header';

const MainBanner = () => {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen">
      <Header className="z-30" />
      <div className="absolute w-full h-full z-0 overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/kcdtrailer.mp4" type="video/mp4" />
        </video>
        {/* Updated gradient applied here */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(51,51,51,0.24)] to-[#333]"></div>
      </div>
      <div className="flex flex-col items-center justify-center pt-64 pb-32 gap-6 z-20 w-full px-6 text-center">
        <img src="/logo.svg" alt="Logo" style={{ width: '256px', height: '256px' }} className="mb-6" />
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl text-white font-bold">Vlkovice</h1>
            <h2 className="text-4xl text-white italic font-bold">“Lupi villa maior et minor”</h2>
          </div>
          <p className="text-xl text-white font-semibold" style={{ maxWidth: '756px', overflowWrap: 'break-word' }}>
          Vlkovice, původně zvané Wolfsdorf, jsou původem lesní lánovou vsí. Jméno obce odkazuje na jejího lokátora a charakter vesnice v lesnaté krajině. Během staletí se majetkové poměry vesnice měnily. Nyní jsou Vlkovice součástí Moravského Kravařska a leží v oblasti Oderských Vrchů.
          </p>
        </div>
        <button className="bg-[#CA6508] text-white font-semibold py-2 px-6 rounded-full mt-6">
          Více o historii
        </button>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default MainBanner;
