import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { MyMapComponent, MapMarker, StyledMapWithAnInfoBox } from '../../components/Map';

class Locations extends Component {
    render() {
        return (
            <Container>
                <StyledMapWithAnInfoBox></StyledMapWithAnInfoBox>
            </Container>
        );
    }
}

export default Locations;