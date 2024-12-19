import React, { useState} from "react";
import Round from "./Roundbox.jsx";
import Results from "./Resultsscreen.jsx";
import Navbar from "./GamescreenElements/Navbar.jsx"
import "./Gamescreen.css";

function Gamescreen (){

    const [rounds, setRounds] = useState(1);
    const [showFlag, setShowFlag] = useState(true);

    const handleShowFlag = () => { 
        setShowFlag(true);
    };

    return (
        <div>
            <Navbar/>
                    
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