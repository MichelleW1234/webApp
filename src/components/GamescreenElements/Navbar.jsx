import { useLevel } from '../../LevelProvider.jsx';
import { useInput } from '../../InputProvider.jsx';
import { useReference } from '../../ReferenceProvider.jsx';
import { getReferences, getInput} from "../../Helpers/helpers.js";
import "./Navbar.css";

function Navbar ({showReferences, setShowReferences}){

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

    const displayReferences = () => {

        setShowReferences(prevState => !prevState);

    }

    return (
        <div>
            <div className = "navbarContainer">
                <ul className = "navbarMenu">
                    <li>
                        <a href="/start">
                            <button className = "navBarButton" onClick = {resetLevels}> Quit Game </button>
                        </a>
                    </li>

                    <li>
                        <a href="/levels">
                            <button className = "navBarButton" onClick = {resetLevels}> Change Level </button>
                        </a>
                    </li>

                    <li>
                        <button className = "readMoveReferencesButton" onClick = {displayReferences}> Move References </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;