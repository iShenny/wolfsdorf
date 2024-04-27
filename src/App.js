// src/App.js
import React from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import Tabs from './components/Tabs';
import CulturalSection from './components/CulturalSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <Tabs />
      <CulturalSection />
      <Footer />
      {/* Zde můžete přidat další komponenty */}
    </div>
  );
}

export default App;