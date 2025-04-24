import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './About';

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      
      <Footer />
    </>
  );
}

export default AppLayout;
