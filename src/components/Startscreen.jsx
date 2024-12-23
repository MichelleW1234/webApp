import React, { useState } from 'react';
import "./Startscreen.css";

function Startscreen (){

    return (
        <div className = "startScreen">
            <h1>
                Hello. You are about to start. Are you ready?
            </h1>
            <a href="/game">
                <button className = "button"> Start Game</button>
            </a>
        </div>
    );

}


export default Startscreen;