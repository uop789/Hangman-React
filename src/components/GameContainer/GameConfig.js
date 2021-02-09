import React from 'react'

const GameConfig = ({ targetWord, handleInput, handleClick }) => {
    return (
        <div className= "gameConfig_container">
            <p>Player one type in a target word</p>
            <input type="text" value = {targetWord} onChange = {handleInput} />
            <button onClick= {handleClick}>Start Guessing</button>
        </div>
    )
}

export default GameConfig
