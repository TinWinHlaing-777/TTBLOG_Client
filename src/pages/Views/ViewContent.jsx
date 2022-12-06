import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import ProductCards from '../../components/ProductCards/ProductCards';
import './viewContent.css';

const ViewContent = () => {
  return (
    <>
      <Navbar />
      <div className='show__list__container'>
        <ProductCards />
      </div>
      <Footer />
    </>
  );
};

export default ViewContent;
