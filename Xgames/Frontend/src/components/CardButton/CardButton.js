import React, { Component } from 'react';
import classes from './CardButton.module.css';
import 'font-awesome/css/font-awesome.min.css';


class CardButton extends Component {
    render() {
      return (
        <button className={[classes.buttonCard,"button-primary"].join(' ')}>
          <i className={[classes.buttonIcon,"fa fa-chevron-right"].join(' ')}></i> Find out more
        </button>
      )
    }
}

export default CardButton;
