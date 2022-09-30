import { useState } from "react";

function App() {
	const [btnColor, setBtnColor] = useState("red");
	let newColor = btnColor === "red" ? "blue" : "red";

	const handleClick = () => {
		setBtnColor(newColor);
	};

	return (
		<div>
			<button style={{ backgroundColor: btnColor, color: "white" }} onClick={handleClick}>
				{btnColor === "red" ? "Change to blue" : "Change to red"}
			</button>
		</div>
	);
}

export default App;
