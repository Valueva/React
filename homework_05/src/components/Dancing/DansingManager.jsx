import { useState } from 'react'
import ListDancers from "./ListDancers";
import style from './DansingManager.module.css'
import ListCouples from './ListCouples';

function DansingManager({ boysList, girlsList }) {
	const [listCouples, setListCouples] = useState(() => ([]))
	const [selectedBoy, setSelectedBoy] = useState(null)
	const [selectedGirl, setSelectedGirl] = useState(null)

	const availableBoys = boysList.filter(
		b => !listCouples.some(c => c.boy.id === b.id)
	)

	const availableGirls = girlsList.filter(
		g => !listCouples.some(c => c.girl.id === g.id)
	)

	function onSelectBoy(id) {
		if (selectedBoy === id) {
			setSelectedBoy(null)
		} else {
			setSelectedBoy(id)
		}
	}
	function onSelectGirl(id) {
		if (selectedGirl === id) {
			setSelectedGirl(null)
		} else {
			setSelectedGirl(id)
		}
	}
	function onAdd() {
		if (!selectedBoy || !selectedGirl) return

		const newCouple = {
			id: Date.now(),
			boy: boysList.find(b => b.id === selectedBoy),
			girl: girlsList.find(g => g.id === selectedGirl)
		}

		setListCouples(prev => [...prev, newCouple])


		setSelectedBoy(null)
		setSelectedGirl(null)

	}

	function onDelete(id) {
		setListCouples(prev =>
			prev.filter(couple => couple.id !== id)
		)
	}

	return (
		<div>
			<h1>Пари для танців</h1>
			<div className={style.container}>
				<ListDancers lists={availableBoys} onSelect={onSelectBoy} selectedId={selectedBoy} title="Хлопці" />
				<ListDancers lists={availableGirls} onSelect={onSelectGirl} selectedId={selectedGirl} title="Дівчата" />
			</div>
			<button onClick={onAdd} disabled={!selectedBoy || !selectedGirl}>Додати</button>
			<ListCouples listCouples={listCouples} onDelete={onDelete} />
		</div>
	);
}

export default DansingManager;


// Задача 10. Пари для танців. Поступово вибираємо хлопця, дівчину і додаємо у обрані пари.
// Пару можна видалити. Поки не вибрано хлопця і дівчину кнопка «Додати» заблокована.
// Якщо не вистачає хлопців або дівчат вибір також блокується.

// const boysList = [
// 	{
// 		id: 1,
// 		name: 'Андрій',
// 	},]