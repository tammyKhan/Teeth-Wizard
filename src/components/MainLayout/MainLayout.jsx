import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../About';
import Navbar from '../Navbar';

const MainLayout = () => {
  return (
    <div className=''>
      <div className='w-11/12 mx-auto '>
      <Navbar></Navbar>
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;