import { useLevel } from '../../LevelProvider.jsx';
import "./Navbar.css";


function Navbar (){

    const { level, setLevel } = useLevel();

    const resetLevels = () => {

        setLevel(1);

    };

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
                </ul>
            </div>
        </div>
    );
}

export default Navbar;