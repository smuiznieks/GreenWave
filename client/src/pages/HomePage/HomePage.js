import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import "./HomePage.css";

class HomePage extends Component {

    state = {
        user: ''
    };

    render() {
        return (
            <Container fluid>
                <div className="logo">
                    <img src={require("./images/GreenWaveLogo.jpg")} alt="GreenWaveLogo" className="img-responsive" />
                    <h1>Welcome to GreenWave</h1>
                </div>
                <div className="HomePage">
                <h2>GreenWave is a community of environmentally<br/>
                    conscious individuals looking to promote<br/>
                    more sustainable living in their local communities
                </h2>
                </div>
            </Container>
        );
    }

export default withUser(HomePage);
