import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial red color", () => {
	render(<App />);
	const colorButton = screen.getByRole("button", { name: "Change to blue" });
	expect(colorButton).toHaveStyle({ backgroundColor: "red" });

	fireEvent.click(colorButton);
	expect(colorButton.textContent).toBe("Change to red");
	expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
});


test("initial conditions", () => {
	render(<App />);

	const colorButton = screen.getByRole("button", { name: "Change to blue" });
	expect(colorButton).toBeEnabled();

	const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
	expect(checkbox).not.toBeChecked();
});

test("checkbox's disable/enable button functionality", () => {
	render(<App />);
	const colorButton = screen.getByRole("button");
	const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

	fireEvent.click(checkbox);
	expect(colorButton).toBeDisabled();

	fireEvent.click(checkbox);
	expect(colorButton).toBeEnabled();
});

test("Clicked disabled button has gray background and reverts to red", () => {
	render(<App />);
	const colorButton = screen.getByRole("button", { name: "Change to blue" });
	const checkbox = screen.getByRole("checkbox");

	// disable button
	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle("background-color: gray");

	// re-enable button
	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle("background-color: red");
});

test("Clicked disabled button has gray background and reverts to blue", () => {
	render(<App />);
	const colorButton = screen.getByRole("button", { name: "Change to blue" });
	const checkbox = screen.getByRole("checkbox");

	fireEvent.click(colorButton);

	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle("background-color: gray");

	fireEvent.click(checkbox);
	expect(colorButton).toHaveStyle("background-color: blue");
});