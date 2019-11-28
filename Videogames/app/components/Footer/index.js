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
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Divider from '@material-ui/core/Divider';



function Footer() {
  return (
    <Wrapper>
      <CssBaseline />

      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <Typography align="center" clone>
              Quienes somos<Divider variant="inset" component="div" />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align="center" clone>
              Ubicacion<Divider variant="inset" component="div" />
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <section>
              <Box component="span" m={1}>
                <Typography align="center">
                  Somos una página de videojuegos..
                </Typography>
              </Box>
            </section>
          </Grid>
          <Grid item xs={6}>
            <section>
              <iframe
                align="center"
                title="Mapa"
                src="https://bit.ly/2JHjk2C"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
              />
            </section>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <section>
              <Typography align="center"> Contacto<Divider variant="inset" component="div" /> </Typography>
            </section>
          </Grid>
          <Grid item xs={6}>
            <section>
              <Typography align="center">Camino San Francisco de Paula<i className="fas fa-map-marker-alt" />
              </Typography>
            </section>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <section>
              <Link href="https://twitter.com/">

                <Typography align="center"> <TwitterIcon/>Twitter </Typography>
                <i className="fab fa-twitter" />
              </Link>
            </section>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <section>
              <Link href="https://instagram.com/">
                <Typography align="center"> <InstagramIcon/>Instagram </Typography>
                <i className="fab fa-instagram" />
              </Link>
            </section>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <section>
              <Link href="https://linkedin.com/">
                <Typography align="center"><LinkedInIcon/> LinkedIn </Typography>
                <i className="fab fa-linkedin" />
              </Link>
            </section>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={9}>
          </Grid>
          <Grid item xs={3}>
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
