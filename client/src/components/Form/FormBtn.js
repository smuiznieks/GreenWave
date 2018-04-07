import React from "react";
import { Button } from 'reactstrap';

export const FormBtn = props => (
  <Button {...props} style={{ float: "right", width: 150}} className="btn btn-success">
    {props.children}
  </Button>
);