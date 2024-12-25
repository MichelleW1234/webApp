const computerGeneratedResponse = () => {

    return Math.floor(Math.random() * 3) + 1;

}

export const decideRoundWinner = (userMove, result, setResult) => {

    const userResponse = userMove;
    const computerResponse = computerGeneratedResponse();

    if (computerResponse === userResponse){

        if (userResponse === 1){

            setResult(["Your response: rock", "Computer's response: rock", "It's a tie!"]);

        } else if (userResponse === 2){

            setResult(["Your response: paper", "Computer's response: paper" , "It's a tie!"]);

        } else {

            setResult(["Your response: scissors" , "Computer's response: scissors" , "It's a tie!"]); 

        }

    } else if (computerResponse === 1 && userResponse === 2){

        setResult(["Your response: paper" , "Computer's response: rock" , "You get a point!"]);

        return 1;

    } else if (computerResponse === 1 && userResponse === 3){

        setResult(["Your response: scissors" , "Computer's response: rock" , "The Computer gets a point!"]);

        return 0;

    } else if (computerResponse === 2 && userResponse === 1){

        setResult(["Your response: rock" , "Computer's response: paper" , "The Computer gets a point!"]);

        return 0;

    } else if (computerResponse === 2 && userResponse === 3){

        setResult(["Your response: scissors" , "Computer's response: paper" , "You get a point!"]);

        return 1;

    } else if (computerResponse === 3 && userResponse === 1){

        setResult(["Your response: rock" , "Computer's response: scissors" , "You get a point!"]);

        return 1;

    } else {

        setResult(["Your response: paper" , "Computer's response: scissors" , "The Computer gets a point!"]);

        return 0;

    }

    return -1;

}

