import React, { Component } from 'react';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { withUser } from '../../services/withUser';
import "./Resource.css";


const Resource = (props) => {
    return (
        <div>
            <Container>
                {/* Row 1 */}
                <Row>
                    <Col md="4">
                        <Card body className="cardStyles">
                            <CardBody>
                                <CardTitle>Cuyahoga Recycles</CardTitle>
                            </CardBody>
                            <img width="100%" src={require("./imgs/cuy-recycles.jpg")} />
                            <CardBody>
                            <CardText body className="cardText">The Cuyahoga County Solid Waste District is the leading resource in Cuyahoga County for information, expertise and programs that support sustainable materials management and reduce the environmental impact of waste.</CardText>
                                <CardLink href="https://cuyahogarecycles.org/" className="btn btn-primary">Visit Website</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card body className="cardStyles">
                            <CardBody>
                                <CardTitle>Rust Belt Riders</CardTitle>
                            </CardBody>
                            <img width="100%" src={require("./imgs/rust-belt-riders.jpg")} />
                            <CardBody>
                            <CardText body className="cardText">Rust Belt Riders’ compost collection service is a simple, affordable way for organizations to make a positive impact on their community and environment.</CardText>
                                <CardLink href="https://www.rustbeltriders.com/index.html" className="btn btn-primary">Visit Website</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card body className="cardStyles">
                            <CardBody>
                                <CardTitle>UHBikes</CardTitle>
                            </CardBody>
                            <img width="100%" src={require("./imgs/uhbikes.jpg")} />
                            <CardBody>
                            <CardText body className="cardText">UHBikes allows you to quickly book a bike, get around, and return with ease. 250 bikes. 29 stations. Skip the drive, and go for a ride!</CardText>
                                <CardLink href="http://uhbikes.com/" className="btn btn-primary">Visit Website</CardLink>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

                {/* Row 2 */}
                <Row>
                    <Col md="4">
                        <Card body className="cardStyles">
                            <CardBody>
                                <CardTitle>Office of Sustainability</CardTitle>
                            </CardBody>
                            <img width="100%" src={require("./imgs/office-sustain.jpg")} />
                            <CardBody>
                                <CardText body className="cardText">The Office of Sustainability leverages Cleveland's wealth of assets by collaborating with the community to improve the economic, environmental, and social well-being of its citizens. </CardText>
                                <CardLink href="http://www.city.cleveland.oh.us/CityofCleveland/Home/Government/CityAgencies/OfficeOfSustainability" className="btn btn-primary">Visit Website</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card body className="cardStyles">
                            <CardBody>
                                <CardTitle>Sustainable Cleveland</CardTitle>
                            </CardBody>
                            <img width="100%" src={require("./imgs/sustainable-cle.jpg")} />
                            <CardBody>
                            <CardText body className="cardText">Sustainable Cleveland is a 10-year initiative that engages people from all walks of life, working together to design and develop a thriving and resilient Cleveland region that leverages its wealth of assets to build economic, social and environmental well-being for all.</CardText>
                                <CardLink href="http://www.sustainablecleveland.org/sustainable_cleveland" className="btn btn-primary">Visit Website</CardLink>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Resource;