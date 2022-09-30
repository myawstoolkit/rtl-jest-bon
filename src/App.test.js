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

	const checkbox = screen.getByRole("checkbox");
	expect(checkbox).not.toBeChecked();
});

test("if checkbox toggles button disable/enable condition", () => {
	render(<App />);
	const colorButton = screen.getByRole("button");
	const checkbox = screen.getByRole("checkbox");

	fireEvent.click(checkbox);
	expect(colorButton).toBeDisabled();

	fireEvent.click(checkbox);
	expect(colorButton).not.toBeDisabled();
});