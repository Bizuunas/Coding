import { useEffect, useState } from 'react';
const api = 'http://localhost:3000';

function App() {
	const [todos, setTodos] = useState([]);
	const [popupActive, setPopupActive] = useState(false);
	const [newTodo, setNewTodo] = useState("");

	useEffect(() => {
		GetTodos();
	}, []);

	const GetTodos = () => {
		fetch(api + '/todos')
			.then(res => res.json())
			.then(data => setTodos(data))
			.catch((err) => console.error("Error: ", err));
	}

	const completeTodo = async _id => {
		// console.log('id to send:', _id);
		const data = await fetch(api + '/todo/complete/' + _id, { method: 'PUT' })
			.then(res => res.json())
			.then(results => {
				setTodos(todos => todos.map(todo => {
					if (todo._id === results._id) {
						todo.complete = results.complete;
					}
		
					return todo;
				}));
			})
	}

	const addTodo = async () => {
		const data = await fetch(api + "/todo/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({
				text: newTodo
			})
		}).then(res => res.json());

		setTodos([...todos, data]);

		setPopupActive(false);
		setNewTodo("");
	}

	const deleteTodo = async _id => {
		const data = await fetch(api + '/todo/delete/' + _id, { method: "DELETE" })
		.then(res => res.json());

		setTodos(todos => todos.filter(todo => todo._id !== results.result._id));
	}

	return (
		<div className="App">
			<h1>Sveiki, Kostai!</h1>
			<h4>Jūsų užduotys</h4>

			<div className="todos">
				{todos.length > 0 ? todos.map(todo => (
					<div className={
						"todo" + (todo.complete ? " is-complete" : "")
					} key={todo._id} onClick={() => completeTodo(todo._id)}>
						<div className="checkbox"></div>

						<div className="text">{todo.text}</div>

						<div className="delete-todo" onClick={() => deleteTodo(todo._id)}>x</div>
					</div>
				)) : (
					<p>Šiuo metu jūs neturite jokių užduočių</p>
				)}
			</div>

			<div className="addPopup" onClick={() => setPopupActive(true)}>+</div>

			{popupActive ? (
				<div className="popup">
					<div className="closePopup" onClick={() => setPopupActive(false)}>X</div>
					<div className="content">
						<h3>Pridėti užduotį</h3>
						<input type="text" className="add-todo-input" onChange={e => setNewTodo(e.target.value)} value={newTodo} />
						<div className="button" onClick={addTodo}>Sukurti užduotį</div>
					</div>
				</div>
			) : ''}
		</div>
	);
}

export default App;
