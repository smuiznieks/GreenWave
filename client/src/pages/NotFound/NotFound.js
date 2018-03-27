import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';

class NotFound extends Component {
    state = {
        user: ''
    };

    render() {
        return (
            <Container>
                <Row>
                    <h1>We're sorry, this page cannot be found.</h1>
                </Row>
            </Container>
        );
    }
}

export default NotFound;