import React,{Component} from 'react';

class Navbar_element extends Component{

    state = {}

    render(){
    return(
        <li><a {...this.props}>{this.props.children}</a></li>
    );
    }
}   

export default Navbar_element;