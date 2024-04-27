// PhotoGallery.js
import React from 'react';
import PhotoCard from './PhotoCard'; 


const photosData = [
        {
            image: '/images/image1.jpeg',
            title: 'Oslavy výročí 110. let SDH Vlkovice',
            date: '28. 3. 2024',
            text: 'Vážení občané, oznamujeme vám, změnu prodejní doby v prodejně Hruška ve Zbyslavicích. Změna vyjde v platnost od 1. dubna 2024 takto: pondělí až pátek 6:30 - 11:00, 13:00 - 17:00. Sobota 7:00 - 10:00.'
        },
        {
            image: '/images/image1.jpeg',
            title: 'Oslavy výročí 110. let SDH Vlkovice',
            date: '28. 3. 2024',
            text: 'Vážení občané, oznamujeme vám, změnu prodejní doby v prodejně Hruška ve Zbyslavicích. Změna vyjde v platnost od 1. dubna 2024 takto: pondělí až pátek 6:30 - 11:00, 13:00 - 17:00. Sobota 7:00 - 10:00.'
        },
        {
            image: '/images/image1.jpeg',
            title: 'Oslavy výročí 110. let SDH Vlkovice',
            date: '28. 3. 2024',
            text: 'Vážení občané, oznamujeme vám, změnu prodejní doby v prodejně Hruška ve Zbyslavicích. Změna vyjde v platnost od 1. dubna 2024 takto: pondělí až pátek 6:30 - 11:00, 13:00 - 17:00. Sobota 7:00 - 10:00.'
        },
        {
            image: '/images/image1.jpeg',
            title: 'Oslavy výročí 110. let SDH Vlkovice',
            date: '28. 3. 2024',
            text: 'Vážení občané, oznamujeme vám, změnu prodejní doby v prodejně Hruška ve Zbyslavicích. Změna vyjde v platnost od 1. dubna 2024 takto: pondělí až pátek 6:30 - 11:00, 13:00 - 17:00. Sobota 7:00 - 10:00.'
        }
        
  ];

  const PhotoGallery = () => {
    const maxVisiblePhotos = 3; // Maximální počet fotografií zobrazených bez scrollování
    const visiblePhotos = photosData.slice(0, maxVisiblePhotos);
  
    return (
    <div className="shadow-md flex flex-col gap-0 items-center flex-1 relative w-full bg-white/80">

        {/* HEADER */}
        <div className="flex gap-0 justify-center items-center self-stretch relative w-full bg-[#082534]">
            <div className="py-8 flex gap-0 justify-center items-center flex-1 relative w-full bg-transparent">
                <h5 className="text-center font-semibold text-xl text-neutral-50">
                   Fotografie z akcí
                </h5>
            </div>
        </div>

{/* Kontejner pro fotky */}
<div>
        {visiblePhotos.map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))}
      </div>

      {/* Tlačítko pro přesměrování na stránku se všemi fotografiemi */}
      {photosData.length > maxVisiblePhotos && (
        <div className="text-center p-4">
          <a
            href="/vsechny-fotografie" // Cílová URL pro přesměrování
            className="text-[#ca6508] underline font-semibold hover:text-[#333333]"
          >
            Otevřít celou galerii
          </a>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;