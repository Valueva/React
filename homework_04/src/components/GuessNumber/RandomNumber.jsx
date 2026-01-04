import styles from './RandomNumber.module.css'

function RandomNumberForm({ RandomNumber, revealed }) {
	return (
		<div>
			<div className={styles.section}>Number:
				{RandomNumber.map((el, index) => (
					<span key={index}>{revealed[index] ? el : " "}</span>))}
			</div>
		</div >
	);
}

export default RandomNumberForm;