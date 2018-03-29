import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { LoginBtn, LoginInput } from '../../components/LoginConsole';

class Create extends Component {
    
    state = {
        email: null,
        username: null,
        password: null,
        confirmPassword: null,
        error: null
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    
    handleLogin = (event) => {
        
        event.preventDefault();
        
        const { email, username, password, confirmPassword } = this.state;
        const { history } = this.props;
        
        // clear any previous errors so we don't confuse the user
        this.setState({
            error: null
        });

        // check that entered passwords match
        if (password !== confirmPassword) {
            this.setState({
                error: 'Passwords must match.'
            })
            return;
        };

        // check to make sure they've entered a username and password.
        // this is very poor validation, and there are better ways
        // to do this in react, but this will suffice for the example
        // if (!username || !password || !email) {
        //     this.setState({
        //         error: 'A valid email, username and password are required.'
        //     });
        //     return;
        // }

        // post an auth request
        axios.post('/api/users', {
            username,
            password
        })
        .then(user => {
            // if the response is successful, make them log in
            history.push('/login');
        })
        .catch(err => {
            this.setState({
                error: err.response.data.message || err.message
            });
        });
    }

    render() {
        const { error } = this.state;
        return (
            <Container>
                <Row>
                    {/* <Col xs={6} xsOffset={3}> */}
                        <form>
                            <h1>Create Account</h1>
                            {error &&
                                <div>
                                    {error}
                                </div>
                            }
                            <label for="email">Email</label>
                            <LoginInput
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                // type="email"
                                name="email"
                                placeholder="Email"
                            />
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
                            <LoginInput
                                value={this.state.confirmPassword}
                                onChange={this.handleInputChange}
                                // type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                            />
                            <LoginBtn
                                disabled={!(this.state.email) || !(this.state.username) || !(this.state.password) || !(this.state.confirmPassword)}
                                onClick={this.handleLogin}
                            >
                                Create Account
                            </LoginBtn>
                        </form>
                    {/* </Col> */}
                </Row>
            </Container>
        );
    }  
}

export default Create;