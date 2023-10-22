import {render , screen } from "@testing-library/react";
import TextInput from "@/components/contact/TextInput";

describe("TextInput", () => {
  it("should have a label name ", () => {
    render(<TextInput label = "test"/>) ;
    const labelName =  screen.getByText("test") ;
    expect(labelName).toBeInTheDocument()
 });
});
