import { useState } from 'react';

function GuessInput() {
    const [input, setInput] = useState('');

    return (
        <form
            className="guess-input-wrapper"
            onSubmit={(e) => {
                e.preventDefault();
                console.log({ guess: input });
                setInput('');
            }}
        >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={input}
                pattern="\b[a-zA-Z]{5}\b"
                maxLength={5}
                onChange={(e) => setInput(e.target.value.toUpperCase())}
            />
        </form>
    );
}

export default GuessInput;
