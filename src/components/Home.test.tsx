import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  test("renders home page messages correctly", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
});
