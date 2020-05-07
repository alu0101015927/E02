import React from 'react';
import Header from '../../Header/Header';
import Slider from '../../Slider/Slider';
import Sidebar from '../../SideBar/SideBar';
import Footer from '../../Footer/Footer';
import Card from '../../Card/Card';
import { Grid } from '@material-ui/core';
import axios from 'axios';



export default class HomeView extends React.Component {

  state = {
    games: [],
  }

  componentWillMount() {
    this.getGames();
  }

  getGames = () => {
    axios.get("http://localhost:3900/getGames")
      .then(res => {
        const games = res.data;
        this.setState({ games })
        console.log(this.state);
      });
  }
  let games = this.state.games;
  render() {
    return (
    <ul>
      { games.map(game => {
        <h1>game.title</h1>
      })}
    </ul>
    )
  }
}


