import { useState } from 'react';
import { checkGuess } from '../../game-helpers/';

function GuessInput({ handleSubmitGuess, guessArr, answer }) {
    const [input, setInput] = useState('');
    const [hasPlayerWon, setHasPlayerWon] = useState(false);
    function isCorrect(letter) {
        return letter.status === 'correct';
    }

    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmitGuess(input);
                console.log({ guess: input });
                setHasPlayerWon(checkGuess(input, answer).every(isCorrect));
                setInput('');
            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            {guessArr.length === 6 && !hasPlayerWon ? (
                <section className="sad banner">
                    <p>
                        Sorry, the correct answer is <strong>{answer}</strong>.
                    </p>
                </section>
            ) : hasPlayerWon ? (
                <section className="happy banner">
                    <p>
                        <strong>Congratulations!</strong> Got it in
                        <strong>
                            {' '}
                            {guessArr.length}{' '}
                            {guessArr.length > 1 ? 'guesses' : 'guess'}
                        </strong>
                        .
                    </p>
                </section>
            ) : (
                <input
                    autoFocus={true}
                    id="guess-input"
                    type="text"
                    value={input}
                    pattern="\b[A-Z]{5}\b"
                    minLength={5}
                    maxLength={5}
                    required={true}
                    title="5 letter word"
                    onChange={(e) => setInput(e.target.value.toUpperCase())}
                />
            )}
        </form>
    );
}

export default GuessInput;
