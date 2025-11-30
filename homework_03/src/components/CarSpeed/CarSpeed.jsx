
import { useState, useRef, useEffect } from "react";
import styles from './CarSpeed.module.css'

function CarSpeed() {
	const [speedLimit, setSpeedLimit] = useState('')
	const [currentSpeed, setCurrentSpeed] = useState('')
	const [isVisible, setIsVisible] = useState(true)
	const inpRef = useRef(null)
	const limit = Number(speedLimit);
	const current = Number(currentSpeed);

	useEffect(() => {
		inpRef.current?.focus()
	}, [])

	useEffect(() => {
		if (speedLimit === '') {
			setCurrentSpeed('');
			inpRef.current?.focus();
		}
	}, [speedLimit]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIsVisible(v => !v);
		}, 1000);
		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	}, [current, limit]);

	function handleSecondClick() {
		if (speedLimit === '') {
			setCurrentSpeed('');
			inpRef.current?.focus();
		}
	}

	function getColorClass() {
		let colorClass
		if (currentSpeed === '') colorClass = styles.colorless
		else if (current < limit / 2) colorClass = styles.orange
		else if (current > limit) colorClass = styles.red
		else colorClass = styles.green
		return colorClass
	}



	return (
		<div className={styles.container}>
			<div>Task3</div>
			<hr />
			<label>дозволена швидкість
				<input type="number" value={speedLimit} ref={inpRef} onChange={(e) => setSpeedLimit(e.target.value)} />
			</label>
			<br />
			<label>поточна швидкість
				<input type="number" value={currentSpeed} onChange={(e) => setCurrentSpeed(e.target.value)} onClick={handleSecondClick} className={getColorClass()} />
			</label>
			<br />
			{current > limit * 0.9 && (
				<div
					style={{
						color: "red",
						visibility: isVisible ? "visible" : "hidden"
					}}
				>
					Увага
				</div>
			)}

		</div>
	);
}

export default CarSpeed;


// Задача 3. Вводиться дозволена швидкість і поточна швидкість авто.
// Якщо не введено дозволену швидкість, то елемент введення поточної
// швидкості заблокований. Якщо швидкість менше 50% дозволеної,
// то колір input – оранжевий, якщо від 50% до 100% - зелений,
// вище 100% - червоний. Якщо значення вище 90% починає блимати повідомлення «Увага!»