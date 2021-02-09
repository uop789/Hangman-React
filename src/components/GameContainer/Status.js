import React from 'react'

const Word = ({ targetWord, correctLetters }) => {
    return (
        <>
            Word: {[...targetWord].map(letter => correctLetters.includes(letter) ? `${letter} ` : "_ ")}
        </>
    )
}

const Misses = ({ missLetters }) => {
    return (
        <>
            Misses: {missLetters.map((letter,index) => index === missLetters.length-1 ? letter : `${letter}, `)}
        </>
    )
} 

const Status = ({ targetWord, guess, correctLetters, missLetters }) => {
    return (
        <div className="status-container">
            <Word targetWord = {targetWord} correctLetters = {correctLetters} />
            <p>Guess: {guess}</p>
            <Misses missLetters = {missLetters} />   
        </div>
    )
}

export default Status
