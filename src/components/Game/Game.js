import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guessArr, setGuessArr] = useState([]);
    console.log({ guessArr });
    function handleSubmitGuess(word) {
        if (guessArr.length >= NUM_OF_GUESSES_ALLOWED) return;
        setGuessArr([...guessArr, { word, id: crypto.randomUUID() }]);
    }

    return (
        <>
            <GuessResults guessArr={guessArr} answer={answer} />
            <GuessInput handleSubmitGuess={handleSubmitGuess} />
        </>
    );
}

export default Game;
