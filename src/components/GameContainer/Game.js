import React, { useState, useEffect } from 'react';
import GameConfig from './GameConfig';
import GameGuessing from './GameGuessing';
import GameResult from './GameResult';

const Status = ['start', 'ongoing', 'end'];

const Game = ({ showNotification }) => {
	const [targetWord, setTargetWord] = useState('');
	const [gameStatus, setGameStatus] = useState(Status[0]);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [missLetters, setMissLetters] = useState([]);
	const [isPlayer2Winner, setIsPlayer2Winner] = useState(false);

	const handleInput = (event) => {
		const input = event.target.value;
		if (/^[a-z]+$/.test(input) || input === '') {
			setTargetWord(input);
		} else {
			showNotification('only 26 letters in lowecase allowed');
		}
	};

	const handleClick = () => {
		if (targetWord.length > 0) {
			setGameStatus(Status[1]);
		} else {
			showNotification('please give a target word');
		}
	};

	const compare = (targetWord, missLetters, correctLetters) => {
		if (missLetters.length === 6) {
			return 'lost';
		}
		return [...targetWord].filter((letter) => !correctLetters.includes(letter))
			.length === 0
			? 'won'
			: 'pending';
	};

	const handlePlayAgain = () => {
		setGameStatus(Status[0]);
		setTargetWord('');
		setCorrectLetters([]);
		setMissLetters([]);
	};

	useEffect(() => {
		console.log('b');
		if (gameStatus === 'ongoing') {
			const result = compare(targetWord, missLetters, correctLetters);
			if (result === 'won') {
				setGameStatus(Status[2]);
				setIsPlayer2Winner(true);
			}
			if (result === 'lost') {
				setGameStatus(Status[2]);
				setIsPlayer2Winner(false);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [gameStatus, missLetters, correctLetters]);

	return (
		<>
			{gameStatus === 'start' ? (
				<GameConfig
					targetWord={targetWord}
					handleInput={handleInput}
					handleClick={handleClick}
				/>
			) : (
				<>
					<GameGuessing
						gameStatus={gameStatus}
						targetWord={targetWord}
						showNotification={showNotification}
						correctLetters={correctLetters}
						setCorrectLetters={setCorrectLetters}
						missLetters={missLetters}
						setMissLetters={setMissLetters}
						compare={compare}
					/>

					{gameStatus === 'end' && (
						<GameResult
							targetWord={targetWord}
							isPlayer2Winner={isPlayer2Winner}
							PlayAgain={handlePlayAgain}
						/>
					)}
				</>
			)}
		</>
	);
};

export default Game;
