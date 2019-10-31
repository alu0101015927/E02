import React, {Component} from 'react';


class Page_footer extends Component{
    state = {}


    render(){
        return(

        <footer class="page-footer">
            <div class="container">
                <div class="center row">
                    <div class="col l4 s12">
                        <h5 class="white-text">Quienes somos</h5>
                        <p id="descripcion" class="grey-text text-lighten-4">
                        Descripcion pagina videojuegos
                        </p>
                    </div>
                    <div class="col m6 offset-m3 xl4 l4 offset-l1 s12">
                        <h5 class="white-text">Ubicación</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3506.8985774735934!2d-16.322677222337415!3d28.48260090236116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m1!1m0!5e0!3m2!1ses!2ses!4v1553097652506" frameborder="0" styles="border:0" allowfullscreen></iframe>
                        <p id="direccion"><i class="fas fa-map-marker-alt"></i>Camino San Francisco de Paula</p>
                    </div>
                    <div class="col l2 offset-l1 s12">
                        <h5 class="white-text">Contactanos</h5>
                        <ul>
                        <li><a class="grey-text text-lighten-3" href="#" onfocus="toggleFocus(this)" onblur="toggleFocus(this)">
                            <i class="fab fa-twitter"></i>
                            Twitter</a>
                        </li>
                        <li><a class="grey-text text-lighten-3" href="#" onfocus="toggleFocus(this)" onblur="toggleFocus(this)">
                            <i class="fab fa-instagram"></i>
                            Instagram</a>
                        </li>
                        </ul>
                    </div>
                    <div class="col l2 offset-l1 s12">
                        <h5 class="white-text">Mapa web</h5>
                        <p id="descripcion" class="grey-text text-lighten-4">
                        <ul>
                            <li><a class="mapa-web" href="#" onfocus="toggleFocus(this)" onblur="toggleFocus(this)">Inicio</a></li>
                            <li><a class="mapa-web" href="#" onfocus="toggleFocus(this)" onblur="toggleFocus(this)">Otro</a></li>
                            <li><a class="mapa-web" href="#" onfocus="toggleFocus(this)" onblur="toggleFocus(this)">Catálogo</a></li>
                            <li><a class="mapa-web" href="#" onfocus="toggleFocus(this)" onblur="toggleFocus(this)">Inicio sesion</a></li>
                            <li><a class="mapa-web" href="#" onfocus="toggleFocus(this)" onblur="toggleFocus(this)">Registrarse</a></li>
                        </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2019 Copyright Text
                </div>
            </div>
        </footer>
        );
    }
}

export default Page_footer;