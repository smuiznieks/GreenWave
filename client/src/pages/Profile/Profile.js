import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { withUser } from '../../services/withUser';
import { AttendingList, EventList, EventModal} from '../../components/Events';
import { LocationList, LocationModal} from "../../components/Locations";

class Profile extends Component {
    state = {
        upcomingEvents: [],
        myEvents: [],
        myLocations: []
    };

    render() {
        const { user } = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center" style={{margin: 40}}>Let's save Mother Earth together, {user.username}!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <EventModal /> 
                        <LocationModal />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <AttendingList upcomingEvents />
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md="6">
                        <EventList myEvents />
                    </Col>
                    <Col sm="12" md="6">
                        <LocationList myLocations />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withUser(Profile);
