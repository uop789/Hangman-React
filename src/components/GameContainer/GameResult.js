import React from 'react';

const GameResult = ({ targetWord, PlayAgain, isPlayer2Winner }) => {
	return (
		<div className="result-container">
			<div className={isPlayer2Winner ? 'win' : 'lost'}>
				{isPlayer2Winner ? (
					<h2>You got it! Player 2 won!</h2>
				) : (
					<h2>
						You used all chances! Player 1 won! The word was {targetWord}!
					</h2>
				)}
			</div>
			<button onClick={PlayAgain}>Play Again</button>
		</div>
	);
};

export default GameResult;
