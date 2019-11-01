import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import HeaderLink from '../Header/HeaderLink';
import ALINK from '../ALink';
import Img from '../Header/Img';

function ElementVideogame(props) {
  return (
    <li id={props.id1} className={props.className1}>
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
      </a>
      <HeaderLink to={props.reference}>
        <FormattedMessage defaultMessage={props.message} />
      </HeaderLink>
    </li>
  );
}

ElementVideogame.propTypes = {
  ariaexp: 'false',
  tabs: '0',
  image_src: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  image_alt: PropTypes.string.isRequired,
  id1: 'elemento-libro',
  reference: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  className1: 'tab',
  message: PropTypes.string.isRequired,
  on: 'toggleFocus(this)',
};

export default ElementVideogame;
