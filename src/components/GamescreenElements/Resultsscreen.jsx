import React from "react";
import "./Resultsscreen.css";

function Resultsscreen ({rounds, setRounds, showFlag, setShowFlag}){

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