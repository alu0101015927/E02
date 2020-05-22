import React, { Component } from 'react';
import logo from '../../assets/images/xgames.png';
import NavigationBarMenu from '../NavigationBar/NavigationBarMenu';


class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            Games
                        </span>
                    </div>
                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="index.html">Inicio</a>
                            </li>
                            <li>
                                <a href="blog.html">Foro</a>
                            </li>
                            <li>
                                <a href="formulario.html">Añadir Juego</a>
                            </li>
                            <li>
                                <NavigationBarMenu />
                            </li>
                        </ul>
                    </nav>
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;
