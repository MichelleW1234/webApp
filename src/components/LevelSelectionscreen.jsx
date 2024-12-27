import React, { useState} from "react";
import { useLevel } from '../LevelProvider.jsx';
import { useInput } from '../InputProvider.jsx';
import { useReference } from '../ReferenceProvider.jsx';
import { getInput, getReferences } from "../Helpers/helpers.js";

import "./LevelSelectionscreen.css";

function LevelSelectionscreen (){

    const [activeButton, setActiveButton] = useState(1);
    const { level, setLevel } = useLevel();
    const { input, setInput } = useInput();
    const {reference, setReference} = useReference();

    const handleClick = (index) => {

        setActiveButton(index);
        setLevel(index);

        const currLevelInput = getInput(index);
        setInput(currLevelInput);

        const currLevelReferences = getReferences(index);
        setReference(currLevelReferences);

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

                    <h2 className = "LevelsWindow"> Level 3 </h2>

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
                <button className = "continueButton"> Continue to Game </button>
            </a>
        </div>
    );
}

export default LevelSelectionscreen;