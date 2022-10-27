import React from "react"
import { screen, render } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
    it("must display a title", () => {
        const view = render(<Header/>)
        //expect(screen.getByText(/burger queen/i)).toBeInTheDocument()
        //view.getByText()
    })
})