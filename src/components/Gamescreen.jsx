import React, { useState} from "react";
/*import Round from "./Gamecomponent.jsx";*/
import Round from "./Roundbox.jsx";
import Results from "./Resultsscreen.jsx";
import "./Gamescreen.css";



function Gamescreen ({isPressed, setIsPressed}){

    const [rounds, setRounds] = useState(1);
    const [showFlag, setShowFlag] = useState(true);

    const handleShowFlag = () => {
        setShowFlag(true);
    };

    return (
        <div>
            <div className = "navbarContainer">
                <ul className = "navbarMenu">
                    <li>
                        <button className = "instructionsButton">Instructions</button>
                    </li>
                    <li>
                        <button className = "instructionsButton" onClick={() => setIsPressed(false)}> Exit Game </button>
                    </li>
                </ul>
            </div>

            {/*
                <div className= "instructions">
                    <h1>Instructions: </h1>
                    <p>
                        This is the start of a game. 
                        Each game has 10 rounds.
                        In each round, you either win or lose to the computer.
                        If you win, you get a point. 
                        If the computer wins, it gets a point.
                        There will be a point summary at the end of the game, which will determine who wins overall. 
                    </p>
                </div>
                */}
                    
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


        </div>
    );
}

export default Gamescreen;