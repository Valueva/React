import { useState } from 'react'
import './App.css'
import TaskManager from './components/TasksManager/TaskManager'
import { tasksList, workersList } from './components/TasksManager/data'
import DansingManager from './components/Dancing/DansingManager'
import { boysList, girlsList } from './components/Dancing/dansing'

function App() {


	return (
		<>
			<div>
				<h1>Template</h1>
				<TaskManager tasksList={tasksList} usersList={workersList} />
			</div>
			<hr />
			<div>
				<DansingManager boysList={boysList} girlsList={girlsList} />
			</div>

		</>
	)
}

export default App
