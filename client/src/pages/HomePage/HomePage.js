import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { withUser } from '../../services/withUser';
import "./HomePage.css";

class HomePage extends Component {
    state = {
        user: ''
    };

  render() {
    // get the user prop from props
    const { user } = this.props; 
    return (
      <Container>
        <Row>
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
