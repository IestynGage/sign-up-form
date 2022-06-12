import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpCard from "./SignUpCard";

test("can render sign up card", () => {
  render(<SignUpCard />);

  expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Last Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: "CLAIM YOUR FREE TRIAL" })
  ).toBeInTheDocument();
});

test("can render error message", () => {
  render(<SignUpCard />);

  const freeTrialBtn = screen.getByRole("button", {
    name: "CLAIM YOUR FREE TRIAL",
  });
  expect(freeTrialBtn).toBeInTheDocument();

  userEvent.click(freeTrialBtn);

  expect(screen.getByText("First Name cannot be empty")).toBeInTheDocument();
  expect(screen.getByText("Last Name cannot be empty")).toBeInTheDocument();
  expect(screen.getByText("Email cannot be empty")).toBeInTheDocument();
  expect(screen.getByText("Password cannot be empty")).toBeInTheDocument();
});
