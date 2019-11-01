import React from 'react';
// import PropTypes from 'prop-types';

import NewsElement from '../NewsElement';
// import messages from './messages';

function NewsList(props) {
  return (
    <div>
      <ul
        id="noticias"
        className="tabs tab-demo z-depth-1"
        onFocus="toggleFocus(this)"
        onBlur="toggleFocus(this)"
      >
        {props.src.map((src, srcIndex) => (
          <NewsElement
            image_src={src}
            image_alt={props.alt[srcIndex]}
            reference={props.ref[srcIndex]}
            news_con={props.content[srcIndex]}
            message={props.message[srcIndex]}
          />
        ))}
      </ul>
    </div>
  );
}

NewsList.propTypes = {
  src: ['', '', '', '', ''],
  alt: ['', '', '', '', ''],
  ref: ['', '', '', '', ''], // ruta
  message: ['', '', '', '', ''], // titulo videojuego
  content: ['', '', '', '', ''],
};

export default NewsList;
