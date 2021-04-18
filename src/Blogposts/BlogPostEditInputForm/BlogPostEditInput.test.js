import React from "react";
import { render } from "@testing-library/react";
import BlogPostEditInput from "./BlogPostEditInput";

test("renders component", async() => {
  const { getByText } = render(<BlogPostEditInput />);
  expect(getByText("Save changes")).toBeInTheDocument();
});
