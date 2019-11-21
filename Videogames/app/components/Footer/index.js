import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/ALink';
import Wrapper from './Wrapper';
import messages from './messages';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

function Footer() {
  return (
    <Wrapper>
      <CssBaseline />

      <Grid container spacing={1}>

        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <section>
              <Box component="span" m={1} color="primary.main" bgcolor="text.hint">

                <FormattedMessage {...messages.about} />

              </Box>
            </section>
            <section>
              <FormattedMessage
                {...messages.contacto}
                values={{
                  icon1: (
                    <Link href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </Link>
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
          </Grid>


          <Grid item xs={4}>
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
          </Grid>

          <Grid item xs={4}>
            <section>
              <Typography color="red" align="center" clone>
                <FormattedMessage color="red" align="center" {...messages.licencia} />
              </Typography>
            </section>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default Footer;
