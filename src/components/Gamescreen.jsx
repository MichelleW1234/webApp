import React, { useState} from "react";
import Round from "./GamescreenElements/Roundbox.jsx";
import Results from "./GamescreenElements/Resultsscreen.jsx";
import Navbar from "./GamescreenElements/Navbar.jsx";
import "./Gamescreen.css";

function Gamescreen (){

    const [rounds, setRounds] = useState(1);
    const [showFlag, setShowFlag] = useState(false);
    const [computerWins, setComputerWins] = useState(0);
    const [userWins, setUserWins] = useState(0);
    const [result, setResult] = useState();

    return (
        <div>
            <Navbar/>
                    
            {rounds < 11 ? (
                <div className="gameScreen">

                    <Round 
                        round={rounds} 
                        showFlag={showFlag}
                        setShowFlag={setShowFlag}
                        computerWins = {computerWins}
                        setComputerWins = {setComputerWins}
                        userWins = {userWins}
                        setUserWins = {setUserWins}
                        result = {result}
                        setResult = {setResult}

                    />

                    {showFlag && (

                        <Results
                            result = {result}
                            rounds={rounds}
                            setRounds={setRounds}
                            showFlag={showFlag}
                            setShowFlag={setShowFlag}
                        />
                    )}
                </div>

            ) : (

                <div className="gameOver">

                    <h2> Game Over! </h2>

                    <a href={`/summary?computerWins=${computerWins}&userWins=${userWins}`}>
                        <button className="gameResultsButton"> View Game Summary </button>
                    </a>
                
                </div>

            )}

        </div>
    );
}

export default Gamescreen;