import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';


class HighestRated extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="12">
                            <h1 className="HighRated-Header">Highest Rated Green Locations</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <div className="cardBorder">
                                <div className="rating">1</div>
                                <Card body className="cardColor">
                                    <CardTitle body="true" className="ratedTitle">Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </Card>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="cardBorder">
                                <div className="rating">2</div>
                                <Card body className="cardColor">
                                    <CardTitle body="true" className="ratedTitle">Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </Card>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="cardBorder">
                                <div className="rating">3</div>
                                <Card body className="cardColor">
                                    <CardTitle body="true" className="ratedTitle">Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HighestRated;