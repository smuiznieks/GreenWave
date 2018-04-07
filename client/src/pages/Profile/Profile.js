import React, { Component, Fragment } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { withUser } from '../../services/withUser';
import { AttendingList, EventList, EventModal} from '../../components/Events';
import { LocationList, LocationModal} from "../../components/Locations";

class Profile extends Component {
    state = {
        upcomingEvents: [],
        myEvents: [],
        myLocations: []
    };

    // onSubmit(eventData) {
    //     if (this.props.event) {
    //         promise = API.updateEvent({
    //             ...eventData,
    //             _id: this.props.event._id
    //         });
    //     } else {
    //         promise = API.createEvent({
    //             ...eventData,
    //             createdBy: this.props.user.username
    //         });
    //     }
    // } 

    render() {
        const { user } = this.props;
        return (
            <Container>
                <Row>
                    <Col size="sm-12">
                        <h1 className="text-center" style={{margin: 40}}>Let's save Mother Earth together, {user.username}!</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12">
                        <EventModal /> 
                        <LocationModal />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col size="sm-12">
                        <AttendingList />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6 sm-12">
                        <EventList myEvents />
                    </Col>
                    <Col size="md-6 sm-12">
                        <LocationList myLocations />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withUser(Profile);
