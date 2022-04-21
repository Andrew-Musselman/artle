import React, { useState }from 'react';

const GuessForm = () => {
    const [guess, setGuess] = useState('')

    const submitGuess = (event) => {
        event.preventDefault
        const newGuess = guess
    }

    return (
        <form>
            <input 
                type='text' 
                placeholder='Guess' 
                name='guess'
                value={guess}
                onChange={event => setGuess(event.target.value)}
                />
            <button>Guess</button>
        </form>
    )
}