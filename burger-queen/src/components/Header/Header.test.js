import React from "react";
import { screen, render } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Header />);
  });

  it("must display a title", () => {
    const title = screen.getByRole("heading", { name: /BURGER QUEEN/i });
    expect(title).toBeInTheDocument();
  });
});
