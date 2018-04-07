import React, {Component, Fragment} from 'react';
import { withUser } from '../../services/withUser';
import API from '../../utils/API';
import { List, ListItem, ListBtn } from "../List";

class EventList extends Component {
    state = {
        events: null
    };

    render() {
        <Fragment>
            <h2>My Upcoming Events</h2>
        </Fragment>
    }
}

export default withUser(RsvpList);