import React from "react";
import { Button } from 'reactstrap';
import "./List.css";

export const ListBtn = props => (
  <Button {...props} className="listButton" >
    {props.children}
  </Button>
);