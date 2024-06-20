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
                pattern="\b[A-Z]{5}\b"
                minLength={5}
                maxLength={5}
                required={true}
                onChange={(e) => setInput(e.target.value.toUpperCase())}
            />
        </form>
    );
}

export default GuessInput;
