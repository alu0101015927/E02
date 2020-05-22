import React, {Component} from "react";

import classes from './Slider.module.css';

class Slider extends Component {
    render(){
        return(
            <div id="slider" className="slider-big">
                <h1 className={classes.SliderHeader}>Bienvenido a <strong>X</strong> Games. Tu página de Videojuegos </h1>
            </div>
        )  
    }
}


export default Slider;