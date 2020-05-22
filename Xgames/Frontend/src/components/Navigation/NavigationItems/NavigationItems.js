import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

import NavigationBarMenu from '../../NavigationBar/NavigationBarMenu';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Inicio</NavigationItem>
        <NavigationItem link="blog.html">Foro</NavigationItem>
        <NavigationItem link="formulario.html">Añadir Juego</NavigationItem>
    <li className={classes.UserProfile}><NavigationBarMenu /></li>
    </ul>
);

export default navigationItems;