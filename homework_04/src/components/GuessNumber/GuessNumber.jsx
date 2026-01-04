import { useState } from "react";
import RandomNumberForm from "./RandomNumber";
import Players from "./Players";
import styles from './GuessNumber.module.css'

function GuessNumber() {
	const [randomNumber, setRandomNumber] = useState(() =>
		Math.floor(100 + Math.random() * 900).toString().split(''))
	const [revealed, setRevealed] = useState(() =>
		Array(randomNumber.length).fill(false)
	)
	const [usedDigits, setUsedDigits] = useState(() => [])
	const [currentPlayer, setCurrentPlayer] = useState(1)
	const [isGameOver, setIsGameOver] = useState(false);
	const [loser, setLoser] = useState(null)
	const [player1Numbers, setPlayer1Numbers] = useState([]);
	const [player2Numbers, setPlayer2Numbers] = useState([]);


	function addNumber(num) {
		setUsedDigits((prev) => [
			...prev, num
		])

		numberCheck(num)
		setCurrentPlayer(prev => prev === 1 ? 2 : 1)
	}

	function numberCheck(num) {
		const newRevealed = [...revealed]
		randomNumber.forEach((el, i) => {
			if (el === num) newRevealed[i] = true
		})
		if (randomNumber.includes(num)) {
			if (currentPlayer === 1) {
				setPlayer1Numbers((prev) => [
					...prev, num
				])
			} else {
				setPlayer2Numbers((prev) => [
					...prev, num
				])
			}
		}
		setRevealed(newRevealed)
		if (newRevealed.every(Boolean)) {
			setIsGameOver(true)
			setLoser(currentPlayer)
		}
	}

	function resetGame() {
		setRandomNumber(Math.floor(100 + Math.random() * 900).toString().split(''))
		setRevealed([false, false, false])
		setUsedDigits([])
		setPlayer1Numbers([])
		setPlayer2Numbers([])
		setCurrentPlayer(1)
		setIsGameOver(false)
		setLoser(null)
	}


	return (
		<div>
			<h1>GuessNumber</h1>
			<RandomNumberForm RandomNumber={randomNumber} revealed={revealed} />
			<hr />
			{isGameOver && <div className={styles.item}>Гравець {loser} програв!</div>}
			<div className={styles.section}>

				<Players num={1} addNumber={addNumber} usedDigits={usedDigits} blocking={currentPlayer !== 1} numbers={player1Numbers} />
				<Players num={2} addNumber={addNumber} usedDigits={usedDigits} blocking={currentPlayer !== 2} numbers={player2Numbers} />
			</div>
			<div className={styles.centerButton}>
				{isGameOver && <button onClick={resetGame}>Нова гра</button>}
			</div>
		</div>


	);
}

export default GuessNumber;