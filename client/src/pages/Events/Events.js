import React, { Component } from "react";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { withUser } from '../../services/withUser';
import { EventList } from '../../components/Events';

class Events extends Component {
  // Setting our component's initial state
  state = {
    events: [],
    title: "",
    time: "",
    date: "",
    location: "",
    description: "",
    status: null
  };

  // // Handles updating component state when the user types into the input field
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.setState({
  //     events: [],
  //     time: "",
  //     date: "",
  //     location: "",
  //     description: "",
  //     title: ""
  //   })
  //   API.createEvent({
  //     title: this.state.title,
  //     time: this.state.time,
  //     date: this.state.date,
  //     location: this.state.location,
  //     description: this.state.description,
  //     createdBy: this.props.user.username
  //   })
  //   .then(res => {
  //     this.setState({
  //         status: 'Thank you for adding to your community! Your event has been saved.'
  //     });  
  //   })
  //   .catch(err => {
  //       this.setState({
  //         status: err.message
  //       })
  //   });
  // };

  render() {
    // const { user } = this.props;
    // const { status } = this.state;
    return (
      <Container>
        <Row>
          <Col size="sm-12">
            <EventList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withUser(Events);
