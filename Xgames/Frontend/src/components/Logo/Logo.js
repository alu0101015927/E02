import React from 'react';
import classes from './Logo.module.css';

import xgames from '../../assets/images/xgames.png';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={xgames} alt="XGames"/>
    </div>
);

export default logo;