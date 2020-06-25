import React from "react";
import { P } from "../App";


const AstroPicCard = (props) => {
    if (!props.hdurl) return <h3>Loading...</h3>
    return (
        <div>
            <h2>This picture was released on: {props.date}</h2>
            <img className="apod" src={props.hdurl} alt="apod pic of the day" />
            <P className="copyright">This picture is copyrighted by: {props.copyright}</P>
            <P maintext="maintext">{props.explanation}</P>
        </div>
    )
};

export default AstroPicCard;