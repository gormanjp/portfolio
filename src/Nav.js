import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export class Nav extends React.Component {
  super(){

  }
  render(){
    return (
    <Router hashType="noslash">
      <div className="header raleway ralewayBig">
        <div className="container">
          <ul className="nav navbar-nav">
            <li><Link to="home"><span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></Link></li>
            <li><Link to="about" className="nav__hover">ABOUT</Link></li>
            <li><Link to="projects" className="nav__hover">PROJECTS</Link></li>
            <li><Link to="home" className="nav__hover">RESUME</Link></li>
          </ul>
        </div>
      </div>
    </Router>)
  }
}
