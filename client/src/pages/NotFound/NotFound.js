import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class NotFound extends Component {
    state = {
        user: ''
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" className="mx-auto">
                        <h1>We're sorry, this page cannot be found.</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NotFound;