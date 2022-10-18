import { render, screen } from "@testing-library/react";
import JoinButton from "./JoinButton";

test("19세 이하면 버튼을 클릭할 수 없다. 안내문구는 빨간색이다.", () => {
  render(<JoinButton age={18} />);
  const btnEl = screen.getByRole("button");
  const textEl = screen.getByRole("heading");
  expect(btnEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeDisabled();
  expect(textEl).toHaveStyle({
    color: "red",
  });
});

test("성인이면 버튼을 클릭할 수 있다. 안내문구는 흰색이다.", () => {
  render(<JoinButton age={25} />);
  const btnEl = screen.getByRole("button");
  const textEl = screen.getByRole("heading");
  expect(btnEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeEnabled();
  expect(textEl).toHaveStyle({
    color: "white",
  });
});
