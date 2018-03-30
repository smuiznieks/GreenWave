import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginButton from './LoginButton';
import LoginMenu from './LoginMenu';
import { update } from '../../services/withUser';

export const Navbar = (props) => {
    const { user } = props;
    const username = user ? user.username : null;
    const handleLogIn = () => {
        props.history.push('/login');
    };
    const handleLogOut = () => {
        axios.delete('/api/auth')
            .then(() => {
            // unsets the currently logged in user. all components wrapped in withUser
            // will be updated with a null user and rerender accordingly
            update(null);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">GreenWave</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="/profile">Profile</a>
                <a className="nav-item nav-link" href="/events">Events</a>
                <a className="nav-item nav-link" href="/locations">Locations</a>
                {user ?
                  <LoginMenu username={username} onLogOut={handleLogOut} />
                  : <LoginButton onClick={handleLogIn} /> 
                }
            </div>
        </div>
    </nav>
    );
}

export default withRouter(Navbar);