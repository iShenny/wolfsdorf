// Footer.js
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-10 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h5 className="text-xl font-bold mb-4">Kontakt</h5>
            <p className="mb-2">Tel. číslo: +420 123 456 789</p>
            <p className="mb-2">E-mail: kontakt@obecvlkovice.cz</p>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-4">Sledujte nás</h5>
            <div className="flex">
              <FacebookIcon className="mr-4 cursor-pointer" style={{ color: '#fff' }}/>
              <InstagramIcon className="mr-4 cursor-pointer" style={{ color: '#fff' }}/>
              <TwitterIcon className="cursor-pointer" style={{ color: '#fff' }}/>
            </div>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-4">Právní informace</h5>
            <p className="mb-2">Obchodní podmínky</p>
            <p className="mb-2">Zásady ochrany osobních údajů</p>
            <p>© 2024 Obec Vlkovice</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
