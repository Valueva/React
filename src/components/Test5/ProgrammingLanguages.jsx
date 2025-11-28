import { useState } from 'react'
import styles from './ProgrammingLanguages.module.css'

function ProgrammingLanguages() {

	const DATA = [
		{
			id: '001',
			title: 'JavaScript',
			link: 'https://uk.javascript.info/',
			img: 'https://static.vecteezy.com/system/resources/previews/051/336/397/non_2x/javascript-transparent-logo-free-png.png',
			name: 'Сучасний підручник з JavaScript',
			description: 'JS (JavaScript) — це високорівнева мова програмування, яка в основному використовується для додавання інтерактивності веб-сторінкам, але також може використовуватися для розробки серверного коду та інших програм. ',
		},
		{
			id: '002',
			title: 'Python',
			link: 'https://docs.python.org/uk/3/tutorial/index.html',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png',
			name: 'Підручник з Python',
			description: 'Python — це потужна мова програмування, яка проста у вивченні. Він має ефективні структури даних високого рівня та простий, але ефективний підхід до об’єктно-орієнтованого програмування. ',
		},
		{
			id: '003',
			title: 'C++',
			link: 'https://w3schoolsua.github.io/cpp/cpp_ref_reference.html',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1067px-ISO_C%2B%2B_Logo.svg.png',
			name: 'C++ Довідник',
			description: 'C++ — це універсальна мова програмування загального призначення, яка підтримує кілька парадигм, зокрема об\'єктно-орієнтовану, узагальнену та процедурну.',
		},
	]

	return (
		<>
			<div className={styles.container}>
				<div>Test-5</div>
				<ul className={styles['container-lists']}>
					{DATA.map((item, index) =>
						<li key={index} className={styles['container-list']}>
							<div className={styles['container-list--title']}>
								<img src={item.img} />
								<div>
									<span>{item.title}</span>
									<a href={item.link}>{item.link}</a>
								</div>
							</div>
							<h3 className={styles['container-list--content']}>{item.name}</h3>
							<p>{item.description}</p>
						</li>)}
				</ul>
			</div>
		</>
	);
}

export default ProgrammingLanguages;