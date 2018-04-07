import React from "react";
export const ListBtn = props => (
  <button {...props} style={{margin: 10, width: 80}} className="btn btn-primary">
    {props.children}
  </button>
);