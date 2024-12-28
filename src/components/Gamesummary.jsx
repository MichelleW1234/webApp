import { useLocation } from "react-router-dom";
import { useLevel } from '../LevelProvider.jsx';
import { useInput } from '../InputProvider.jsx';
import { useReference } from '../ReferenceProvider.jsx';
import { getReferences, getInput} from "../Helpers/helpers.js";
import "./Gamesummary.css";

function Gamesummary (){

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const computerWins = parseInt(searchParams.get("computerWins"), 10);
    const userWins = parseInt(searchParams.get("userWins"), 10);

    let winner;

    if (computerWins > userWins) {

      winner = "You lost. :(";

    } else if (computerWins < userWins) {

      winner = "You won! :)";

    } else {

      winner = "You tied. No one wins!";

    }

    const { level, setLevel } = useLevel();
    const { input, setInput } = useInput();
    const { reference, setReference } = useReference();
    
    const resetLevels = () => {

      setLevel(1);

      const defaultInput = getInput(1);
      setInput(defaultInput);

      const defaultReferences = getReferences(1);
      setReference(defaultReferences);

    };

    return (
        <div className="GameSummary">
            <h1 className = "GameSummarySign"><span className="GameSummarySignGlitch">Game</span> Summary:  </h1>
            <div className = "stats">
                <p> Computer Wins: {computerWins} </p>
                <p> User Wins: {userWins} </p>
                <p>{winner}</p>
            </div>
            <a href="/start">
                <button className = "restartButton" onClick = {resetLevels}> Restart </button>
            </a>
        </div>

    );
}

export default Gamesummary;