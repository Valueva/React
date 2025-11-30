import { useState, useRef, useEffect } from "react";
import styles from "./ListAthletes.module.css"

function ListAthletes() {
	const [commonList, setCommonList] = useState([
		"Іван",
		"Петро",
		"Олег",
		"Катерина",
		"Сергій",
		"Ганна",
	]);
	const [selectedList, setSelectedList] = useState([])

	function addAthletesOnSelectedList(name) {
		setCommonList(prev => prev.filter(item => item !== name));
		setSelectedList(prev => [...prev, name]);
	}

	function addAthletesOnCommonList(name) {
		setSelectedList(prev => prev.filter(item => item !== name))
		setCommonList(prev => [...prev, name])
	}

	return (
		<div className={styles.container}>
			<div>Task5</div>
			<hr />
			<div className={styles.box}>
				<div className={styles.item}>
					<ul>
						{commonList.map((el) => (<li><p>{el}</p>
							<button className={styles['btt-left']} onClick={() => addAthletesOnSelectedList(el)}>
								<img src="https://thumbs.dreamstime.com/b/%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%B9-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BA%D0%B8-%D0%B8%D0%BB%D0%B8-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9-%D1%83%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D0%B9-298157500.jpg" />
							</button>
						</li>))}
					</ul>
				</div>
				<div className={styles.item}>
					<ul>
						{selectedList.map((el) => (<li><p>{el}</p>
							<button className={styles['btt-rigth']} onClick={() => addAthletesOnCommonList(el)}>
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXEbyK88EFZa_U3pv_jVBGy03hzwJ6OdBzA&s" />
							</button>
						</li>))}
					</ul>
				</div>
			</div>

		</div>
	);
}

export default ListAthletes;