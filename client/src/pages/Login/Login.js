// import React, { Component } from 'react';
// import { Col, Row, Container } from '../../components/Grid';

// class Login extends Component {
//     state = {
//         user: ''
//     };

//     render() {
//         return (
//             <Container>
//                 <Row>
                    
//                 </Row>
//             </Container>
//         );
//     }
// }

// export default Login;

import axios from 'axios';
import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { Link } from 'react-router-dom';
import { update } from '../../services/withUser';

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
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Username" onChange={this.handleInputChanged} />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleInputChanged} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
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
