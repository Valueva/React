import { useState } from 'react'
import AssignmentForm from "./AssignmentForm/AssignmentForm";
import AssignmentSection from "./AssignmentsSection/AssignmentSection";

function TaskManager({ usersList, tasksList }) {
	const [assignments, setAssignments] = useState(() => ({}))



	function getAssignmentsObject(userId, usersTasksId) {
		const user = usersList.find((item) => item.id == userId);

		const userTasksList = usersTasksId
			.map((taskId) =>
				tasksList.find((item) => item.id == taskId)
			);


		return {
			userId: user.id,
			userName: user.name,
			tasksList: userTasksList

		}

	}

	function getAssignmentsList() {
		return Object.keys(assignments).map((userId) => getAssignmentsObject(userId, assignments[userId]))
	}

	const assignmentsList = getAssignmentsList()

	// function onTaskAssigned(taskId, userId) {

	// 	setAssignments((prev) => ({ ...prev, [userId]: [...(prev[userId] || []), taskId], }))
	// }

	function onTaskAssigned(taskId, userId) {
		setAssignments(prevAssignments => {
			const nextAssignments = {}
			Object.entries(prevAssignments).forEach(([currentUserId, tasks]) => {
				nextAssignments[currentUserId] = tasks.filter(id => id !== taskId)
			})
			if (userId !== 0) {
				nextAssignments[userId] = [...(nextAssignments[userId] || []), taskId]
			}

			return nextAssignments
		})
	}

	function onUserTaskDelete(userId, taskId) {
		setAssignments((prevAssignments) => ({ ...prevAssignments, [userId]: prevAssignments[userId].filter((id) => id !== taskId), }))
	}



	return (
		<div>
			<h1>Менеджер задач</h1>
			<hr />
			<AssignmentForm tasksList={tasksList} usersList={usersList} onTaskAssigned={onTaskAssigned} assignments={assignments} />
			<hr />
			<AssignmentSection assignmentsList={assignmentsList} onUserTaskDelete={onUserTaskDelete} />
		</div>
	);
}

export default TaskManager;