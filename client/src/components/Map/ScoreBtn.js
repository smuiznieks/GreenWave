import React, { Component } from 'react';
export const ScoreBtn = props => (
    <button {...props}>
        {props.children}
    </button>
);