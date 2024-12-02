import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignupSection from './components/SignupSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

const App = () => {
 
  return (
    <>
      <Navbar />
      <Hero />
      <SignupSection />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default App;
