import React, {Component, Fragment} from 'react';
import { Row, Col } from 'reactstrap';
import { withUser } from '../../services/withUser';
import API from '../../utils/API';
import { List, ListItem, ListBtn } from "../List";

class AttendingList extends Component {
    state = {
        events: null
    };

    loadRSVPs() {
        API.getMyRSVPs(this.props.user.username)
        .then(res => console.log(res.data))
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
                        <p>{event.eventId}</p>
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