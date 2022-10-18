import { screen, render } from "@testing-library/react";
import MyPage from "./MyPage";

test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage />);
  const textEl = screen.getByText(/로그인을 해주세요/g);
  const btnEl = screen.getByRole("button");
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});

test("유저가 있으면 환영문구를 보여준다.", () => {
  render(<MyPage user={{ name: "Kim" }} />);
  const headingEl = screen.getByRole("heading");
  expect(headingEl).toBeInTheDocument();
  expect(headingEl).toHaveTextContent("Kim님 환영합니다.");
});

test("유저가 name이 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage user={{ age: 11 }} />);
  const textEl = screen.getByText(/로그인을 해주세요/g);
  const btnEl = screen.getByRole("button");
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});
