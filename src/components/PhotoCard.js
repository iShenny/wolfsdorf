// PhotoCard.js
import React from 'react';

const PhotoCard = ({ image, title, date, text }) => {
  return (

    <div className="border-b border-[#d3d3d3] py-6 flex gap-0 items-start self-stretch relative w-full h-60 bg-transparent">

        {/* Image frame */}
        <div className="flex flex-col gap-1 justify-center items-center flex-1 self-stretch relative w-full h-full bg-cover bg-center">
            <img src={image} alt="Event Image" className="w-full h-full object-cover"/>
        </div>

      {/* Text frame */}
      <div className="pl-3 pr-0 py-2 flex flex-col gap-4 items-start flex-1 relative w-full bg-transparent">
        <h5 className="font-semibold underline text-xl text-[#333333] overflow-hidden max-h-14">
        <a href={`/detail/`} className="text-[#333333] hover:text-[#ca6508]">
          {title}
        </a>
        </h5>
        <p className="text-xs text-[#333333]">
            {date}
        </p>
        <p className="text-base text-[#333333] line-clamp-3">
            {text}
        </p>
      </div>

    </div>
  );
};

export default PhotoCard;
