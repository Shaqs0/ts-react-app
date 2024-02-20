import { MouseEvent, useState } from 'react';
import Button from './components/Button/Button/Button';
import Input from './components/Button/Input/Input';
import { Link, RouterProvider} from 'react-router-dom';

function App() {
	const [counter, setCounter] = useState<number>(0);

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
