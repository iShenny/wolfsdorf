// CulturalSection.js
import React from 'react';
import EventsCalendar from './EventsCalendar'; // Adjust the path as necessary
import PhotoGallery from './PhotoGallery'; // Adjust the path as necessary

const CulturalSection = () => {
  return (
    <div className="flex flex-wrap justify-center max-w-[1440px] mx-auto">
      <div className="w-full md:w-1/2 p-6">
        <EventsCalendar />
      </div>
      <div className="w-full md:w-1/2 p-6">
        <PhotoGallery />
      </div>
    </div>

  );
};

export default CulturalSection;
