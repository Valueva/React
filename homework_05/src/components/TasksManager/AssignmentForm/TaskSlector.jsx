function TaskSelector({ task, usersList, onTaskAssigned, assignments }) {


	const assignmentsUserId = Number(Object.entries(assignments).find(([userId, tasks]) =>
		tasks.includes(task.id))?.[0] || 0)

	function selectUser(e) {
		onTaskAssigned(task.id, Number(e.target.value))
	}



	const agUsersList = [{ id: 0, name: 'Виберіть користувача' }, ...usersList]
	return (
		<div>
			<div>{task.title}</div>
			<select onChange={selectUser} value={assignmentsUserId}>
				{agUsersList.map((user) => (<option key={user.id} value={user.id}>{user.name}</option>))}
			</select>
		</div>
	);
}

export default TaskSelector;