import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FileExplorer from "./FileExplorer";

describe("Home component", () => {
  test("renders home page messages correctly", () => {
    render(
      <BrowserRouter>
        <FileExplorer />
      </BrowserRouter>
    );
    const titleElement = screen.getByText(/Your Files/i);

    expect(titleElement).toBeInTheDocument();
  });
});
