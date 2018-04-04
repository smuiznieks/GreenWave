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
                    <Col size="lg-4 md-6 sm-12>">
                        <h1>We're sorry, this page cannot be found.</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NotFound;