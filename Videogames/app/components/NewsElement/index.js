import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import HeaderLink from '../Header/HeaderLink';
import ALINK from '../ALink';
import Img from '../Header/Img';

function NewsElement(props) {
  return (
    <li id={props.id1} className={props.className1}>
      <HeaderLink to={props.reference}>
        <FormattedMessage defaultMessage={props.message} />
      </HeaderLink>
      <a
        href={props.reference}
        tabIndex={props.tabs}
        aria-expanded={props.ariaexp}
        onFocus={props.on}
        onBlur={props.on}
      >
        <ALINK href={props.reference}>
          <Img src={props.image_src} alt={props.image_alt} />
        </ALINK>
        <p className={props.className2}>
          <span className={props.className3}>News</span>
          {props.news_con}
        </p>
      </a>
    </li>
  );
}

NewsElement.propTypes = {
  ariaexp: 'false',
  tabs: '0',
  image_src: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  image_alt: PropTypes.string.isRequired,
  id1: 'elemento-noticia',
  reference: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  className1: 'tab',
  className2: 'news-content',
  className3: 'free-text-label',
  news_con: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  message: PropTypes.string.isRequired,
  on: 'toggleFocus(this)',
};

export default NewsElement;
