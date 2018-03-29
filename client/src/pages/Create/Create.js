import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';

class Create extends Component {
    
    state = {
        email: null,
        username: null,
        password: null,
        confirmPassword: null,
        error: null
    }

    handleInputChanged = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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

        // if (password !== confirmPassword) {
        //     this.setState({
        //         error: 'Passwords must match.'
        //     })
        //     return;
        // };
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
                        <form onSubmit={this.handleLogin}>
                            <h1>Create Account</h1>
                            {error &&
                                <div>
                                    {error}
                                </div>
                            }
                            <div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="text" className="form-control" id="email" placeholder="Email" onChange={this.handleInputChanged} />
                                </div>
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Username" onChange={this.handleInputChanged} />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleInputChanged} />
                                </div>
                                <div class="form-group">
                                    <label for="confirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" onChange={this.handleInputChanged}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    {/* </Col> */}
                </Row>
            </Container>
        );
    }  
}

export default Create;