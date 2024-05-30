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
  test("calls it's handleSave cb", function () {
    testCommon.testFunction.mockReturnValue();
    const { container } = render(
      <TodoForm
        initialFormData={ "dataTODO:" }
        handleSave={testFunction} //TODO: What is the property name of this
      />
    );

    //User interacts with form

    //Test that the cb sent to the form is called,
    expect(testCommon.testFunction).toHaveBeenCalledTimes(1);
  });

});