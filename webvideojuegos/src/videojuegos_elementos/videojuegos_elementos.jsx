import React, {Component} from 'react';
import Videojuegos_img_element from '../videojuegos_img_element/videojuegos_img_element';


class Videojuegos_elementos extends Component{

    state = {
        element_id: "elemento_libro",
        element_class: "tab",
        href: [" "," "],
        img_class: "responsive-img",
        img_role: "img"
    }

    render(){
        return(
            <li id={this.state.element_id} class={this.state.element_class}><a {...this.props}><videojuegos_img_element class={this.state.img_class} src={this.props.src} alt={this.props.alt} role={this.state.img_role}/>{this.props.children}</a></li>
        );
    }
}

export default Videojuegos_elementos;