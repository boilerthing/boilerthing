import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Footer } from "@/components/footer"

// This is an example of a test for the Footer component
describe("Footer", () => {
  it("renders 'All Rights Reserved' text", () => {
    render(<Footer />)
    const rightsReservedText = screen.getByText(/All Rights Reserved/i)
    expect(rightsReservedText).toBeInTheDocument()
  })
})
