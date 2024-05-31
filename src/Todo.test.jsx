import { test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo.jsx";

test("renders without crashing", function () {
  render(<Todo />);
});


// test("matches snapshot", function () {
//   const { asFragment } = render(<ShoppingList />);
//   expect(asFragment()).toMatchSnapshot();
// });


test("has props", function () {
  //{ id, title, description, priority }
  const { container } = render(
    <Todo
      title="Grocery List"
      priority={1}
      description="spinach"
    />
  );

  const item = container.querySelector(".Todo");

  expect(item).toHaveTextContent("Grocery List");
  expect(item).toHaveTextContent("priority: 1");
  expect(item).toHaveTextContent("spinach");


});


