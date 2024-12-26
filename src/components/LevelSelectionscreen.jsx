import React, { useState} from "react";
import { useLevel } from '../LevelProvider.jsx';
import "./LevelSelectionscreen.css";

function LevelSelectionscreen (){

    const [activeButton, setActiveButton] = useState(1);
    const [selectedButton, setSelectedButton] = useState(1);

    const handleClick = (index) => {

        setActiveButton(index);
        setSelectedButton(index);
        console.log(selectedButton);

    };


    return (
        <div className = "levelsScreen">

            <h1> Select a level below (default is 1): </h1>

            <div className = "levelsContainer">

                <div className = "LevelsWindowContainer">

                    <h2 className = "LevelsWindow"> Level 1 </h2>

                    <button
                    className={`LevelButton ${activeButton === 1 ? 'active' : ''}`}
                    onClick={() => handleClick(1)}
                    >
                        Select
                    </button>

                </div>   

                <div className = "LevelsWindowContainer">

                    <h2 className = "LevelsWindow"> Level 2 </h2>

                    <button
                    className={`LevelButton ${activeButton === 2 ? 'active' : ''}`}
                    onClick={() => handleClick(2)}
                    >
                        Select
                    </button>

                </div>    

                <div className = "LevelsWindowContainer">

                    <h2 className = "LevelsWindow"> Level 2 </h2>

                    <button
                    className={`LevelButton ${activeButton === 3 ? 'active' : ''}`}
                    onClick={() => handleClick(3)}
                    >
                        Select
                    </button>

                </div>   

            </div>
            
            {/*onClick, save selected button in LevelProvider*/}
            <a href = "/game">
                <button className = "continueButton" > Continue to Game </button>
            </a>
        </div>
    );
}

export default LevelSelectionscreen;