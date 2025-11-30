import { useState } from 'react'
import Business from './Business';
import Economy from './Economy';

function Ticket() {
	const [ticketClass, setTicketClass] = useState('')




	return (
		<>
			<div style={{ border: '1px solid black', padding: '50px 200px', marginBottom: '30px' }}>
				<div>Test-2</div>
				<label>Виберіть клас квитка
					<select name="list" value={ticketClass}
						onChange={(e) => setTicketClass(e.target.value)}>
						<option value="">-- виберіть --</option>
						<option value='business'>бізнес клас</option>
						<option value='economy'>економ клас</option>
					</select>
				</label>

				{ticketClass === "business" && <Business />}
				{ticketClass === "economy" && <Economy />}


			</div>
		</>
	);
}

export default Ticket;


// Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо
// 1) бізнес -  виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают
// 2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.
