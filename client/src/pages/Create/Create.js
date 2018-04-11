import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FormBtn, Input } from '../../components/Form';
import API from '../../utils/API';
import './Create.css';

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
                error: 'Please enter a valid email.'
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
                <Row style={{marginBottom: 20}}>
                    <Col lg={{ size: 4, offset: 4}} md={{ size: 6, offset: 3}} sm="12">
                        <form>
                            <h1>Join the Movement</h1>
                            {error &&
                                <div>
                                    <p className="text-center errorMessage">{error}</p>
                                </div>
                            }
                            <label htmlFor="email">Email</label>
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
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
                            <Input
                                value={this.state.confirmPassword}
                                onChange={this.handleInputChange}
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                            />
                            <FormBtn
                                disabled={!(this.state.email) || !(this.state.username) || !(this.state.password) || !(this.state.confirmPassword)}
                                onClick={this.handleLogin}
                            >
                                Create Account
                            </FormBtn>
                            <p className="loginStyle">
                                <br />
                                or <Link className="link" to='/login'>Log In</Link> to an existing account
                            </p>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }  
}

export default Create;