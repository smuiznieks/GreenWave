import React, {Component, Fragment} from 'react';
import { Row, Col } from 'reactstrap';
import { withUser } from '../../services/withUser';
import API from '../../utils/API';
import EventModal from './EventModal';
import { List, ListItem, ListBtn } from "../List";
import { CardText, CardTitle } from 'reactstrap';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import Collapsible from 'react-collapsible';
import "./Events.css";

class EventList extends Component {
    state = {
        events: null
    };

    loadEvents() {
        const promise = this.props.myEvents ? API.getMyEvents(this.props.user.id) : API.getAllEvents();
        promise
        .then(res => this.setState({ events: res.data }))
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadEvents();
    }

    shouldComponentUpdate() {
        this.loadEvents();
        return true;
    }

    deleteEvent = (id) => {
        API.deleteEvent({
            userId: this.props.user.id,
            eventId: id
        })
        .then(res => this.loadEvents())
        .catch(err => console.log(err));
    }

    handleRSVP = (id) => {
        API.updateAttendees({
            attendees: this.props.user.username,
            _id: id
        })
        API.updateRSVP({
            userId: this.props.user.id,
            eventId: id
        })
        .then(res => this.loadEvents())
        .catch(err => console.log(err))
    }

    renderEvents() {
        const { username, id } = this.props.user;
        const url = "https://shielded-citadel-50208.herokuapp.com/";
        return (
            this.state.events.map(event => {
                const Owner = event.createdBy === id;
                return (
                    <ListItem key={event._id}>
                        <CardTitle className="profileTitle">{event.title}</CardTitle>
                        <Row>
                            <Col sm="8">
                                <Row>
                                    <FacebookShareButton url={url} quote={"Check out this event I found on GreenWave.com --- " + event.title + " on " + event.date + " at " + event.location + ". Together we can change the world!"} hashtag="#GreenCityBlueLake">
                                        <i className="fab fa-facebook-square shareIcon" />
                                    </FacebookShareButton>
                                    <TwitterShareButton url={url} title={"Check out this event I found on GreenWave.com --- " + event.title + " on " + event.date + " at " + event.location + ". Together we can change the world!"} >
                                        <i className="fab fa-twitter-square shareIcon" />
                                    </TwitterShareButton>
                                    <EmailShareButton url={url} subject={"Join me at " + event.title} body={"Hi there! Check out this event I found on GreenWave.com\n\n" + event.title + " on " + event.date + " at " + event.location + ".\n\n" + event.description + "\n\nHope you can make it! #GreenCityBlueLake" }>
                                        <i className="fas fa-envelope-square shareIcon" />
                                    </EmailShareButton>
                                </Row>
                                <CardText className="eventInfo">
                                    When: {event.date} at {event.time}<br />Where: {event.location}<br />RSVPs: {event.attendees.length}
                                </CardText>
                            </Col>
                            <Col sm="4">
                                {Owner && <EventModal event={event} />}
                                {Owner && <ListBtn onClick={() => this.deleteEvent(event._id)}>Delete</ListBtn>}
                                {!Owner && <ListBtn onClick={()=> this.handleRSVP(event._id)}>RSVP</ListBtn>}
                            </Col>
                        </Row>
                        <CardText className="eventDescription">
                            {event.description && 
                                <Collapsible trigger="Details" className="viewDetails">
                                    <p>{event.description}</p>
                                </Collapsible>
                            }
                        </CardText>
                    </ListItem>
                )
            })
        );
    }

    render() {
        const { myEvents } = this.props;
        const { events } = this.state;
        return (
            <Fragment>
                { myEvents && <h1>Manage My Events</h1>}
                {events && events.length ? (
                    <List>
                        {this.renderEvents()}
                    </List>
                ) 
                : (
                    <h5 className="noResults">Add an event by clicking the <strong>Create Event</strong> button above.</h5>
                )}
            </Fragment>
        );
    }
}

export default withUser(EventList);