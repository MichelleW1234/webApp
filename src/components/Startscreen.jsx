import React, { useState } from 'react';
import "./Startscreen.css";

function Startscreen (){

    return (
        <div className = "startScreen">
            <h1>
                Hello. You are about to start. Are you ready?
            </h1>
            <a href="/instructions">
                <button className = "startButton"> Start Game</button>
            </a>
        </div>
    );

}


export default Startscreen;