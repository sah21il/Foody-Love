import React from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Slider from './components/Slider';
import About from './components/About';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import OurPackages from './components/OurPackages';
import MobileApps from './components/MobileApps';
import FooterWidget from './components/FooterWidget'
import Footer from './components/Footer';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
// import './assets/css/plugins.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

const App = () => {
  return (
    <div>
      
      <Header />
      <Preloader />
      <Slider />
      <About />
      <Features />
      <Portfolio />
      <OurPackages />
      <MobileApps />
      <FooterWidget />
      <Footer />
    </div>
  );
}

export default App;
