import "./appStyle.css";
function App() {
	return (
		<>
			<div className="app_container">
				<div className="app_header_main">
					<div className="app_header">
						<h2>My TODO List App</h2>
						<p className="app_header_welcome">
							Welcome to todo list
						</p>
					</div>
				</div>
				<div className="input_container">
					<input type="text" placeholder="What u gonna do today" />
					<button className="input_container_add">+</button>
				</div>
				<div className="todo_items_container">
					<div className="todo_item">
						<p>List item 1</p>
						<button>Delete</button>
						<button>Done</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
