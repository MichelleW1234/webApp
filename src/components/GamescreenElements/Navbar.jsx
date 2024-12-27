import { useLevel } from '../../LevelProvider.jsx';
import { useReference } from '../../ReferenceProvider.jsx';
import { getReferences } from "../../Helpers/helpers.js";
import "./Navbar.css";

function Navbar ({showReferences, setShowReferences}){

    const { level, setLevel } = useLevel();

    const resetLevels = () => {

        setLevel(1);

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
                            <button className = "navBarButton" onClick = {resetLevels}> Exit Game </button>
                        </a>
                    </li>

                    <li>
                        <a href="/levels">
                            <button className = "navBarButton" onClick = {resetLevels}> Exit Level </button>
                        </a>
                    </li>

                    <li>
                        <button className = "navBarButton" onClick = {displayReferences}> Get Level References </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;