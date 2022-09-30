import { useState } from "react";
import "./App.css";

function App() {
	const [btnColor, setBtnColor] = useState("red");
	const [isDisabled, setDisabled] = useState(false);
	let newColor = btnColor === "red" ? "blue" : "red";

	return (
		<div>
			<button
				style={{ backgroundColor: btnColor, color: "white" }}
				onClick={() => setBtnColor(newColor)}
				disabled={isDisabled}>
				{btnColor === "red" ? "Change to blue" : "Change to red"}
			</button>
			<hr />
			<input
				type="checkbox"
				id="enable-button-checkbox"
				aria-checked={isDisabled}
				defaultChecked={isDisabled}
				checked={isDisabled}
				onChange={(e) => setDisabled(e.target.checked)}
			/>
		</div>
	);
}

export default App;
