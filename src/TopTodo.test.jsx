import { test, expect, describe } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import TopTodo from "./TopTodo.jsx";
import { TODOS } from "./_testCommon.js";

describe("smoke tests", function () {
  test("renders without crashing", function () {
    render(<TopTodo />);
  });
  test("matches snapshot on initial render", function () {
    const { container } = render(<TopTodo />);
    expect(container).toMatchSnapshot();
  });
});

describe("works", function () {
  test("todo is number 1 priority", function () {
    const { container } = render(<TopTodo todos={TODOS}/>);

    const qs = container.querySelector.bind(container);
    const qsa = container.querySelectorAll.bind(container);

    expect(qsa(".Todo").length).toEqual(1);
    expect(qs(".Todo")).toHaveTextContent("priority: 1");
  });

});