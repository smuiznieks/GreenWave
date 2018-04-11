import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import API from '../../utils/API';

class HighestRated extends Component {
    state = {
        topLocations: null
    };

    loadHighestRated() {
        API.getHighestRated()
		.then(res => this.setState({ topLocations: res.data }))
        .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadHighestRated();
    }

    renderHighestRated() {
        return (
            this.state.topLocations.map((topLocation, index) => {
                return (
                    <Col md="4" key={index}>
                        <div className="cardBorder">
                            <div className="rating">{index + 1}</div>
                            <Card body className="cardColor">
                                <CardTitle body="true" className="ratedTitle">{topLocation.title}</CardTitle>
                                <CardText>{topLocation.address}<br />Category: {topLocation.category}<br />Green Factor: {topLocation.score}</CardText>
                            </Card>
                        </div>
                    </Col>
                )
            })
        )
    }

    render() {
        const { topLocations } = this.state;   
        console.log(this.state.topLocations);   
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="12">
                            <h1 className="HighRated-Header">Highest Rated In Your Community</h1>
                        </Col>
                    </Row>
                    <Row>
                        {topLocations && topLocations.length ? (
                            <Fragment>
                                {this.renderHighestRated()}
                            </Fragment>
                        ): (
                            <div className="mx-auto errorMessage">
                                <p>We're working on gathering more information about your community. Please come back soon!</p>
                            </div>
                        )}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HighestRated;