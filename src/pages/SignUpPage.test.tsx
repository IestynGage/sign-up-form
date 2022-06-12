import { render, screen } from "@testing-library/react";
import SignUpPage from "./SignUpPage";

test("can render interactive elements ", () => {
  render(<SignUpPage />);

  expect(
    screen.getByRole("button", { name: "CLAIM YOUR FREE TRIAL" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", {
      name: "Try it free 7 days then $20/mo. thereafter",
    })
  ).toBeInTheDocument();

  expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Last Name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
});
