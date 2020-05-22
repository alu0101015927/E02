import React, { Component} from 'react';
import classes from './GameCard.module.css';
import CardHeader from '../CardHeader/CardHeader';
import CardBody from '../CardBody/CardBody';
import ResponsiveDialog from '../ResponsiveDialog/ResponsiveDialog';

class GameCard extends Component {
    render() {
      return (
        <article className={classes.gamecard}>
          <CardHeader image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
          <ResponsiveDialog title={this.props.details.title} image={this.props.details.image} text={this.props.details.text}/>
        </article>
      )
    }
}

export default GameCard;