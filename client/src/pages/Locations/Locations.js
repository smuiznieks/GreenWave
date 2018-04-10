import React, { Component, Fragment } from 'react';
import { Map } from '../../components/Map';
import { withUser } from '../../services/withUser';
import HighestRated from '../../components/Map/HighestRated';

class Locations extends Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                {!user && <h1>Please log in to view this page.</h1>}
                {user &&
                    <Fragment>
                        <Map />
                        <HighestRated />
                    </Fragment>
                }
            </div>
        );
    }
}

export default withUser(Locations);