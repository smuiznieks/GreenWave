import React from "react";
export const ListBtn = props => (
  <button {...props} style={{ marginTop: 5}} className="btn btn-primary">
    {props.children}
  </button>
);