import React from "react";

const AstroPicCard = (props) => {
    return (
        <div>
            <h2>This picture was released on: {props.date}</h2>
            <img className="apod" src={props.hdurl} alt="apod pic of the day" />
            <p className="copyright">This picture is copyrighted by: {props.copyright}</p>
            <p>{props.explanation}</p>
        </div>
    )
};

export default AstroPicCard;