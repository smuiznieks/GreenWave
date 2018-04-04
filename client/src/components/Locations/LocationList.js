import React, {Component, Fragment} from 'react';
import { withUser } from '../../services/withUser';
import API from '../../utils/API';
import LocationModal from './LocationModal';
import { List, ListItem, ListBtn } from "../List";

class LocationList extends Component {
    state = {
        locations: null
    };

    loadEvents() {
        API.getMyLocations()
        .then(res => this.setState({ locations: res.data }))
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadEvents();
    }

    renderLocations() {
        const { username } = this.props.user;
        return (
            this.state.locations.map(location => {
                return (
                    <ListItem key={location._id}>
                        <h5>{location.title}</h5>
                        <p>Address: {location.address}<br />Category: {location.category}<br />Score: {location.score}</p>
                        <ListBtn>Delete</ListBtn>
                        <LocationModal location={location} />
                    </ListItem>
                )
            })
        );
    }

    render() {
        const { myLocations } = this.props;
        const { locations } = this.state;
        return (
            <Fragment>
                <h2>Build My Community</h2>
                {locations && locations.length ? (
                    <List>
                        {this.renderLocations()}
                    </List>
                ) : (
                    <h5>No results to display. Add a location by clicking the <strong>Create Location</strong> button above.</h5>
                )}
            </Fragment>
        );
    }
}

export default withUser(LocationList);