import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { useState } from 'react';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guessArr, setGuessArr] = useState([]);
    console.log({ guessArr });
    function handleSubmitGuess(word) {
        if (guessArr.length >= 6) return;
        setGuessArr([...guessArr, { word, id: crypto.randomUUID() }]);
    }

    return (
        <>
            <GuessResults guessArr={guessArr} />
            <GuessInput handleSubmitGuess={handleSubmitGuess} />
        </>
    );
}

export default Game;
