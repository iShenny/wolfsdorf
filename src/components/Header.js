// src/components/Header.js
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Header = () => {
  // isMenuOpen sleduje, zda je mobilní menu otevřené nebo zavřené
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Funkce pro přepínání stavu menu (otevřeno/zavřeno)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Header je pozicován absolutně na vrcholu stránky, z-index zajišťuje, že zůstane nad ostatními prvky
    <header className="absolute top-0 left-0 w-full flex justify-center items-center pt-8 z-30">
      {/* Tato sekce by obsahovala logo nebo titulek vašeho webu, pokud byste si přáli něco přidat */}

      {/* Klasické menu, které se zobrazuje na širších obrazovkách (nad 768px) */}
      <nav className="hidden md:flex items-center bg-[#082534] shadow-xl px-16 gap-x-10">
        {/* Jednotlivé navigační odkazy, které obsahují hover efekt pro podtržení */}
        <a href="#o-vlkovicich" className="text-white font-bold text-xl py-8 hover:underline">O Vlkovicích</a>
        <a href="#zivot-v-obci" className="text-white font-bold text-xl py-8 hover:underline">Život v obci</a>
        <a href="#volny-cas" className="text-white font-bold text-xl py-8 hover:underline">Volný čas</a>
        <a href="#mestsky-urad" className="text-[#94CBFF] font-bold text-xl py-8 hover:underline">Městský úřad</a>
      </nav>

      {/* Hamburger menu ikona zobrazená na menších obrazovkách */}
      <button className="md:hidden p-4 z-50 ml-auto" onClick={toggleMenu} style={{ color: 'white' }}>
        {isMenuOpen ? <CloseIcon style={{ fontSize: '2rem' }} /> : <MenuIcon style={{ fontSize: '2rem' }} />}
      </button>

      {/* Mobilní menu, které se zobrazuje při aktivaci hamburger menu.
          Pokud je isMenuOpen true, menu se zobrazí. Pokud je false, menu je skryté.
          Menu je fixně pozicované, takže zůstává na místě i při scrollování. */}
      <div className={`fixed inset-0 bg-[#082534] p-7 flex flex-col items-center justify-start gap-10 ${isMenuOpen ? 'flex' : 'hidden'} z-50`}>
      <button className="md:hidden p-4 z-50 ml-auto" onClick={toggleMenu} style={{ color: 'white' }}>
        {isMenuOpen ? <CloseIcon style={{ fontSize: '2rem' }} /> : <MenuIcon style={{ fontSize: '2rem' }} />}
      </button>
        {/* Seznam navigačních odkazů */}
        <div className="flex flex-col items-center justify-center gap-10">
            <a href="#o-vlkovicich" className="text-white font-bold text-xl hover:underline">O Vlkovicích</a>
            <a href="#zivot-v-obci" className="text-white font-bold text-xl hover:underline">Život v obci</a>
            <a href="#volny-cas" className="text-white font-bold text-xl hover:underline">Volný čas</a>
            <a href="#mestsky-urad" className="text-[#94CBFF] font-bold text-xl hover:underline">Městský úřad</a>
        </div>
    </div>
    </header>
  );
};

export default Header;