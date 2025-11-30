import { useState } from 'react'
import styles from '../Test3/Trainer.module.css'

function BulletedList() {

	const workersList2 = [
		{
			id: '111',
			name: 'Іванов',
			salary: 10000,
		},
		{
			id: '111',
			name: 'Петров',
			salary: 20000,
		},
		{
			id: '111',
			name: 'Сидоров',
			salary: 50000,
		},
	]


	return (
		<>
			<div className={styles.container}>
				<div>Test-4</div>
				<ol>
					{workersList2.map((list, index) =>
						<li key={index}>{list.name}:{list.salary}</li>)}
				</ol>
			</div>
		</>
	);
}

export default BulletedList;


// 4. Вивести список як маркований список з елементами у форматі (name: salary)