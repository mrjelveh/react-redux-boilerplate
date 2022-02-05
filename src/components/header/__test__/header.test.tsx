import { render, screen } from "@testing-library/react";
import Header from "../header.component";

// NOTE: it is a dummy test file just for showing structure of test file,
//       so it is not a real test file.
// If you want know more about testing, please visit:
// https://testing-library.com/docs/react-testing-library/intro
test("should render header component", () => {
  render(<Header />);
  screen.debug();
});
