import { useState } from "react";
import styles from './MessengerForm.module.css'

function MessengerForm({ onSend }) {
	const [textMessege, setTextMessege] = useState('')

	function addMessenger() {
		if (textMessege.trim() === "") return
		else onSend(textMessege)

		setTextMessege("")

	}

	return (
		<div className={styles.section}>
			<label>
				<input type="text" placeholder="Type a new messege" value={textMessege} onChange={(e) => setTextMessege(e.target.value)} />
			</label>
			<button onClick={() => addMessenger()}>Send</button>

		</div>
	);
}

export default MessengerForm;