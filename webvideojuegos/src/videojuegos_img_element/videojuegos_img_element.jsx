import React, {Component} from 'react';


const Videojuegos_img_element = (props) => {

    return(
        <img class={props.class} src={props.src} alt={props.alt} role={props.role}/>
    );

}   
export default Videojuegos_img_element;
