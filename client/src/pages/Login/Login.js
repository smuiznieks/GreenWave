import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { update } from '../../services/withUser';
import { FormBtn, Input } from '../../components/Form';
import API from '../../utils/API';
import { UncontrolledCarousel } from 'reactstrap';
import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
  }

  handleLogin = (event) => {
    event.preventDefault();
    const { history } = this.props;
    // User authentication
    API.userLogin({
      username: this.state.username,
      password: this.state.password
    })
    .then(user => {
      // If response is successful, direct to profile page
      update(user.data);
      history.push('/profile');
    })
    .catch(err => {
      this.setState({
        error: err.response.status === 401 ? 'Invalid username or password.' : err.message
      });
    });
  }

  render() {
    const { error } = this.state;
    const items = [
      {
        src: './assets/images/Recycling(2).jpg',
        altText: 'Slide 1'
      },
      {
        src: './assets/images/Recycling(CardboardBale).jpg',
        altText: 'Slide 2'
      },
      {
        src: './assets/images/Recycling(3).jpg',
        altText: 'Slide 3'
      }
    ];  
    return (
      <Container>
        <Row style={{marginBottom: 20}}>
          <Col lg={{ size: 4, offset: 2}} md="6" sm="12">
            <form onSubmit={this.handleLogin}>
              <h1>Log In</h1>
              {error &&
                <div>
                  <p className="errorMessage text-center">{error}</p>
                </div>
              }
              <label htmlFor="username">Username</label>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username"
              />
              <label htmlFor="password">Password</label>
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                name="password"
                placeholder="Password"
              />
              <FormBtn disabled={!(this.state.username) || !(this.state.password)}onClick={this.handleLogin} >
                Log In
              </FormBtn>
              <p className="loginStyle">
                <br />
                or <Link className="link" to='/create'>Create an Account</Link>
              </p>
            </form>
          </Col>
          <Col lg="4" md="6" sm="12" className="mx-auto my-auto">
            <UncontrolledCarousel className="carousel" items={items} />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Login;