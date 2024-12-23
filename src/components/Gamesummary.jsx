import { useLocation } from "react-router-dom";
import "./Gamesummary.css";

function Gamesummary (){

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const computerWins = searchParams.get("computerWins");
    const userWins = searchParams.get("userWins");

    let winner;

    if ({computerWins} > {userWins}) {

        winner = "You lost.";

      } else if ({computerWins} < {userWins}) {

        winner = "You won!";

      } else {

        winner = "You tied. No one wins!";

      }
      

    return (
        <div className="GameSummary">
            <h1>Game Summary:  </h1>
            <div className = "stats">
                <h2>Computer Wins: {computerWins} </h2>
                <h2>User Wins: {userWins} </h2>
            </div>

            <h2>{winner}</h2>
            <a href="/start">
                <button className = "restartButton"> Restart </button>
            </a>
        </div>

    );
}

export default Gamesummary;