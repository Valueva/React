import { useState } from 'react'
import tableImg from '/src/assets/table.webp'
import styles from './Trainer.module.css'

function EnglishTrainer() {
	const [answer, setAnswer] = useState('')
	const [message, setMessage] = useState('')
	const [status, setStatus] = useState(null)


	function getAnswer() {
		if (answer.toLowerCase() === 'стіл') {
			setMessage('Добре. Молодець!')
			setStatus(true)
		}
		else {
			setMessage('Невірно, спробуйте ще раз')
			setStatus(false)
		}
	}

	return (
		<>
			<div className={styles.container}>
				<div>Test-3</div>
				<div className={status === true ? styles.correctly : status === false ? styles.error : ''}>
					<div>
						<img src={tableImg} />
						<p>Table</p>
					</div>
					<label>Ваша відповідь
						<input type="text" value={answer}
							onChange={(e) => setAnswer(e.target.value)} />
					</label>
					<br />
					<div>
						<button onClick={getAnswer}>Перевірити</button>
					</div>
					<div>
						{message}
					</div>
				</div>

			</div >
		</>
	);
}

export default EnglishTrainer;

// Задача 3. Елемент тренажера англійської.
// Виводимо зображення елемента і слово. Користувач вводить відповідь.
// Якщо вірно – відтворюємо фразу «Добре. Молодець!» (і додаємо зелену рамку до елемента),
// якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).