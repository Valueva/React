import { useState } from "react";
import MessengerForm from "./MessengerForm";
import MessageArea from "./MessageArea";

function SimulatorMessenger() {
	const [textMessegeUser, setTextMessegeUser] = useState([])

	const addMessengerUser = (data) => {
		setTextMessegeUser(prev => [...prev, data])

	}

	return (
		<div>
			<h1>Messenger</h1>
			<MessageArea item={textMessegeUser} />
			<br />
			<MessengerForm onSend={addMessengerUser} />

		</div>
	);
}

export default SimulatorMessenger;


// Створити імітатор мессенджера. Є можлиість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).