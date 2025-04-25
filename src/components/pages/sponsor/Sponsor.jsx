import React from 'react';
import { Outlet } from 'react-router-dom'; // <-- Add this!
import Navigation from './Navigation';
import Appreciation from './Appreciation'
import Footer from './Footer';
import Residents from './Residents';
import ChildCard from './ChildCard';

const Sponsor = () => {
  return (
    <div>
      <Navigation />
      <Outlet /> {/* <-- This will render either Residents or NonResidents */}
      
      <Appreciation />
      <Footer />
    </div>
  );
};

export default Sponsor;
