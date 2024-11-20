import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About';
import Navbar from '../Navbar';

const MainLayout = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;