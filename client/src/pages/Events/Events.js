import React, { Component } from "react";
import { Row, Col, Container } from 'reactstrap';
import { withUser } from '../../services/withUser';
import { EventList } from '../../components/Events';

class Events extends Component {
  render() {
    const { user } = this.props;
    return (
      <Container>
        {!user && <h1>Please log in to view this page.</h1>}
        {user &&
          <Row>
            <Col>
              <h1>Browse Green Events</h1>
              <Row>
                <EventList />
              </Row>
            </Col>
          </Row>
        }
      </Container>
    );
  }
}

export default withUser(Events);