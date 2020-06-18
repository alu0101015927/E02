import React from 'react';
import { functionTypeAnnotation } from '@babel/types';

const videogames = [
    {
        name : "Red Dead Redemption",
        genero: "Accion"
    },
    {
        name : "Need for Speed",
        genero : "Carreras"
    }
]

function searchingFor(term){
    return function(x){
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

export default class SearchBar extends React.PureComponent {
    constructor(props){
        super(props);
            this.state = {
                videogames: videogames,
                term: ''
            }

            this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event){
        this.setState({term: event.target.value})
    }

    render(){
        return(
            <div>
                <form>
                <input type="text" onChange={this.searchHandler} />
                </form>
                {
                    this.state.videogames.filter(searchingFor(this.state.term)).map( games =>
                        <div>
                            <b> {games.name} </b>
                            <b> {games.genero} </b>
                        </div>
                    )
                }
            </div>
        );      
    }
}