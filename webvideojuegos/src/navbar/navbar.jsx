import React, {Component} from 'react';
import Navbar_element from '../navbar_element/navbar_element.jsx';


class NavBar extends Component {

    state = {
        href: ["index.html","",""],
        role: "menuitem",
        tabindex: "0",
        false_aria_expanded: "false",
        on_focus: "toggleFocus(this)",

    }
    render(){
    return (
        <nav aria-label="Top Menu Bar">
            <a href="" class="brand-logo" onfocus={this.state.on_focus} onblur={this.state.on_focus}><img id="logo-pag" src="" alt="logo pagina videojuegos"></img></a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down" id="barra" onfocus={this.state.on_focus} onblur={this.state.on_focus}>
               <Navbar_element href={this.state.href[0]} role={this.state.role} tabindex={this.state.tabindex} aria-expanded={this.state.false_aria_expanded} onfocus={this.state.on_focus} onblur={this.state.on_focus}>Ultimas novedades</Navbar_element>
               <Navbar_element href={this.state.href[0]} role={this.state.role} tabindex={this.state.tabindex} aria-expanded={this.state.false_aria_expanded} onfocus={this.state.on_focus} onblur={this.state.on_focus}>Buscar juegos</Navbar_element>
               <Navbar_element href={this.state.href[0]} role={this.state.role} tabindex={this.state.tabindex} aria-expanded={this.state.false_aria_expanded} onfocus={this.state.on_focus} onblur={this.state.on_focus}>..</Navbar_element>
               <Navbar_element href={this.state.href[0]} role={this.state.role} tabindex={this.state.tabindex} aria-expanded={this.state.false_aria_expanded} onfocus={this.state.on_focus} onblur={this.state.on_focus}>Registrarse</Navbar_element>
               <Navbar_element href={this.state.href[0]} role={this.state.role} tabindex={this.state.tabindex} aria-expanded={this.state.false_aria_expanded} onfocus={this.state.on_focus} onblur={this.state.on_focus}>Iniciar sesion</Navbar_element>
               <Navbar_element href={this.state.href[0]} role={this.state.role} tabindex={this.state.tabindex} aria-expanded={this.state.false_aria_expanded} onfocus={this.state.on_focus} onblur={this.state.on_focus}>Cerrar sesion</Navbar_element>
               <li>
                  <div class="center row">
                     <div class="col s12 ">
                        <div class="row" id="topbarsearch">
                           <div class="input-field col s6 s12 red-text">
                              <i class="white-text material-icons prefix"></i>
                              <input type="text" aria-label="barra de navegacion" placeholder="search" id="autocomplete-input" class="autocomplete white-text" onfocus="toggleFocus(this)" onblur="toggleFocus(this)"/>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
               </ul>
      </nav>
    );
    }

}

export default NavBar;
