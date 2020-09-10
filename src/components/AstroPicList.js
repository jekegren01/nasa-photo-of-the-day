import React, { useState, useEffect } from "react";
import axios from "axios";
import AstroPicCard from "./AstroPicCard";


export default function AstroPicList() {
    const [astroPics, setAstroPics] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=ywimLmNMWfXmR6finFmottd7iXqm8IrR3n9Uinfj`)
            .then(res => {
                console.log("Res from useEffect of AstroPicList", res);
                setAstroPics(res.data);
            })
            .catch(err => {
                console.log("Error occured in useEffect of AstroPic");
            });
        }, []);

    return (
        <div className="astroPic">
            <AstroPicCard
            key={astroPics.id}
            date={astroPics.date}
            copyright={astroPics.copyright}
            hdurl={astroPics.hdurl}
            explanation={astroPics.explanation}
            />

            {/* {astroPics.map(astroPic => {
                return (
                    <AstroPicCard
                        key={astroPic.id}
                        hdurl={astroPic.hdurl}
                    />    
                );
            })} */}
        </div>
    )
}