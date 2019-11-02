import React from 'react';
// import PropTypes from 'prop-types';

import NewsElement from '../NewsElement';
// import messages from './messages';
import data from './data';

function NewsList() {
  return (
    <div>
      <ul
        id="noticias"
        className="tabs tab-demo z-depth-1"
        onFocus="toggleFocus(this)"
        onBlur="toggleFocus(this)"
      >
        {data.map((src, srcIndex) => (
          <NewsElement
            image_src={src}
            image_alt={data.alt[srcIndex]}
            reference={data.ref[srcIndex]}
            news_con={data.content[srcIndex]}
            message={data.message[srcIndex]}
          />
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
