import React from "react";
import "./style.css";

function PuppyCard(props) {
    return (
        <div className="card" >
            <div className="puppy-container" onClick={() => props.puppyClicked(props.id)}>
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default PuppyCard;