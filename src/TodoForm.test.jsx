import { test, expect, describe, beforeAll, afterAll, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm.jsx";
import { TODOS, testFunction } from "./_testCommon.js";
import * as testCommon from "./_testCommon.js";

beforeAll(function () {
  vi.spyOn(testCommon, "testFunction");
});

afterAll(function () {
  vi.restoreAllMocks();
});

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
    testCommon.testFunction.mockReturnValue();
    const { container } = render(
      <TodoForm
        initialFormData={TODOS[0]}
        handleSave={testFunction}
      />
    );

    fireEvent.input(description, { target: { value: "spinach" } });

    expect(testFunction).toHaveBeenCalledTimes(0);
    //User interacts with form
    fireEvent.click(container.querySelector(".TodoForm-Button"));
    //Test that the cb sent to the form is called,
    expect(testFunction).toHaveBeenCalledTimes(1);
  });

  test("creating a Todo item", function () {
    testCommon.testFunction.mockReturnValue();
    const { container } = render(
      <TodoForm
        initialFormData={{ title: "", priority: "", description: "" }}
        handleSave={testFunction}
      />
    );
    fireEvent.input(title, { target: { value: "Sleep" } });
    fireEvent.input(priority, { target: { value: 1 } });
    fireEvent.input(description, { target: { value: "sleep well" } });

    expect(testFunction).toHaveBeenCalledTimes(0);
    //User interacts with form
    fireEvent.click(container.querySelector(".TodoForm-Button"));
    //Test that the cb sent to the form is called,
    expect(testFunction).toHaveBeenCalledTimes(1);
  });

  test("handleChange callback works", function () {
    //TODO: how do write a test for handleChange ??
  });

});

