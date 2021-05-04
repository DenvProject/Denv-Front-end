import React from 'react';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import './DefaultLayout.css';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header/>
      <SideBar />
      <div className="content">
        {children}
      </div>
    </>
  );
}