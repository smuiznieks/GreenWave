import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { Link } from 'react-router-dom';
import { update } from '../../services/withUser';
import { LoginBtn, LoginInput } from '../../components/LoginConsole';

class LoginPage extends Component {
  state = {
    username: null,
    password: null
  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;

    // post an auth request
    axios.post('/api/auth', {
      username,
      password
    })
    .then(user => {
      // if the response is successful, update the current user and redirect to the home page
      update(user.data);
      history.push('/');
    })
    .catch(err => {
      // an error occured, so let's record the error in our state so we can display it in render
      // if the error response status code is 401, it's an invalid username or password.
      // if it's any other status code, there's some other unhandled error so we'll just show
      // the generic message.
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
                {/* <Col xs={6} xsOffset={3}> */}
                    <form onSubmit={this.handleLogin}>
                        <h1>Log In</h1>
                        {error &&
                            <div>
                                {error}
                            </div>
                        }
                        <label for="username">Username</label>
                        <LoginInput
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name="username"
                            placeholder="Username"
                        />
                        <label for="password">Password</label>
                        <LoginInput
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            // type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <LoginBtn
                          onClick={this.handleLogin}
                        >
                          Log In
                        </LoginBtn>
                        <p>
                            <br />
                            or <Link to='/create'>Create an Account</Link>
                        </p>
                    </form>
                {/* </Col> */}
            </Row>
        </Container>
    );
  }
}

export default LoginPage;