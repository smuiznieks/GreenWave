import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { LoginBtn, LoginInput } from '../../components/LoginConsole';
import API from '../../utils/API';

class Create extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        error: ''
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

        
        // Clear previous errors
        this.setState({
            error: null
        });

        //Check if a valid email was entered
        if (!this.validateEmail(email)) {
            this.setState({
                error: 'You must enter a valid email'
            });
            return;
        }


        // Check that passwords match
        if (password !== confirmPassword) {
            this.setState({
                error: 'Passwords must match.'
            })
            return;
        };

        // Create new user
        API.createUser({
            username: this.state.username,
            password: this.state.password
        })
        .then(user => {
            // If response is successful, send to login page
            history.push('/login');
        })
        .catch(err => {
            this.setState({
                error: err.response.data.message || err.message
            });
        });
    }

    validateEmail(value) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    }


    render() {
        const { error } = this.state;
        return (
            <Container>
                <Row>
                    <Col size="lg-4 md-6 sm-12>">
                        <form>
                            <h1>Join the Movement</h1>
                            {error &&
                                <div>
                                    {error}
                                </div>
                            }
                            <label htmlFor="email">Email</label>
                            <LoginInput
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
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
                            <LoginInput
                                value={this.state.confirmPassword}
                                onChange={this.handleInputChange}
                                type="password"
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
                    </Col>
                </Row>
            </Container>
        );
    }  
}

export default Create;