import TaskSelector from "./TaskSlector";

function AssignmentForm({ usersList, tasksList, onTaskAssigned, assignments }) {



	return (
		<div>
			<h3>Розподілювач задач</h3>
			<div>
				{tasksList?.length > 0 ?
					(tasksList.map((task) => (<TaskSelector key={task.id} task={task} usersList={usersList} onTaskAssigned={onTaskAssigned} assignments={assignments} />)))
					: (<div>Список задач порожній</div>)}
			</div>
		</div>
	);
}

export default AssignmentForm;