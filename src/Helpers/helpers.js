const computerGeneratedResponse = () => {

    return Math.floor(Math.random() * 3) + 1;

}

export const decideRoundWinner = (userMove, computerWins, setComputerWins, userWins, setUserWins) => {

    let responses = "";
    const userResponse = userMove;
    const computerResponse = computerGeneratedResponse();

    if (computerResponse === userResponse){

        if (userResponse === 1){

            responses = "your response: rock , computer's response: rock , It's a tie!";

        } else if (userResponse === 2){

            responses = "your response: paper , computer's response: paper , It's a tie!";

        } else {

            responses = "your response: scissors , computer's response: scissors , It's a tie!";

        }

    } else if (computerResponse === 1 && userResponse === 2){

        responses = "your response: paper , computer's response: rock , You get a point!";
        setUserWins((prevUserWins) => prevUserWins + 1);

    } else if (computerResponse === 1 && userResponse === 3){

        responses = "your response: scissors , computer's response: rock , The computer gets a point!";
        setComputerWins((prevComputerWins) => prevComputerWins + 1);

    } else if (computerResponse === 2 && userResponse === 1){

        responses = "your response: rock , computer's response: paper , The computer gets a point!";
        setComputerWins((prevComputerWins) => prevComputerWins + 1);

    } else if (computerResponse === 2 && userResponse === 3){

        responses = "your response: scissors , computer's response: paper , You get a point!";
        setUserWins((prevUserWins) => prevUserWins + 1);

    } else if (computerResponse === 3 && userResponse === 1){

        responses = "your response: rock , computer's response: scissors , You get a point!";
        setUserWins((prevUserWins) => prevUserWins + 1);

    } else {

        responses = "your response: paper , computer's response: scissors , The computer gets a point!";
        setComputerWins((prevComputerWins) => prevComputerWins + 1);

    }

    return responses;

}

