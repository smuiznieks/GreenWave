import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { update } from '../../services/withUser';
import { withUser } from '../../services/withUser';

export const Navigation = (props) => {
    const { user } = props;

    const handleLogIn = () => {
        props.history.push('/login');
    };

    const handleLogOut = () => {
        axios.delete('/api/auth')
        .then(() => {
            update(null);
            props.history.push('/');
        })
        .catch((err) => {
            console.log(err);
        });
        
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/"><img src={require("./imgs/logo.png")} className="logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                {!user ? 
                    <div className="navbar-nav">
                        <LoginButton onClick={handleLogIn} />
                    </div>
                        :
                    <div className="navbar-nav">
                            <span className="navbar-brand">Hi there, {user.username}</span>
                            <a className="nav-item nav-link" href="/profile">Profile</a>
                            <a className="nav-item nav-link" href="/events">Events</a>
                            <a className="nav-item nav-link" href="/locations">Locations</a>
                            <a className="nav-item nav-link" href="/resources">Resources</a>
                            <LogoutButton onClick={handleLogOut} />
                    </div>
                }
            </div>
        </nav>
    );
}

export default withRouter(withUser(Navigation));