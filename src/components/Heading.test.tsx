import { screen, render } from "@testing-library/react";
import Heading from "./Heading";

test("제목이 있다", () => {
  render(<Heading />);
  // const titleEl = screen.getByRole('heading'); // 실패함 (Heading엘레먼트에는 heading 태그가 여러개 있으므로.)

  const titleEl = screen.getByRole("heading", {
    level: 1, // h1을 의미 level이 2면 h2를 의미
  });
  expect(titleEl).toBeInTheDocument();
});
