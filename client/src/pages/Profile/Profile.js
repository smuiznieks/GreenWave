import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Dropdown, Input, TextArea, FormBtn } from "../../components/Form";
import { withUser } from '../../services/withUser';

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
    };

    handleDropdownChange = (event) => {
        this.setState({locCategory: event.target.value});
    };
    
    handleSaveLocation = event => {
        event.preventDefault();
        API.createLocation({
            title: this.state.locTitle,
            address: this.state.locAddress,
            zipcode: this.state.locZipcode,
            category: this.state.locCategory,
            // createdBy: this.user.username
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
        const { user } = this.props;
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
                            <label htmlFor="locTitle">Location</label>
                            <Input
                                value={this.state.locTitle}
                                onChange={this.handleInputChange}
                                name="locTitle"
                                placeholder="Office of Sustainability"
                            />
                            <label htmlFor="locAddress">Address</label>
                            <Input
                                value={this.state.locAddress}
                                onChange={this.handleInputChange}
                                name="locAddress"
                                placeholder="230 West Huron Road"
                            />
                            <label htmlFor="locZipcode">Zipcode</label>
                            <Input
                                value={this.state.locZipcode}
                                onChange={this.handleInputChange}
                                name="locZipcode"
                                placeholder="44113"
                            />
                            {/* <Dropdown 
                                value={this.state.locCategory} 
                                onChange={this.handleDropdownChange}
                            /> */}
                            <div className="form-group">
                                <label>Category</label>
                                <select className="form-control" value={this.state.locCategory} onChange={this.handleDropdownChange}>
                                    <option value="Community">Green Community</option>
                                    <option value="Shop">Shop Green</option>
                                    <option value="Travel">Travel Green</option>
                                    <option value="Volunteer">Volunteer</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
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
