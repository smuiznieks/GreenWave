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
                <h1>Super Green Resources</h1>
                {/* Row 1 */}
                <Row>
                    <Col lg="4">
                        <div className="cardBorder">
                            <Card body className="cardStyles cardColor">
                                <CardBody body className="cardBody">
                                    <CardTitle className="cardTitle">Cuyahoga Recycles</CardTitle>
                                </CardBody>
                                <img width="100%" src={require("./imgs/cuy-recycles.jpg")} />
                                <CardBody body className="cardBody">
                                    <CardText body className="cardText">The Cuyahoga County Solid Waste District is the leading resource in Cuyahoga County for information and programs that reduce the environmental impact of waste.</CardText>
                                    <CardLink href="https://cuyahogarecycles.org/" className="btn btn-primary cardLink">Visit Website</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="cardBorder">
                            <Card body className="cardStyles cardColor">
                                <CardBody body className="cardBody">
                                    <CardTitle className="cardTitle">Rust Belt Riders</CardTitle>
                                </CardBody>
                                <img width="100%" src={require("./imgs/rust-belt-riders.jpg")} />
                                <CardBody body className="cardBody">
                                    <CardText body className="cardText">Rust Belt Riders’ compost collection service is a simple, affordable way for organizations to make a positive impact on their community and environment.</CardText>
                                    <CardLink href="https://www.rustbeltriders.com/index.html" className="btn btn-primary cardLink">Visit Website</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="cardBorder">
                            <Card body className="cardStyles cardColor">
                                <CardBody body className="cardBody">
                                    <CardTitle className="cardTitle">UHBikes</CardTitle>
                                </CardBody>
                                <img width="100%" src={require("./imgs/uhbikes.jpg")} />
                                <CardBody body className="cardBody">
                                    <CardText body className="cardText">UHBikes allows you to quickly, and easily book a bike, get around, and lock an return with ease. 250 bikes. 29 stations. Skip the drive, and go for a ride!</CardText>
                                    <CardLink href="http://uhbikes.com/" className="btn btn-primary cardLink">Visit Website</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>

                {/* Row 2 */}
                <Row>
                    <Col lg="4">
                        <div className="cardBorder">
                            <Card body className="cardStyles cardColor">
                                <CardBody body className="cardBody">
                                <CardTitle className="cardTitle">Office of Sustainability</CardTitle>
                                </CardBody>
                                <img width="100%" src={require("./imgs/office-sustain.jpg")} />
                                <CardBody body className="cardBody">
                                    <CardText body className="cardText">The Office of Sustainability uses Cleveland's wealth of assets by working with the community to improve the economic, environmental, and social well-being of its citizens. </CardText>
                                    <CardLink href="http://www.city.cleveland.oh.us/CityofCleveland/Home/Government/CityAgencies/OfficeOfSustainability" className="btn btn-primary cardLink">Visit Website</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className="cardBorder">
                            <Card body className="cardStyles cardColor">
                                <CardBody body className="cardBody">
                                <CardTitle className="cardTitle">Sustainable Cleveland</CardTitle>
                                </CardBody>
                                <img width="100%" src={require("./imgs/sustainable-cle.jpg")} />
                                <CardBody body className="cardBody">
                                    <CardText body className="cardText">Sustainable Cleveland engages people to design and develop a thriving Cleveland region that leverages its wealth of assets to build economic, social and environmental well-being for all.</CardText>
                                    <CardLink href="http://www.sustainablecleveland.org/sustainable_cleveland" className="btn btn-primary cardLink">Visit Website</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Resource;