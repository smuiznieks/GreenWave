// component with up & down arrown buttons
// start with a default score of zero in DB
// incrementing or dermenting the score when clicked
// then rendering the score to the screen
// if location.score > 25 then (add emoji)

import React from "react";
import { ScoreBtn } from "./ScoreBtn";
import API from "../../utils/API";



export class Vote extends React.Component {
    state = { score: 0 };

    componentWillReceiveProps(nextProps) {
        if (nextProps.location) {
            this.setState({
                score: nextProps.location.score
            })
        }
    }

    componentDidMount() {
        this.setState({
            score: this.props.location.score
        })
    }

    handleIncrement() {
        this.updateScore(1);
    }

    handleDecrement() {
        this.updateScore(-1);
    }

    updateScore(score) {
        API.updateLocation({
            _id: this.props.location._id,
            score: this.props.location.score + score,
        })
            .then(res => {
                this.setState({ score: this.props.location.score + score })
                this.props.location.score += score;
                this.forceUpdate();
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <p><span className="mapBoldText">Green Factor:</span> {this.state.score}</p>

                <ScoreBtn
                    className="btn btn-danger"
                    onClick={this.handleDecrement.bind(this)}
                >
                    <i className="fas fa-minus"></i>
                </ScoreBtn>
                <ScoreBtn
                    className="btn btn-success"
                    onClick={this.handleIncrement.bind(this)}
                >
                    <i className="fas fa-plus"></i>
                </ScoreBtn>
            </div>
        );
    }
}


export default Vote;
