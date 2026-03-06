import AssignmentItem from "./AssignmentItem";
import style from './AssignmentCard.module.css'


function AssignmentCard({ userName, userId, tasksList, onUserTaskDelete }) {
	function onTaskDelete(taskId) {
		onUserTaskDelete(userId, taskId)
	}
	return (
		<div className={style.container}>
			<h3>{userName}</h3>
			<hr />
			{tasksList?.length > 0 ? (tasksList.map((task) =>
				(<AssignmentItem key={task.id} {...task} onTaskDelete={onTaskDelete} />))
			) : (<div>Список задач порожній</div>)}
		</div>
	);
}

export default AssignmentCard;