import React, {Component, Fragment} from 'react';
import { Row, Col } from 'reactstrap';
import { withUser } from '../../services/withUser';
import API from '../../utils/API';
import { List, ListItem, ListBtn } from "../List";
import { CardText, CardTitle } from 'reactstrap';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';
import Collapsible from 'react-collapsible';

class UpcomingEvents extends Component {
    state = {
        events: []
    };

    loadUpcomingEvents() {
        let eventInfo = [];
        API.getUpcomingEvents(this.props.user.id)
        .then(res => this.setState({events: res.data.upcomingEvents}))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.loadUpcomingEvents();
    }

    handleDelete = (eventId) => {
        API.deleteRSVP({
            userId: this.props.user.id,
            eventId: eventId
        })
        .then(res => this.loadUpcomingEvents())
        .catch(err => console.log(err))
    }

    renderEvents() {
        const { username, id } = this.props.user;
        return (
            this.state.events.map(event => {
                return (
                    <ListItem key={event._id}>
                        <button type="button" className="eventRSVP"  onClick={() => this.handleDelete(event._id)}>
                            <i className="fas fa-times eventRSVP"></i>
                        </button>
                        <CardTitle className="profileTitle">{event.title}</CardTitle>
                        <Row>
                            <FacebookShareButton url="https://github.com" quote={"Check out this event I found on GreenWave.com --- " + event.title + " on " + event.date + " at " + event.location + ". Together we can change the world!"} hashtag="#GreenCityBlueLake">
                                <i className="fab fa-facebook-square shareIcon" />
                            </FacebookShareButton>
                            <TwitterShareButton url="https://github.com" title={"Check out this event I found on GreenWave.com --- " + event.title + " on " + event.date + " at " + event.location + ". Together we can change the world!"} >
                                <i className="fab fa-twitter-square shareIcon" />
                            </TwitterShareButton>
                            <EmailShareButton url="https://github.com" subject={"Join me at " + event.title} body={"Hi there! Check out this event I found on GreenWave.com\n\n" + event.title + " on " + event.date + " at " + event.location + ".\n\n" + event.description + "\n\nHope you can make it! #GreenCityBlueLake" }>
                                <i className="fas fa-envelope-square shareIcon" />
                            </EmailShareButton>
                        </Row>
                        <CardText>
                            When: {event.date} at {event.time}<br />Where: {event.location}<br />RSVPs: {event.attendees.length}
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
        const { upcomingEvents } = this.props;
        const { events } = this.state;
        return (
            <Fragment>
                {events && events.length ? (
                    <Fragment>
                        <h1>My Upcoming Events</h1>
                        <Row>
                        <List>
                            {this.renderEvents()}
                        </List>
                        </Row>
                        <hr />
                    </Fragment>
                ) : (
                    <div />
                )}
            </Fragment>
        );
    }
}

export default withUser(UpcomingEvents);