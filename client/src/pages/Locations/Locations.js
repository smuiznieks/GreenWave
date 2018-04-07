import React, { Component } from 'react';
import { Col, Row, Container } from '../../components/Grid';
import { Map } from '../../components/Map';
import { withUser } from '../../services/withUser';
import HighestRated from '../../components/Map/HighestRated';

class Locations extends Component {
    render() {
        return (
            <div>
                <Map />
                <HighestRated />
            </div>
        );
    }
}

export default withUser(Locations);