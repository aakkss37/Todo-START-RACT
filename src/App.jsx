import { useState } from "react";
import "./appStyle.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineDoneOutline } from "react-icons/md";

function App() {
	const [userInput, setUserInput] = useState("");

	const updateUserInputState = () => {
		console.log("clicked");
		setUserInput("sneha i love u " + Math.random() * 10000);
	};

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
					<button
						className="input_container_add"
						onClick={updateUserInputState}>
						+
					</button>
				</div>
				<div className="todo_items_container">
					<div className="todo_item">
						<p className="todo_item_tex">Pending</p>
						<div className="todo_item_action_button_container">
							<button>
								<RiDeleteBin6Line />
							</button>
							<button>
								<MdOutlineDoneOutline />
								{/* <FaUndo /> */}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
