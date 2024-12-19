import "./Instructionsscreen.css";

function Instructionsscreen (){

    return (
        <div className= "instructions">
            <h1>Instructions: </h1>
            <p>
                This is the start of a game. 
                Each game has 10 rounds.
                In each round, you either win or lose to the computer.
                If you win, you get a point. 
                If the computer wins, it gets a point.
                There will be a point summary at the end of the game, which will determine who wins overall. 
            </p>
            <a href = "/game">
                <button>Close</button>
            </a>
        </div>
    );
}

export default Instructionsscreen;