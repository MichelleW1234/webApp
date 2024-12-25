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
            <h2>Round: {round}</h2>

            <p className = "directions">
                Enter one of the following in the space below: <br/>
                - Enter 1 for rock <br/>
                - Enter 2 for paper <br/>
                - Enter 3 for scissors <br/>
            </p>

            <input
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