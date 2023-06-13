import React from 'react';
import Cabapp from "./menu/Cabapp.js"
// import "./App.css"
import Tamplate from './besic/tamplate';
import Gift from '../Gift/Gift.js';
import Slide from './besic/slide';
import Footer from './Footer/footer';
import PopCat from '../PopCat/PopCat.js';
const Cab = () => {
  return (
    <div>
      
      <Slide/>
      <Cabapp/>
      {/* <Tamplate/> */}
      {/* <PopCat/> */}
      <Gift/>
      <Footer/>
    </div>
  );
};

export default Cab
