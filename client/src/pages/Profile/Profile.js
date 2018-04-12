import React, { Component, Fragment } from "react";
import { Container, Row, Col } from 'reactstrap';
import { withUser } from '../../services/withUser';
import { UpcomingEvents, EventList, EventModal} from '../../components/Events';
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
                {!user && <h1>Please log in to view this page.</h1>}
                {user &&
                    <Fragment>
                        <Row>
                            <Col sm="12">
                                <h1 className="text-center" style={{marginTop: 40}}>Let's save Mother Earth together, {user.username}!</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" className="d-flex justify-content-center">
                                <EventModal /> 
                                <LocationModal />
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col sm="12">
                                <UpcomingEvents />
                            </Col>
                        </Row>
                        <Row style={{marginBottom: 40}}>
                            <Col sm="12" md="6">
                                <EventList myEvents />
                            </Col>
                            <Col sm="12" md="6">
                                <LocationList myLocations />
                            </Col>
                        </Row>
                    </Fragment>
                }
            </Container>
        );
    }
}

export default withUser(Profile);
