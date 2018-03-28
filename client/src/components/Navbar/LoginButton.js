import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const LoginButton = (props) => (
  <button className="btn" onClick={props.onClick}>Log In</button>
);

export default LoginButton;
