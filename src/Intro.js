import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export const Intro = () => {
  return (
    <Jumbotron className="intro" id="home">
      <h1 className="ralewaySmall">Hi there!</h1>
      <div className="container">
        <div className="row">
            <div className="col-md-5"><hr/></div>
            <div className="col-md-2" id="jamie"><h2 className="ralewaySmall"><strong>I'm Jamie</strong></h2></div>
            <div className="col-md-5"><hr/></div>
        </div>
      </div>
      <h1 className="ralewaySmall">Web Developer.<br/>Coffee Drinker.</h1>
    </Jumbotron>)
};
