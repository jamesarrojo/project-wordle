function GuessResults({ guessArr }) {
    return (
        <section className="guess-results">
            {guessArr.map(({ word, id }) => (
                <p className="guess" key={id}>
                    {word}
                </p>
            ))}
        </section>
    );
}

export default GuessResults;
