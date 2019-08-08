import React from "react";
import "./style.css";

function ScoreCard(props) {
    return (
        <div className="scoreCard">
                    <h2 className="score">Current: {props.current} -- High: {props.high}</h2>
                    <h3 className="message">{props.message}</h3>
        </div>
    )
}

export default ScoreCard;