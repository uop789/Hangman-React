import React, { useState, useEffect } from 'react';
import Figure from './Figure';
import Status from './Status';
import { hasDuplicate } from '../../helper';

const GameGuessing = ({
	gameStatus,
	targetWord,
	showNotification,
	correctLetters,
	setCorrectLetters,
	missLetters,
	setMissLetters,
}) => {
	const [guess, setGuess] = useState('');
	useEffect(() => {
		console.log('a');
		if (gameStatus !== 'ongoing') {
			return;
		}
		const handleKeydown = (event) => {
			const { key, keyCode } = event;
			if (keyCode >= 65 && keyCode <= 90) {
				const letter = key.toLowerCase();
				setGuess(key);
				targetWord.includes(letter)
					? !hasDuplicate(correctLetters, letter)
						? setCorrectLetters([...correctLetters, letter])
						: showNotification('You have already guessed this letter')
					: !hasDuplicate(missLetters, letter)
					? setMissLetters([...missLetters, letter])
					: showNotification('You have already guessed this letter');
			} else {
				showNotification('only 26 letters allowed');
			}
		};
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gameStatus, correctLetters, missLetters]);

	return (
		<div>
			<h3>Find the hidden word - Player two enter a letter</h3>
			<Figure missLetters={missLetters} />
			<Status
				targetWord={targetWord}
				guess={guess}
				correctLetters={correctLetters}
				missLetters={missLetters}
			/>
		</div>
	);
};

export default GameGuessing;
