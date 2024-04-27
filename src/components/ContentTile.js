// src/components/ContentTile.js
import React from 'react';

const ContentTile = ({ image, title, date, fileType, contentText }) => {
  return (
    <div class="flex flex-col gap-0 items-start relative w-80 h-[448px] bg-white/80 shadow-md">

      <div class="flex flex-col gap-0 items-start self-stretch relative w-full h-44 bg-transparent">
        
        <img class="flex flex-col gap-0 items-start flex-1 self-stretch relative w-full h-full" src={image} />

      </div>

      <div class="p-6 flex flex-col gap-4 items-start flex-1 self-stretch relative w-full h-full bg-transparent">

      <h5 className="font-semibold overflow-hidden underline max-h-20 text-xl text-[#333333]">
      <a href={`/detail/`} className="text-[#333333] hover:text-[#ca6508]">
          {title}
        </a>
      </h5>


          <p class="text-sm text-[#333333]">{date} │ {fileType}</p>

          <div class="flex flex-col gap-0 items-start flex-1 self-stretch relative w-full h-full bg-transparent">

              <p class="text-base text-[#333333] line-clamp-4">{contentText}</p>

          </div>

      </div>

  </div>
  );
};

export default ContentTile;
