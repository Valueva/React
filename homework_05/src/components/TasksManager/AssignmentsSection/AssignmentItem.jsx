import style from './AssignmentItem.module.css'

function AssignmentItem({ id, title, onTaskDelete }) {
	return (
		<div className={style.container}>
			<div>{title}</div>
			<button onClick={() => onTaskDelete(id)}>delete</button>
		</div>
	);
}

export default AssignmentItem;