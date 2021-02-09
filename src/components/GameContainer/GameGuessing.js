import React, { useEffect } from 'react'
import Figure from './Figure'
import Status from './Status'
import { hasDuplicate } from '../../helper'

const GameGuessing = ({ targetWord, showNotification, guess, setGuess, correctLetters, setCorrectLetters, missLetters, setMissLetters }) => {
    

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (keyCode >= 65 && keyCode <= 90) {
              const letter = key.toLowerCase();
              setGuess(key)
              targetWord.includes(letter) ?  !hasDuplicate(correctLetters, letter) 
                                                ? setCorrectLetters([...correctLetters, letter]) 
                                                : showNotification('You have already guessed this letter')
                                          : !hasDuplicate(missLetters, letter)
                                                ? setMissLetters([...missLetters, letter])
                                                : showNotification('You have already guessed this letter')  
            } else {
                showNotification("only 26 letters allowed") 
            }
        }
        window.addEventListener('keydown', handleKeydown);
    
        return () => window.removeEventListener('keydown', handleKeydown);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [guess, correctLetters, missLetters]);

    return (
        <div>
           <h3>Find the hidden word - Player two enter a letter</h3>
           <Figure missLetters= {missLetters}/> 
           <Status targetWord = {targetWord} guess = {guess} correctLetters = {correctLetters} missLetters = {missLetters} />

        </div>
    )
}

export default GameGuessing
