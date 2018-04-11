import React, {Component, Fragment} from 'react';
import { Row, Col } from 'reactstrap';
import { withUser } from '../../services/withUser';
import API from '../../utils/API';
import LocationModal from './LocationModal';
import { List, ListItem, ListBtn } from "../List";
import { CardText, CardTitle } from 'reactstrap';
import { FacebookShareButton, TwitterShareButton, EmailShareButton } from 'react-share';

class LocationList extends Component {
    state = {
        locations: null
    };

    loadLocations() {
        API.getMyLocations(this.props.user.username)
        .then(res => this.setState({ locations: res.data }))
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadLocations();
    }

    deleteLocation = (id) => {
        API.deleteLocation(id)
        .then(res => this.loadLocations())
        .catch(err => console.log(err));
    }

    renderLocations() {
        const { username } = this.props.user;
        return (
            this.state.locations.map(location => {
                const Owner = location.createdBy === username;
                return (
                    <ListItem key={location._id}>
                        <CardTitle className="profileTitle">{location.title}</CardTitle>
                        <Row>
                            <Col sm="8">
                                <CardText>Address: {location.address}<br />Category: {location.category}<br />Green Factor: {location.score}</CardText>
                            </Col>
                            <Col sm="4">
                                {Owner && <LocationModal location={location} />}
                                {Owner && <ListBtn onClick={() => this.deleteLocation(location._id)}>Delete</ListBtn>}
                            </Col>
                        </Row>
                        <Row>
                            <FacebookShareButton url="https://github.com" quote={"Check out this awesome spot I found on GreenWave.com\n\n" + location.title + " at " + location.address + "\n\nIt even has a Green Factor score of " + location.score + "!!"} hashtag="#GreenCityBlueLake">
                                <i className="fab fa-facebook-square shareIcon" />
                            </FacebookShareButton>
                            <TwitterShareButton url="https://github.com" title={"Check out this awesome spot I found on GreenWave.com --- " + location.title + " at " + location.address + ". It even has a Green Factor score of " + location.score + "!!"}>
                                <i className="fab fa-twitter-square shareIcon" />
                            </TwitterShareButton>
                            <EmailShareButton url="https://github.com" subject={"Neighborhood Gem --- " + location.title} body={"Hi there! Check out this awesome spot I found on GreenWave.com\n\n" + location.title + " at " + location.address + "\n\nIt even has a Green Factor score of " + location.score + "!!\n\n#GreenCityBlueLake" }>
                                <i className="fas fa-envelope-square shareIcon" />
                            </EmailShareButton>
                        </Row>
                    </ListItem>
                )
            })
        );
    }

    render() {
        const { locations } = this.state;
        return (
            <Fragment>
                <h1>Manage My Locations</h1>
                {locations && locations.length ? (
                    <List>
                        {this.renderLocations()}
                    </List>
                ) : (
                    <h5 className="noResults">Add a location by clicking the <strong>Create Location</strong> button above.</h5>
                )}
            </Fragment>
        );
    }
}

export default withUser(LocationList);