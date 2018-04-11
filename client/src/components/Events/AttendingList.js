import React, {Component, Fragment} from 'react';
import { Row, Col } from 'reactstrap';
import { withUser } from '../../services/withUser';
import API from '../../utils/API';
import { List, ListItem, ListBtn } from "../List";
import { CardText, CardTitle } from 'reactstrap';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';

class AttendingList extends Component {
    state = {
        events: null
    };

    loadRSVPs() {
        let eventInfo = [];
        API.getMyRSVPs(this.props.user.username)
        .then(function(res) {
            for (var i = 0; i < res.data.length; i++) {
                eventInfo.push(res.data[i].eventId)
            }
        })
        .then(res => this.setState({ events: eventInfo }))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.loadRSVPs();
    }

    renderEvents() {
        const { username } = this.props.user; 
        return (
            this.state.events.map(event => {
                return (
                    <ListItem key={event._id}>
                        <CardTitle className="profileTitle">{event.title}</CardTitle>
                        <CardText>
                            When: {event.date} at {event.time}<br />Where: {event.location}<br />{event.description && <span>Description: {event.description}<br /></span>}RSVPs: {event.attendees.length}
                        </CardText>
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

export default withUser(AttendingList);