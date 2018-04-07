import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { withUser } from '../../services/withUser';
import { EventList } from '../../components/Events';
import './Events.css';

class Events extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <EventList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withUser(Events);