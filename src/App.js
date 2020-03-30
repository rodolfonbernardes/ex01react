import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainNavbar } from './MainNavbar';
import { MainHeader } from './MainHeader';
import { MainArcticle } from './MainArcticle';
import { MainSideBar } from './MainSideBar';
import { MainFooter } from './MainFooter';

function App() {
  return (
    <>
      <MainHeader/>
      <MainNavbar items = {["section 1", "section 2", "section 3"]}/>
      <MainArcticle/>
      <MainSideBar/>
      <MainFooter/>
    </>
  );
}

export default App;
