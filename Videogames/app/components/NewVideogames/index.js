import React from 'react';
// import PropTypes from 'prop-types';

import ElementVideogame from '../ElementVideogame';
// import messages from './messages';
import data from './data';

function NewVideogames() {
  return (
    <div>
      <ul
        id="videogames"
        className="tabs tab-demo z-depth-1"
        onFocus="toggleFocus(this)"
        onBlur="toggleFocus(this)"
      >
        {data.map((src, srcIndex) => (
          <ElementVideogame
            image_src={src}
            image_alt={data.alt[srcIndex]}
            reference={data.ref[srcIndex]}
            message={data.message[srcIndex]}
          />
        ))}
      </ul>
    </div>
  );
}

export default NewVideogames;
