import "./Instructionsscreen.css";

function Instructionsscreen (){

    return (
        <div className= "instructions">
            <h1>Instructions: </h1>
            <p className="paragraph">
                - Each game has 10 rounds.<br/>
                - In each round, you either win or lose to the computer. <br/>
                - If you win, you get a point. <br/>
                - If the computer wins, it gets a point.<br/>
                - There will be a point summary at the end of the game, which will determine who wins overall (or if there is a winner). <br/>
            </p>
            <p className="paragraph">
                Good luck!
            </p>
            <a href = "/game">
                <button className = "continueButton"> Continue to Game </button>
            </a>
        </div>
    );
}

export default Instructionsscreen;