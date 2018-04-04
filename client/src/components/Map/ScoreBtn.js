import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';


class ScoreBtn extends Component {
    render() {
        return (
            <div class="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-danger"><i class="fas fa-minus"></i></button>
                <button type="button" className="btn btn-success"><i class="fas fa-plus"></i></button>
            </div>
        );
    }
}

export default ScoreBtn;

