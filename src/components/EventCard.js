// EventCard.js
import React from 'react';

const EventCard = ({ day, month, title, type }) => {
  return (

    <div className="border-b border-[#d3d3d3] py-6 flex gap-0 items-start self-stretch relative w-full h-40 bg-transparent">

        {/* Datum frame */}
      <div className="flex flex-col gap-1 justify-center items-center flex-1 self-stretch relative max-w-36	 h-full">
        <h1 className="font-bold text-[40px] text-[#cba135]">
            {day}
        </h1>
        <h5 className="font-semibold text-xl text-[#333333]">
            {month}
        </h5>
      </div>

      {/* Text frame */}
      <div className="pl-3 pr-6 py-2 flex flex-col gap-4 items-start flex-1 relative w-full bg-transparent">
        <h5 className="font-semibold underline text-xl text-[#333333]">
        <a href={`/detail/`} className="text-[#333333] hover:text-[#ca6508]">
          {title}
        </a>
        </h5>
        <p className="text-sm text-[#333333]">
            Typ akce: {type}
        </p>
      </div>

    </div>
  );
};

export default EventCard;
