import { useState } from "react";
import styles from './Players.module.css'

function Players({ num, addNumber, usedDigits, blocking, isGameOver, numbers }) {
	const [playerNumber, setPlayerNumber] = useState('')



	return (
		<div className={blocking ? styles.notactive : styles.active}>
			<div>Гравець{num}</div>
			<div>
				<label>Цифра
					<input type="number" value={playerNumber} onChange={(e) => setPlayerNumber(e.target.value)} />
				</label>
			</div>
			<hr />
			<div className={styles.indicator}>
				{!blocking && !isGameOver ? "Ваш хід!" : "\u00A0"}
			</div>

			<button onClick={() => { addNumber(playerNumber); setPlayerNumber('') }}

				disabled={usedDigits.includes(playerNumber) || isGameOver || blocking || playerNumber === ""}>
				Зробити хід</button>
			<p>guessed numbers: {numbers.join(', ')} </p>

		</div>
	);
}

export default Players;