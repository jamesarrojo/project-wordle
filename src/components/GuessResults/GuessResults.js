import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ guessArr }) {
    return (
        <section className="guess-results">
            {guessArr.map(({ word, id }) => (
                <p className="guess" key={id}>
                    {word.split('').map((char, index) => (
                        <span className="cell" key={index}>
                            {char}
                        </span>
                    ))}
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
