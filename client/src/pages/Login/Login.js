// import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { Link } from 'react-router-dom';
import { update } from '../../services/withUser';
import { LoginBtn, LoginInput } from '../../components/LoginConsole';
import API from '../../utils/API';

class LoginPage extends Component {
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

    const { username, password } = this.state;
    const { history } = this.props;
    // console.log(this.state);

    // User authentication
    API.userLogin({
      username: this.state.username,
      password: this.state.password
    })
    .then(user => {
      // If response is successful, direct to home page
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
    return (
      <Container>
        <Row>
          <Col size="lg-4 md-6 sm-12>">
            <form onSubmit={this.handleLogin}>
              <h1>Log In</h1>
              {error &&
                <div>
                  {error}
                </div>
              }
              <label htmlFor="username">Username</label>
              <LoginInput
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username"
              />
              <label htmlFor="password">Password</label>
              <LoginInput
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                name="password"
                placeholder="Password"
              />
              <LoginBtn onClick={this.handleLogin} >
                Log In
              </LoginBtn>
              <p>
                <br />
                or <Link to='/create'>Create an Account</Link>
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default LoginPage;