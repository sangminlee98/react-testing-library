import { screen, render } from "@testing-library/react";
import GetByQueries from "./GetByQueries";

test("제목이 있다", () => {
  render(<GetByQueries />);
  // const titleEl = screen.getByRole('heading'); // 실패함 (Heading엘레먼트에는 heading 태그가 여러개 있으므로.)

  const titleEl = screen.getByRole("heading", {
    level: 1, // h1을 의미 level이 2면 h2를 의미
  });
  expect(titleEl).toBeInTheDocument();
});

test("input 요소가 있다.", () => {
  render(<GetByQueries />);
  // const inputEl = screen.getByRole("textbox", {
  //   name: "자기소개", // name은 label의 해당하는 값을 입력 (label과 textarea가 for-id로 연결되어 있기 때문에 가능)
  // });

  // const inputEl = screen.getByLabelText("자기소개"); // 연결된 textarea를 찾는것

  // const inputEl = screen.getByLabelText("자기소개", {
  //   selector: "textarea",
  // }); // 연결된 textarea를 찾는것

  const inputEl = screen.getByDisplayValue("Tom");

  expect(inputEl).toBeInTheDocument();
});

test("my div가 있다.", () => {
  render(<GetByQueries />);
  const testEl = screen.getByTestId("my-div");
  expect(testEl).toBeInTheDocument();
});
