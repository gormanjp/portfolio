import React, { Component } from 'react';
import './App.css';
import { Intro } from './Intro';
import { Portfolio } from './Portfolio';
import { About } from './About';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Nav />
          <Intro />
          <About />
          <Portfolio />
          <Footer />
        </div>
    );
  }
}

export default App;
