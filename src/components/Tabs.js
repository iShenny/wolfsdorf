// src/components/Tabs.js
import React, { useState } from 'react';
import News from './News';
import OfficialBoard from './OfficialBoard';
import LifeSituations from './LifeSituations';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('news');

  return (
    <div className="flex flex-col items-center gap-8 p-6 self-stretch font-nunito">
      <div className="flex flex-col items-center pt-8 gap-4 self-stretch">
        <div className="flex justify-center self-stretch gap-10">
          <button onClick={() => setActiveTab('news')} 
                  className={`text-lg font-semibold pb-2 px-4 hover:text-[#082534] hover:border-b-2 hover:border-[#082534] ${activeTab === 'news' ? 'text-[#082534] border-b-2 border-[#082534]' : 'text-gray-800'}`}>
            Aktuality
          </button>
          <button onClick={() => setActiveTab('officialBoard')} 
                  className={`text-lg font-semibold pb-2 px-4 hover:text-[#082534] hover:border-b-2 hover:border-[#082534] ${activeTab === 'officialBoard' ? 'text-[#082534] border-b-2 border-[#082534]' : 'text-gray-800'}`}>
            Úřední deska
          </button>
          <button onClick={() => setActiveTab('lifeSituations')} 
                  className={`text-lg font-semibold pb-2 px-4 hover:text-[#082534] hover:border-b-2 hover:border-[#082534] ${activeTab === 'lifeSituations' ? 'text-[#082534] border-b-2 border-[#082534]' : 'text-gray-800'}`}>
            Životní situace
          </button>
        </div>
            {activeTab === 'news' && <News />}
            {activeTab === 'officialBoard' && <OfficialBoard />}
            {activeTab === 'lifeSituations' && <LifeSituations />}
      </div>
    </div>
  );
};

export default Tabs;
