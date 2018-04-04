import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { MyMapComponent, MapMarker, Map } from '../../components/Map';
import { withUser } from '../../services/withUser';

class Locations extends Component {
    render() {
        return (
            <Container>
                <Map/>
            </Container>
        );
    }
}

export default withUser(Locations);