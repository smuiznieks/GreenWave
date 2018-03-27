import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';

class HomePage extends Component {
    state = {
        user: ''
    };

    render() {
        return (
            <Container>
                <Row>
                    <h1>Welcome to GreenWave</h1>
                </Row>
            </Container>
        );
    }
}

export default HomePage;