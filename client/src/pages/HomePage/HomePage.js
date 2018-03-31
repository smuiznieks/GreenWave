import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { withUser } from '../../services/withUser';
import "./HomePage.css";

class HomePage extends Component {
  render() {
    // get the user prop from props
    const { user } = this.props; 
    return (
      <Container>
        <Row>
          <img src={require("./images/GreenWaveLogo.jpg")} alt="GreenWaveLogo" className="img-responsive" />
          <h1>Welcome to GreenWave</h1>
          <h2>GreenWave is a community of environmentally<br/>
              conscious individuals looking to promote<br/>
              more sustainable living in their local communities
          </h2>
          {/* if user signed in */}
          {user &&
            <div>Hi there, {user.username}!</div>
          }
          {!user &&
            <div>Hey! I don't recognize you! Log in using the link above</div>
          }
        </Row>
      </Container>
    );
  }
}

export default withUser(HomePage);