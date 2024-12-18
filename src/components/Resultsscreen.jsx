import React from "react";
import "./Gamescreen.css";

function Resultsscreen ({rounds, setRounds, showFlag, setShowFlag}){

    /*
    const increaseRound = () => {
        setRounds((prevRounds) => prevRounds + 1);
    };
    */

    const handleHideFlag = () => {
        setRounds((prevRounds) => prevRounds + 1);
        setShowFlag(false);
    }

    return (
        <div className = "floatingFlag">




            <button onClick={handleHideFlag}>Close</button>
        </div>
    );
}

export default Resultsscreen;