import style from './ListCouples.module.css'

function ListCouples({ listCouples, onDelete }) {
	return (
		<div>
			<div className={style.container}>
				<h3>Обрані пари</h3>

				<ul>{listCouples?.length > 0 ? (listCouples.map((list) => (<li key={list.id}><p>{list.boy.name} + {list.girl.name}</p>
					<button className={style.btn} onClick={() => onDelete(list.id)}>Видалити</button></li>)))
					: <li>Список порожній</li>}</ul>
			</div>
		</div>
	);
}

export default ListCouples;