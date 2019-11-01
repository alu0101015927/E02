import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/ALink';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...messages.about} />
      </section>
      <section>
        <FormattedMessage
          {...messages.contacto}
          values={{
            icon1: (
              <A href="https://twitter.com/">
                <i className="fab fa-twitter" />
              </A>
            ),
            icon2: (
              <A href="https://instagram.com/">
                <i className="fab fa-instagram" />
              </A>
            ),
            icon3: (
              <A href="https://linkedin.com/">
                <i className="fab fa-linkedin" />
              </A>
            ),
          }}
        />
      </section>
      <FormattedMessage
        {...messages.map}
        values={{
          ubic: (
            <iframe
              title="Mapa"
              src="https://bit.ly/2JHjk2C"
              frameBorder="0"
              style={{ border: '0' }}
              allowFullScreen
            />
          ),
          ubic1: <i className="fas fa-map-marker-alt" />,
        }}
      />
      <section>
        <FormattedMessage {...messages.licencia} />
      </section>
    </Wrapper>
  );
}

export default Footer;
