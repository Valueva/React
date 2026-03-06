import AssignmentCard from "./AssignmentCard";

function AssignmentSection({ assignmentsList, onUserTaskDelete }) {
	return (
		<div>
			<h3>Список призначень</h3>
			<div>
				{assignmentsList?.length > 0 ?
					(assignmentsList.map((userAssigments) => (<AssignmentCard key={userAssigments.userId}{...userAssigments} onUserTaskDelete={onUserTaskDelete} />)))
					: (<div>Список призначень порожній</div>)}
			</div>
		</div>
	);
}

export default AssignmentSection;