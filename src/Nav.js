import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export class Nav extends React.Component {
  constructor(){
    super();
    this.state = {
      modalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.close = this.close.bind(this);
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  close() {
    this.setState({
      modalOpen: false
    })
  }
  render(){
    return (
    <div className="">
      <Modal bsSize="large" style={{marginTop: '55px'}} show={this.state.modalOpen} onHide={this.close}>
        <Modal.Body>
          <img
            src="resume.png"
            style={{
              maxWidth: "100%",
              maxHeight: "100%"
            }}
            ></img>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Router hashType="noslash">
        <div className="header raleway ralewayBig">
          <div className="container">
            <ul className="nav navbar-nav">
              <li><Link to="home"><span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span></Link></li>
              <li><Link to="about" className="nav__hover">ABOUT</Link></li>
              <li><Link to="projects" className="nav__hover">PROJECTS</Link></li>
              <li><Link to="home" className="nav__hover" onClick={this.toggleModal}>RESUME</Link></li>
            </ul>
          </div>
        </div>
      </Router>
    </div>
    )
  }
}
