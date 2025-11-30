import { useState } from 'react'
import Content1 from './Content1'
import Content2 from './Content2'

function Authorization() {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [isAuth, setIsAuth] = useState(false)
	const [isTried, setIsTried] = useState(false)
	const colorDiv = login.toLowerCase() === 'ivan' ? 'blue' : 'red'

	const USERS = [
		{ login: 'aaaa', password: '1111' },
		{ login: 'bbbb', password: '2222' },
		{ login: 'cccc', password: '3333' },
		{ login: 'dddd', password: '4444' },
	]



	function getContent() {
		setIsTried(true)

		if (USERS.some((el) => el.login === login && el.password === password)) {
			setIsAuth(true)
		}
		else {
			setIsAuth(false)
		}

	}

	return (
		<>
			<div style={{ border: '1px solid black', padding: '50px 200px', marginBottom: '30px' }}>
				<div>Test-1</div>
				<div>
					<label>login
						<input type="text" value={login}
							onChange={(e) => setLogin(e.target.value)} />
					</label>
				</div>
				<div>
					<label>password
						<input type="text" value={password}
							onChange={(e) => setPassword(e.target.value)} />
					</label>
				</div>
				<br />
				<button onClick={getContent}>sing in</button>
				{isTried && (<div style={{ color: colorDiv }}>
					{isAuth ? <Content1 /> : <Content2 />}
				</div>)}
			</div>

		</>

	);
}

export default Authorization;