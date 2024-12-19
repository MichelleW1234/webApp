import "./Navbar.css";

function Navbar (){

    return (
        <div>
            <div className = "navbarContainer">
                <ul className = "navbarMenu">
                    <li>
                        <a href = "/instructions">
                            <button className = "navBarButton">Instructions</button>
                        </a>
                    </li>
                    <li>
                        <a href="/start">
                            <button className = "navBarButton" > Exit Game </button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;