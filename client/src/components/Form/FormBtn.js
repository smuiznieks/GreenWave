import React from "react";
import { Button } from 'reactstrap';
import './Form.css';

export const FormBtn = props => (
  <Button {...props} className="btn formButton">
    {props.children}
  </Button>
);