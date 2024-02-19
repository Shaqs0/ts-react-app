import { MouseEvent, useState } from 'react';
import Button from './components/Button/Button/Button';
import Input from './components/Button/Input/Input';

function App() {
	const [counter, setCounter] = useState<number>();

	const addCounter = (e: MouseEvent) => {
		console.log(e);

	};

	return (
		<>
			<Button onClick={addCounter}>Кнопка</Button>
			<Button appearence='big'>Кнопка</Button>
			<Input placeholder='Email'/>
		</>
	);
}

export default App;
