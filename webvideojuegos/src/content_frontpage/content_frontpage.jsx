import React, {Component} from 'react';
import Videojuegos_novedades from '../videojuegos_novedades/videojuegos_novedades';


class Content_frontpage extends Component{
    state = {

    }

    render(){
        return(
        <div id="pagina-principal" class="center row" role="main">
        <videojuegos_novedades/>
        <videojuegos_categorias/>
        <videojuegos_rebajas/>
        </div>
        );
    }
}
export default Content_frontpage;
