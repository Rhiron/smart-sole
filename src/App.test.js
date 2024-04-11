import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders setting the gender link", () => {
  render(<App />);
  const linkElement = screen.getByText(/setGender/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders setting the age link", () => {
  render(<App />);
  const linkElement = screen.getByText(/setAge/i);
  expect(linkElement).toBeInTheDocument();
});
