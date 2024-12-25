import React, { useState } from 'react';
import { decideRoundWinner } from "../../Helpers/helpers.js";
import "./Roundbox.css";


function Roundbox ({round, showFlag, setShowFlag, computerWins, setComputerWins, userWins, setUserWins, result, setResult}){

    const [error, setError] = useState("");

    const checkingInputValidity = () => {

        if (inputValue == 1 || inputValue == 2 || inputValue == 3) {

            setError("");

            const winner = decideRoundWinner(Number(inputValue), result, setResult);

            if (winner == 1){

                setUserWins((prevUserWins) => prevUserWins + 1);

            } else if (winner == 0){

                setComputerWins((prevComputerWins) => prevComputerWins + 1);

            }

            setShowFlag(true);
            setInputValue("");

        } else {

            setError("Please enter either 1, 2, or 3.");

        }

    };

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (

        <div className="gameScreenContainer">
            <h1>Round: {round}</h1>

            <p className = "directions">
                Enter one of the following in the space below: <br/>
                &gt; Enter 1 for rock <br/>
                &gt; Enter 2 for paper <br/>
                &gt; Enter 3 for scissors <br/>
            </p>

            <input 
                className = "textbox"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type here..."
            />

            <button className = "enterButton" onClick={checkingInputValidity}>Enter </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}

        </div>

    );
}

export default Roundbox;