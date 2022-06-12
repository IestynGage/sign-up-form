import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormField from "./FormField";

test("can render example label", () => {
  render(<FormField label="ExampleLabel" />);

  expect(screen.getByPlaceholderText("ExampleLabel")).toBeInTheDocument();
});

test("can render default error", () => {
  render(<FormField label="ExampleLabel" validFormField={false} />);

  expect(screen.getByText("ExampleLabel cannot be empty")).toBeInTheDocument();
});

test("can render custom error message", () => {
  render(
    <FormField
      label="ExampleLabel"
      validFormField={false}
      errorMessage="Custom errror"
    />
  );

  expect(
    screen.queryByText("ExampleLabel cannot be empty")
  ).not.toBeInTheDocument();
  expect(screen.getByText("Custom errror")).toBeInTheDocument();
});

test("can use callback", () => {
  const onChangeMock = jest.fn();
  render(<FormField label="ExampleLabel" onChange={onChangeMock} />);

  const inputBox = screen.getByRole("textbox");
  expect(inputBox).toBeInTheDocument();
  userEvent.type(inputBox, "Example");

  expect(onChangeMock).toBeCalled();
});
