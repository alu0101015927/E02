import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './navbar/navbar';
import Content_frontpage from './content_frontpage/content_frontpage';
import Page_footer from './page_footer/page_footer';

class App extends React.Component {

  state = {}

  render(){
    return (
      <div className="pagina-principal">
        <header className="App-header">
        <link rel="stylesheet" type="text/css" href="style/style.css"/>
        <h1>Videojuegos</h1>
        <NavBar/>
        </header>
        <Content_frontpage/>
      <Page_footer/>
      </div>
    );
  }
}

export default App;
