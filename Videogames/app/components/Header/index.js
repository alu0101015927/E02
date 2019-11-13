import React from 'react';

import ALINK from '../ALink';
import Img from './Img';
import Banner from './banner.png';

function Header() {
  return (
    <div>
      <ALINK href="index.html">
        <Img src={Banner} alt="X Games" />
      </ALINK>
    </div>
  );
}

export default Header;
