import React from 'react';
import Header from '../../Header/Header';
import Slider from '../../Slider/Slider';
import Sidebar from '../../SideBar/SideBar';
import Footer from '../../Footer/Footer';
import Card from '../../Card/Card';
import { Grid } from '@material-ui/core';
import axios from 'axios';



export default class HomeView extends React.Component {
  return(){
    <Header />
    <Slider />
    <Sidebar />
    <Footer />
    <Card />
  }

}


