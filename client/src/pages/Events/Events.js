import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import { withUser } from '../../services/withUser';
import { EventList } from '../../components/Events';
import './Events.css';

class Events extends Component {
  render() {
    return (
      <div className="eventsContainer">
        <Row>
          <Col>
            <h1>Browse Green Events</h1>
            <Row>
              <EventList />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withUser(Events);