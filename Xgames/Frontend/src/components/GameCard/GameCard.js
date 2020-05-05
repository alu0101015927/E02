import React, { Component} from 'react';
import classes from './GameCard.module.css';
import CardHeader from '../CardHeader/CardHeader';
import CardBody from '../CardBody/CardBody';

class GameCard extends Component {
    render() {
      return (
        <article className={classes.gamecard}>
          <CardHeader image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
}

export default GameCard;