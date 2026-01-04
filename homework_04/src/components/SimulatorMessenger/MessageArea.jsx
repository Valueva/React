
import { useState, useEffect } from 'react';
import styles from './MessageArea.module.css'

function MessageArea({ item }) {
	const [counters, setCounters] = useState(
		() => item.map(() => ({ like: 0, disLike: 0 }))
	)

	useEffect(() => {
		setCounters(prev => {
			if (prev.length === item.length) return prev;
			const newCounters = item.map((_, i) => prev[i] ? prev[i] : { like: 0, disLike: 0 });
			return newCounters;
		});
	}, [item])


	function addLike(index) {
		setCounters(prev =>
			prev.map((el, i) => (i === index ? { ...el, like: el.like + 1 } : el))
		);
	}

	function addDislike(index) {
		setCounters(prev =>
			prev.map((el, i) => (i === index ? { ...el, disLike: el.disLike + 1 } : el))
		);
	}

	return (
		<div className={styles.section}>
			{item.map((el, index) => (
				<div className={styles.container} key={index}><p>{el}</p>
					<button onClick={() => addLike(index)}>like</button>
					<button onClick={() => addDislike(index)}>Dislikes</button>
					<span>Likes:{counters[index]?.like ?? 0}</span>
					<span>Dislikes:{counters[index]?.disLike ?? 0}</span>
				</div>
			))}

		</div>
	);
}

export default MessageArea;