import React from 'react';
export const LoginBtn = props => (
  <button {...props} className="btn btn-default btn-primary">
    {props.children}
  </button>
);