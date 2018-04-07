import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';


class HighestRated extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="12">
                        <h1>Highest Rated Green Locations</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HighestRated;