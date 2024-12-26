import "./Navbar.css";

function Navbar (){

    return (
        <div>
            <div className = "navbarContainer">
                <ul className = "navbarMenu">
                    <li>
                        <a href="/start">
                            <button className = "navBarButton" > Exit Game </button>
                        </a>
                    </li>

                    <li>
                        <a href="/levels">
                            <button className = "navBarButton" > Exit Level </button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;