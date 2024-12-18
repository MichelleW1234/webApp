import React, { useState} from "react";
import Round from "./Gamecomponent.jsx";
import Results from "./Resultsscreen.jsx";
import "./Gamescreen.css";


function Gamescreen (){

    const [rounds, setRounds] = useState(1);
    const [showFlag, setShowFlag] = useState(true);

    const handleShowFlag = () => {
        setShowFlag(true);
    };

    return (
        <div className = "gameScreenContainer">
            <h1>Instructions: </h1>
            <p>
                This is the start of a game. 
                Each game has 10 rounds.
                In each round, you either win or lose to the computer.
                If you win, you get a point. 
                If the computer wins, it gets a point.
                There will be a point summary at the end of the game, which will determine who wins overall. 
            </p>







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