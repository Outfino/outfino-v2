import React, { useEffect, useRef } from 'react';
import { useLoading } from '../context/LoadingContext';
import LoadingScreen from '../components/LoadingScreen';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Partners from '../components/Partners';
import SupportSection from '../components/SupportSection';
import Awards from '../components/Awards';
import Newsletter from '../components/Newsletter';
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';
import '../styles/Home.scss';

const Home = () => {
  const { isLoading } = useLoading();

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className={`home-container ${isLoading ? 'loading' : 'loaded'}`}>
        <Navigation />
        <Hero />
        <Features />
        <SupportSection />
        <Awards />
        <Newsletter />
        <AppDownload />
        <Footer />
      </div>
    </>
  );
};

export default Home;