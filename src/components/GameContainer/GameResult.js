import React from 'react'

const GameResult = ({targetWord, setTargetWord, correctLetters, setCorrectLetters, missLetters, setMissLetters, setStartGuess }) => {
    const hasWon = () => {
        if (missLetters.length === 6) {
            return false
        }
       return [...targetWord].filter(letter => !correctLetters.includes(letter)).length === 0 ?  true :  "pending"
    }

    const result = hasWon()

    const handlePlayAgain = () => {
        setStartGuess(false);
        setTargetWord("")
        setCorrectLetters([]);
        setMissLetters([])
    }

    if (result !== 'pending') {
        return (
            <div className="result-container">
                <div className = {result ? 'win' : 'lost'}>
                    { result ? <h2 className="win">You got it! Player 2 won!</h2> 
                            : <h2>You used all chances! Player 1 won! The word was {targetWord}!</h2> 
                    }
                </div>                        
                <button onClick={handlePlayAgain}>Play Again</button>
            </div>
        )
    } else {
        return null
    }
    
}

export default GameResult
