import { render, screen } from "@testing-library/react";
import { TermsAndCondition } from "./TermsAndConditions";

test("can render sign up card", () => {
  render(<TermsAndCondition />);

  expect(
    screen.getByText("By clicking the button you are agreeing to our")
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Terms and services" })
  ).toHaveAttribute("href", "https://www.example.com");
});
