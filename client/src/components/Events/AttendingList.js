import React, {Component, Fragment} from 'react';
import { withUser } from '../../services/withUser';
import API from '../../utils/API';
import { List, ListItem, ListBtn } from "../List";

class AttendingList extends Component {
    state = {
        events: null
    };

    render() {
        return (
            <Fragment>
                <h2>My Upcoming Events</h2>
            </Fragment>
        )
    }
}

export default withUser(AttendingList);