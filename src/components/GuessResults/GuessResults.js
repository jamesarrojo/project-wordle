import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers/';

function GuessResults({ guessArr, answer }) {
    return (
        <section className="guess-results">
            {guessArr.map(({ word, id }) => (
                <p className="guess" key={id}>
                    {checkGuess(word, answer).map(
                        ({ letter, status }, index) => (
                            <span className={`cell ${status}`} key={index}>
                                {letter}
                            </span>
                        )
                    )}
                </p>
            ))}
            {range(NUM_OF_GUESSES_ALLOWED - guessArr.length).map((el, i) => (
                <p className="guess" key={i}>
                    {range(5).map((el, i) => (
                        <span className="cell" key={i}></span>
                    ))}
                </p>
            ))}
        </section>
    );
}

export default GuessResults;
