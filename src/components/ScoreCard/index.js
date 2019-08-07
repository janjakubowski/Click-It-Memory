import React from "react";
import "./style.css";

function ScoreCard(props) {
    return <h2 className="score">Current: {props.current} -- High: {props.high}</h2>;
}

export default ScoreCard;