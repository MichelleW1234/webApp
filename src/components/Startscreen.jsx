import React, { useState } from 'react';
import Gamescreen from "./Gamescreen.jsx";
import "./Startscreen.css";

function Startscreen (){
    const [isPressed, setIsPressed] = useState(false);

    return (
        <div>
            {!isPressed && 
                <div className = "startScreenContainer">
                    <h1>
                        Hello. You are about to start. Are you ready?
                    </h1>
                    <button className = "button" onClick={() => setIsPressed(true)}>Start Game</button>
                </div>
            }

            {isPressed && 
                <div>
                    <Gamescreen/>
                </div>
            }
        </div>
    );
}

export default Startscreen;