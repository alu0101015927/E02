<<<<<<< HEAD
import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}</a>
    </li>
);

=======
import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}</a>
    </li>
);

>>>>>>> origin/dev-vlad
export default navigationItem;