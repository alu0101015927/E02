import React from 'react';
//import MyFilteringComponent from './my-components/filter-component';

import ALINK from '../ALink';
import Img from '../Img';
import NavBar from '../NavBar';
import Banner from './banner.png';
import SearchBar from '../SearchBar';



function Header() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <ALINK href="index.html">
        <Img src={Banner} alt="X Games" />
      </ALINK>
    </div>
  );
}

export default Header;
