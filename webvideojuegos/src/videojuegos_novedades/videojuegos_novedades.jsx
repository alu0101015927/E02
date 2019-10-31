import React, {Component} from 'react';
import Videojuegos_elementos from '../videojuegos_elementos/videojuegos_elementos';



class Videojuegos_novedades extends Component{

    state = {
        element_tab_index: "0",
        element_role: "listitem",
        element_aria: "false",
        element_focus: "toggleFocus(this)",
        element_href: []
    }


    render(){
        return(
            <div id="row-novedades" class="center row">
            <div class="col s12 offset-s1 m8 offset-m1 l8 offset-l1 xl8 offset-xl1">
                <h1 class = "novedades"> Novedades </h1>
                <div id="videojuegos-novedades" class="centre row">
                    <ul id="videojuegos" class="tabs tab-demo z-depth-1" role="list" onfocus="toggleFocus(this)" onblur="toggleFocus(this)">
                    <videojuegos_elementos href={this.state.element_href[0]} role={ this.state.element_role} tabindex={ this.state.element_tab_index} aria-expanded={ this.state.element_aria} onfocus={ this.state.element_focus} onblur={ this.state.element_focus}/>
                    <videojuegos_elementos href={this.state.element_href[0]} role={ this.state.element_role} tabindex={ this.state.element_tab_index} aria-expanded={ this.state.element_aria} onfocus={ this.state.element_focus} onblur={ this.state.element_focus}/>
                    <videojuegos_elementos href={this.state.element_href[0]} role={ this.state.element_role} tabindex={ this.state.element_tab_index} aria-expanded={ this.state.element_aria} onfocus={ this.state.element_focus} onblur={ this.state.element_focus}/>
                    <videojuegos_elementos href={this.state.element_href[0]} role={ this.state.element_role} tabindex={ this.state.element_tab_index} aria-expanded={ this.state.element_aria} onfocus={ this.state.element_focus} onblur={ this.state.element_focus}/>
                    <videojuegos_elementos href={this.state.element_href[0]} role={ this.state.element_role} tabindex={ this.state.element_tab_index} aria-expanded={ this.state.element_aria} onfocus={ this.state.element_focus} onblur={ this.state.element_focus}/>
                    </ul>
                </div>
            </div>
            </div>
        );
    }

}

export default Videojuegos_novedades;
