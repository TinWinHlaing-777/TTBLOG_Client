import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import ProductCards from '../../../components/ProductCards/ProductCards';
import Footer from '../../../components/Footer/Footer';
import './manage.css';

const Manage = () => {
  return (
    <>
      <Navbar />
      <div className='manageCards__container'>
        <ProductCards />
      </div>
      <Footer />
    </>
  );
};

export default Manage;
