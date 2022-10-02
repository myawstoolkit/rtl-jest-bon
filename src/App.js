import { useState } from "react";
import "./App.css";

function App() {
	const [btnColor, setBtnColor] = useState("red");
	const [isDisabled, setDisabled] = useState(false);
	let newColor = btnColor === "red" ? "blue" : "red";

	return (
		<div>
			<button
				style={{ backgroundColor: isDisabled ? "gray" : btnColor, color: "white" }}
				onClick={() => setBtnColor(newColor)}
				disabled={isDisabled}>
				Change to {newColor}
			</button>
			<hr />
			<input
				type="checkbox"
				id="disable-button-checkbox"
				aria-checked={isDisabled}
				defaultChecked={isDisabled}
				onChange={(e) => setDisabled(e.target.checked)}
			/>
			<label htmlFor="disable-button-checkbox" style={{ color: "white" }}>
				<small>Disable button</small>
			</label>
		</div>
	);
}

export default App;
