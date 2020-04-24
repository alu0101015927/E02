import React from 'react';
import './assets/css/App.css';

import Header from './components/Header/Header.tsx';
import Slider from './components/Slider/Slider.tsx';
import Sidebar from './components/SideBar/SideBar.tsx';
import Footer from './components/Footer/Footer.tsx';
import Card from './components/Card/Card.tsx'
import { Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Grid container alignContent='center' alignItems='flex-start' spacing={3} >
        <Grid item xs={12} sm={12} md={3} xl={3} lg={3} justify='flex-start'>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={12} md={9} xl={9} lg={9}>
          <Grid container alignContent='flex-start' justify='flex-start' alignItems='flex-start' spacing={3} >
          <Grid item xs={12} sm={12} md={12} xl={12} lg={12} justify='center'>
            <h1>Titulos mas buscados</h1>
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
      <h1>Relativos</h1>
      <Card />
      <h1>Favoritos</h1>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
