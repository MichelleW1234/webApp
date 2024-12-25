import React, { useState } from 'react';
import "./Resultsscreen.css";

function Resultsscreen ({result, rounds, setRounds, showFlag, setShowFlag}){

    const handleHideFlag = () => {
        setRounds((prevRounds) => prevRounds + 1);
        setShowFlag(false);
    }

    return (
        <div className = "floatingFlag">

            <div className = "result"> 
                
                {result.map((line, index) => (
                    <p className = "words" key={index}>{line}</p>
                ))}

                <button className = "floatingButton" onClick={handleHideFlag}>Close</button>
            </div>

        </div>
    );
}

export default Resultsscreen;