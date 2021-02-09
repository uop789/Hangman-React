import React, { useState } from 'react'
import GameConfig from './GameConfig'
import GameGuessing from './GameGuessing'
import GameResult from './GameResult'

const Game = ({ showNotification }) => {
    const [targetWord, setTargetWord] = useState("");
    const [startGuess, setStartGuess] = useState(false);
    const [guess, setGuess] = useState('');
    const [correctLetters, setCorrectLetters] = useState([]);
    const [missLetters, setMissLetters] = useState([]);

    const handleInput = (event) => {
        const input = event.target.value;
        if (/^[a-z]+$/.test(input) || input === "") {
          setTargetWord(input)
        } else {
          showNotification("only 26 letters in lowecase allowed")
        } 
    }

    const handleClick = () => {
      if(targetWord.length > 0) {
        setStartGuess(true)
      } else {
        showNotification("please give a target word")
      }  
    }

    return (
        <>
         { !startGuess ? <GameConfig targetWord = {targetWord}  handleInput = {handleInput} handleClick = {handleClick} /> 
                       :<> 
                          <GameGuessing targetWord = {targetWord} 
                                        showNotification = {showNotification} 
                                        guess = {guess}
                                        setGuess = {setGuess}
                                        correctLetters = {correctLetters}
                                        setCorrectLetters = {setCorrectLetters}
                                        missLetters = {missLetters}
                                        setMissLetters = {setMissLetters}
                          />
                          <GameResult setStartGuess = {setStartGuess} 
                                      targetWord = {targetWord}
                                      setTargetWord = {setTargetWord}
                                      correctLetters = {correctLetters}
                                      setCorrectLetters = {setCorrectLetters}
                                      missLetters = {missLetters}
                                      setMissLetters = {setMissLetters}
                          />
                        </>   
         }             
        </>
    )
}

export default Game
