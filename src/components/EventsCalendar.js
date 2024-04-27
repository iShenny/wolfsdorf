// EventsCalendar.js
import React, { useState } from 'react';
import EventCard from './EventCard'; 

const eventsData = [
        {
            day: 5,
            month: 'Červenec',
            title: 'Oslavy výročí 110. let SDH Vlkovice',
            type: 'Kulturní'
        },
        {
            day: 12,
            month: 'Červenec',
            title: 'Letní kino v parku',
            type: 'Kulturní'
        },
        {
            day: 19,
            month: 'Červenec',
            title: 'Farmářské trhy',
            type: 'Obchodní'
        },
        {
            day: 26,
            month: 'Červenec',
            title: 'Turnaj v plážovém volejbalu',
            type: 'Sportovní'
        },
        {
          day: 26,
          month: 'Červenec',
          title: 'Turnaj v plážovém volejbalu',
          type: 'Sportovní'
      }
  ];

  const EventsCalendar = () => {
    const maxVisibleEvents = 4; // Max. počet událostí zobrazených bez scrollování
    const visibleEvents = eventsData.slice(0, maxVisibleEvents);
    
  return (

    <div className="shadow-md flex flex-col w-full max-w-[720px] md:max-w-full bg-white/80">
      {/* Header sekce */}
      <div className="bg-[#082534] py-8 text-white text-center p-4">
        <h2 className="text-xl font-bold">Kalendář akcí</h2>
      </div>

      {/* Kontejner pro události */}
      <div>
        {visibleEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>

      {/* Tlačítko pro přesměrování na stránku se všemi akcemi */}
      {eventsData.length > maxVisibleEvents && (
        <div className="text-center p-4">
          <a 
            href="/vsechny-akce" // Cílová URL pro přesměrování
            className="text-[#ca6508] underline font-semibold hover:text-[#333333]"
          >
            Zobrazit všechny akce
          </a>
        </div>
      )}
    </div>
  );
};

export default EventsCalendar;