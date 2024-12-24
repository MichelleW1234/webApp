import React, { useState } from 'react';
import "./Resultsscreen.css";

function Resultsscreen ({result, rounds, setRounds, showFlag, setShowFlag}){

    const handleHideFlag = () => {
        setRounds((prevRounds) => prevRounds + 1);
        setShowFlag(false);
    }

    return (
        <div className = "floatingFlag">

            <h1>{result}</h1>

            <button className = "floatingButton" onClick={handleHideFlag}>Close</button>

        </div>
    );
}

export default Resultsscreen;