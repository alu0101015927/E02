import React, {Component} from 'react';
import classes from './CardHeader.module.css';

class CardHeader extends Component {
    render() {

      const image = this.props.image;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        
        <header style={style} className={classes.cardHeader}>
        </header>
      )
    }
}

export default CardHeader;

