import React, { useState }from 'react';

const GuessForm = (props) => {
    const [guess, setGuess] = useState('')

    const submitGuess = (event) => {
        event.preventDefault()
        props.checkGuess(guess)
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