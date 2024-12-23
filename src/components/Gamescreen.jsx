import React, { useState} from "react";
import Round from "./GamescreenElements/Roundbox.jsx";
import Results from "./GamescreenElements/Resultsscreen.jsx";
import Navbar from "./GamescreenElements/Navbar.jsx";
import "./Gamescreen.css";

function Gamescreen (){

    const [rounds, setRounds] = useState(1);
    const [showFlag, setShowFlag] = useState(true);

    let computerWins = 0;
    let userWins = 0;

    const handleShowFlag = () => { 
        setShowFlag(true);
    };

    return (
        <div>
            <Navbar/>
                    
            <div className = "gameScreen">

                {/* Figure out how to loop this for 10 plays: */}
                <Round
                round = {rounds}/>

                {showFlag && (
                <Results
                    rounds={rounds}
                    setRounds={setRounds}
                    showFlag={showFlag}
                    setShowFlag={setShowFlag}
                />
                )}

                {/*If rounds is equal to 10, then let the view game summary button appear */}
                <a href={`/summary?computerWins=${computerWins}&userWins=${userWins}`}>
                    <button className = "gameResultsButton"> View Game Summary </button>
                </a>
            
            </div>
        </div>
    );
}

export default Gamescreen;