import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Dropdown, Input, TextArea, FormBtn } from "../../components/Form";

class Profile extends Component {
    state = {
        locTitle: '',
        locAddress: '',
        locZipcode: '',
        locCategory: '',
        status: null
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    handleSaveLocation = event => {
        event.preventDefault();
        API.saveLocation({
            title: this.state.locTitle,
            address: this.state.locAddress,
            zipcode: this.state.locZipcode,
            category: this.state.locCategory
        })
        .then(res => {
            this.setState({
                status: 'Success!'
            })
        })
        .catch(err => {
            this.setState({
                status: err.message
            })
        });
    };

    render() {
        const { status } = this.state;
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        {/* <Jumbotron> */}
                            <h1>What green location do you want to enter?</h1>
                        {/* </Jumbotron> */}
                        <form>
                            {status && 
                                <div>
                                    {status}
                                </div>
                            }
                            <label for="locTitle">Location</label>
                            <Input
                                value={this.state.locTitle}
                                onChange={this.handleInputChange}
                                name="locTitle"
                                placeholder="Office of Sustainability"
                            />
                            <label for="locAddress">Address</label>
                            <Input
                                value={this.state.locAddress}
                                onChange={this.handleInputChange}
                                name="locAddress"
                                placeholder="230 West Huron Road"
                            />
                            <label for="locZipcode">Zipcode</label>
                            <Input
                                value={this.state.locZipcode}
                                onChange={this.handleInputChange}
                                name="locZipcode"
                                placeholder="44113"
                            />
                            <Dropdown 
                                value={this.state.locCategory}
                                onChange={this.handleInputChange}
                            />
                            <FormBtn
                                // disabled={!(this.state.time && this.state.title)}
                                onClick={this.handleSaveLocation}
                            >
                                Submit Location
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;
