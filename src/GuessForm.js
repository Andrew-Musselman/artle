import React, { useState }from 'react';

const GuessForm = ({ checkGuess }) => {
    const [guess, setGuess] = useState('')

    const submitGuess = (event) => {
        event.preventDefault()
       checkGuess(guess)
        setGuess('')
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
            <button onClick={submitGuess}>Guess</button>
        </form>
    )
}

export default GuessForm;