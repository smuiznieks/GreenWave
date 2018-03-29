import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { MyMapComponent } from '../../components/Map';

class Locations extends Component {
    render() {
        return (
            <Container>
                <MyMapComponent>
                    
                </MyMapComponent>
            </Container>
        );
    }  
}

export default Locations;