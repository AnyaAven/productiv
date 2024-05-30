import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App.jsx";

describe("productiv app", function () {
  test("renders without crashing", function () {
    render(<App/>);
  });

  test("contains expected title", function () {
    const result = render(<App/>);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  test("contains todo list", function () {
    const result = render(<App/>);
    expect(result.queryByText("Todos")).toBeInTheDocument();
  });
});

