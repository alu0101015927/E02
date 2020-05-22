import React from 'react';
import classes from './PageFooter.module.css';
import { Theme, Container, Grid, Typography, Box } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Footer() {

    return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <a className={classes.link} href="/">
          Inicio
        </a>
        <span className={classes.spacer}>·</span>
        <a className={classes.link} href="/foro">
          Foro
        </a>
        <span className={classes.spacer}>·</span>
        <a className={classes.link} href="/juego">
          Añadir Juego
        </a>
        <span className={classes.spacer}>·</span>
        <a className={classes.link} href="/not-found">
          Otra cosa
        </a>
      </Container>
      <Container className={classes.container}>
        <a className={classes.link} href="/facebook">
            <FacebookIcon className={classes.icon} fontSize="large" />
        </a>
        <a className={classes.link} href="/twitter">
            <TwitterIcon className={classes.icon} fontSize="large" />
        </a>
        <a className={classes.link} href="/linkedin">
            <LinkedInIcon className={classes.icon} fontSize="large" />
        </a>
      </Container>
      <Container >
            <span className={classes.copyright}>© SYTW E02</span>
      </Container>
    </div>
  );
}