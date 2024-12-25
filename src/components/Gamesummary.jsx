import { useLocation } from "react-router-dom";
import "./Gamesummary.css";

function Gamesummary (){

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const computerWins = parseInt(searchParams.get("computerWins"), 10);
    const userWins = parseInt(searchParams.get("userWins"), 10);

    let winner;

    if (computerWins > userWins) {

      winner = "You lost.";

    } else if (computerWins < userWins) {

      winner = "You won!";

    } else {

      winner = "You tied. No one wins!";

    }

    return (
        <div className="GameSummary">
            <h1>Game Summary:  </h1>
            <div className = "stats">
                <p className = "words"> Computer Wins: {computerWins} </p>
                <p className = "words"> User Wins: {userWins} </p>
            </div>

            <h1 >{winner}</h1>
            <a href="/start">
                <button className = "restartButton"> Restart </button>
            </a>
        </div>

    );
}

export default Gamesummary;