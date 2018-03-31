import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import { withUser } from '../../services/withUser';

class HomePage extends Component {
  render() {
    // get the user prop from props
    const { user } = this.props; 
    return (
      <Container>
        <Row>
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
