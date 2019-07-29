import React from 'react';
import Header from './Header';
import Footer from './Footer';

const VirticalLayout = ({ children }) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  );
};

export default VirticalLayout;
