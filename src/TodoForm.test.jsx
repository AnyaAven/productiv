import { test, expect, describe, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm.jsx";
import { TODOS } from "./_testCommon.js";

describe("smoke tests", function () {
  test("renders without crashing", function () {
    render(<TodoForm />);
  });
  test("matches snapshot on initial render", function () {
    const { container } = render(<TodoForm />);
    expect(container).toMatchSnapshot();
  });
});

describe("works", function () {
  test("updating the Todo item", function () {
    const mockHandleSave = vi.fn();
    const { container } = render(
      <TodoForm
        initialFormData={TODOS[0]}
        handleSave={mockHandleSave}
      />
    );

    fireEvent.input(description, { target: { value: "spinach" } });

    expect(mockHandleSave).toHaveBeenCalledTimes(0);
    //User interacts with form
    fireEvent.click(container.querySelector(".TodoForm-Button"));
    //Test that the cb sent to the form is called,
    expect(mockHandleSave).toHaveBeenCalledTimes(1);
  });

  test("creating a Todo item", function () {
    const mockHandleSave = vi.fn();
    const { container } = render(
      <TodoForm
        initialFormData={{ title: "", priority: "", description: "" }}
        handleSave={mockHandleSave}
      />
    );
    fireEvent.input(title, { target: { value: "Sleep" } });
    fireEvent.input(priority, { target: { value: 1 } });
    fireEvent.input(description, { target: { value: "sleep well" } });

    expect(mockHandleSave).toHaveBeenCalledTimes(0);
    //User interacts with form
    fireEvent.click(container.querySelector(".TodoForm-Button"));
    //Test that the cb sent to the form is called,
    expect(mockHandleSave).toHaveBeenCalledTimes(1);
  });

  test("handleChange callback works", function () {
    //TODO: how do write a test for handleChange ??
  });

});

