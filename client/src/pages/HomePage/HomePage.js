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
       
      </Container>
    );
  }
}

export default withUser(HomePage);
