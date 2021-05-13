import React from 'react';

import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

import './DefaultLayout.css';

export default function DefaultLayout({ page, children }) {
  return (
    <>
      <Header/>
      <SideBar page={page} />
      <div className="content">
        {children}
      </div>
    </>
  );
}