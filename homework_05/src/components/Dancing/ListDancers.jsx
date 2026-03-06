import style from './ListDancers.module.css'

function ListDancers({ lists, title, onSelect, selectedId }) {
	return (
		<div>
			<div className={style.container}>
				<h3>{title}</h3>

				<ul>{lists?.length > 0 ? (lists.map((list) => (<li key={list.id}><p>{list.name}</p>
					{list.id === selectedId ? <button className={style.button} onClick={() => onSelect(list.id)} >Обрано</button> : <button className={style.btn} onClick={() => onSelect(list.id)}>Вибрати</button >}</li>)))
					: <li>Список порожній</li>}</ul>
			</div>
		</div>
	);
}

export default ListDancers;