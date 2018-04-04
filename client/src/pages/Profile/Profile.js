import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem, ListBtn } from "../../components/List";
import { withUser } from '../../services/withUser';
import {EventList, EventModal} from '../../components/Events';
import LocationModal from "./LocationModal";

class Profile extends Component {
    state = {
        upcomingEvents: [],
        myEvents: [],
        myLocations: []
    };
    
    componentDidMount() {
        this.loadMyEvents();
        this.loadMyLocations();
    }

    loadMyEvents = () => {
        API.getMyEvents()
        .then(res => this.setState({ myEvents: res.data }))
        .catch(err => console.log(err));
    };

    loadMyLocations = () => {
        API.getMyLocations()
        .then(res => this.setState({ myLocations: res.data }))
        .catch(err => console.log(err));
    };

    render() {
        const { user } = this.props;
        return (
            <Container>
                <Row>
                {user &&
                    <h1>Let's save Mother Earth together, {user.username}!</h1>
                }
                </Row>
                <Row>
                    <Col size="md-4">
                        <EventModal />
                    </Col>
                    <Col size="md-4">
                        <LocationModal />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-4">
                        <h2>My Upcoming Events</h2>
                    </Col>
                    <Col size="md-4">
                        <EventList myEvents />
                    </Col>
                    <Col size="md-4">
                        <h2>Manage My GreenSpots</h2>
                        {this.state.myLocations.length ? (
                            <List>
                            {this.state.myLocations.map(mylocation => (
                                <ListItem key={mylocation._id}>
                                    <h5>{mylocation.title}</h5>
                                    <p>Address: {mylocation.address}<br />Category: {mylocation.category}<br />Score: {mylocation.score}</p>
                                    <ListBtn>Delete</ListBtn>
                                    <ListBtn>Edit</ListBtn>
                                </ListItem>
                            ))}
                            </List>
                        ) : (
                            <h5>No Results to Display</h5>
                        )}
                    </Col>
                </Row>
                
            </Container>
        );
    }
}

export default withUser(Profile);
