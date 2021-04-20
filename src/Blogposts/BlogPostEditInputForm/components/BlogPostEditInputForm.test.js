import React from "react";
import { render } from "@testing-library/react";
import BlogPostEditInputForm from "./BlogPostEditInputForm";

test("renders component", async() => {
  const { getByText } = render(<BlogPostEditInputForm />);
  expect(getByText("Save changes")).toBeInTheDocument();
});
