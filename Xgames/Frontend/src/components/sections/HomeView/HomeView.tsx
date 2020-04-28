import React, { Fragment } from 'react';
import Header from '../../Header/Header';
import Slider from '../../Slider/Slider';
import Sidebar from '../../SideBar/SideBar';
import Footer from '../../Footer/Footer';
import Card from '../../Card/Card';
import { Grid } from '@material-ui/core';

const HomeView: React.FC = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Grid container alignContent='center' alignItems='flex-start' spacing={3} >
        <Grid item xs={12} sm={12} md={9} xl={9} lg={9}>
          <Grid container alignContent='flex-start' justify='flex-start' alignItems='flex-start' spacing={3} >
            <Grid item xs={12} sm={12} md={12} xl={12} lg={12} justify='center'>
              <h1>Titulos mas buscados</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6} spacing={1} justify='flex-start'>
              <Card />
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6} spacing={1} justify='flex-start'>
              <Card />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={3} xl={3} lg={3} justify='flex-start'>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={12} md={9} xl={9} lg={9}>
          <Grid container alignContent='flex-start' justify='flex-start' alignItems='flex-start' spacing={3} >
            <Grid item xs={12} sm={12} md={12} xl={12} lg={12} justify='center'>
              <h1>Favoritos</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6} justify='flex-start'>
              <Card />
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6} justify='flex-start'>
              <Card />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={9} xl={9} lg={9}>
          <Grid container alignContent='flex-start' justify='flex-start' alignItems='flex-start' spacing={3} >
            <Grid item xs={12} sm={12} md={12} xl={12} lg={12} justify='center'>
              <h1>Favoritos</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6} justify='flex-start'>
              <Card />
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={6} lg={6} justify='flex-start'>
              <Card />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default HomeView;
