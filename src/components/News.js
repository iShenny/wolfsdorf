// src/components/News.js
import React from 'react';
import ContentTile from './ContentTile';

const newsData = [
    {
        id: 1,
        image: '/images/image1.jpeg',
        title: 'Změna provozní doby prodejny Coop od  26. 4. 2024',
        date: '30. května 2024',
        fileType: 'Fotogalerie',
        contentText: 'Vážení občané, oznamujeme vám, změnu prodejní doby v prodejně Hruška ve Zbyslavicích. Změna vyjde v platnost od 1. dubna 2024 takto: pondělí až pátek 6:30 - 11:00, 13:00 - 17:00. Sobota 7:00 - 10:00.'
      },
      {
        id: 2,
        image: '/images/image2.jpg',
        title: 'Otevření nové knihovny - Otevření nové knihovny',
        date: '15. června 2024',
        fileType: 'Video',
        contentText: 'Navštivte nově otevřenou městskou knihovnu, která nabízí rozsáhlou sbírku knih, moderní studijní prostory a řadu kulturních akcí. Slavnostní otevření za přítomnosti autora bestsellerů Jana Nováka.'
      },
      {
        id: 3,
        image: '/images/image3.jpg',
        title: 'Místní volby s velmi dlouhým názvem, který se bude zalamovat na několik řádků. A je potřeba vyzkoušet funkční elipsis',
        date: '20. října 2024',
        fileType: 'Článek',
        contentText: 'Místní volby se blíží a je čas se seznámit s kandidáty, kteří chtějí změnit naše město k lepšímu. Nezapomeňte, že vaše hlas může rozhodnout o budoucnosti naší komunity.'
      },
      {
        id: 4,
        image: '/images/image4.jpg',
        title: 'Charitativní běh',
        date: '5. září 2024',
        fileType: 'Fotogalerie',
        contentText: 'Zúčastněte se charitativního běhu a podpořte s námi dětský domov. Každý kilometr, který uběhnete, přispěje k lepší budoucnosti našich dětí. Očekáváme účast stovky běžců, připojte se k nám a pomozte dětem na cestě za štěstím.'
      },
      {
        id: 5,
        image: '/images/image5.jpg',
        title: 'Koncert na náměstí',
        date: '12. srpna 2024',
        fileType: 'Video',
        contentText: 'Přijďte si užít letní koncert na náměstí s účastí oblíbených kapel a umělců.'
      },
      {
        id: 6,
        image: '/images/image6.jpg',
        title: 'Výstava místních umělců',
        date: '22. července 2024',
        fileType: 'Fotogalerie',
        contentText: 'Prohlédněte si nejnovější díla od místních umělců ve speciálně připravené výstavě, která ukazuje kreativitu a talent naší komunity. Výstava zahrnuje díla v různých médiích od malby až po digitální umění.'
      }
  ];

  const maxVisibleNews = 8;  // Max. počet novinek zobrazených bez scrollování

  const News = () => {
      const visibleNews = newsData.slice(0, maxVisibleNews);
  
      return (
          <div className="flex flex-wrap justify-center max-w-[1440px] gap-6 mx-auto p-6">
              {visibleNews.map((item) => (
                  <ContentTile key={item.id} {...item} />
              ))}
  
              {newsData.length > maxVisibleNews && (
                  <div className="w-full text-center">
                      <a 
                          href="/vsechny-novinky"  // Cílová URL pro přesměrování
                          className="mt-4 text-[#ca6508] underline font-semibold hover:text-[#333333]"
                      >
                          Zobrazit vše
                      </a>
                  </div>
              )}
          </div>
      );
  };
  
  export default News;