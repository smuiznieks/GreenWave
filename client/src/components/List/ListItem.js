import React from "react";
import { Card, CardBody } from 'reactstrap';
import "./List.css";

export const ListItem = props => (
  <Card className="listBorder">
    <CardBody className="listColor">
      {props.children}
    </CardBody>
  </Card>
);