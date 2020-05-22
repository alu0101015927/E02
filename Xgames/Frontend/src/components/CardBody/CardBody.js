import React, { Component } from 'react';
import classes from './CardBody.module.css';
import CardButton from '../CardButton/CardButton';
import 'font-awesome/css/font-awesome.min.css';


class CardBody extends Component {
    render() {
      return (
        <div className={classes.cardBody}>
            <div className={classes.cardInformation}>
                <p className={classes.CardGameCategory}>Aventura</p>
                <p className={classes.CardRating}><i class={[classes.cardStar,"fa fa-star"].join(' ')}></i>8.2</p>
          </div>
          <h2>{this.props.title}</h2>
          
          <p className={classes.cardContent}>{this.props.text}</p>
          <CardButton/>
        </div>
      )
    }
}

export default CardBody;