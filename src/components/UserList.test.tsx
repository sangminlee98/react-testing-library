import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["Tom", "Jane", "Mike"];
  test("0.5초 뒤에 제목이 나타난다.", async () => {
    render(<UserList users={users} />);
    // screen.debug();
    // const titleEl = screen.getByRole("heading", {
    //   name: "사용자 목록",
    // }); // title이 0.5초 뒤에 (비동기)로 나오므로 getByRole로 확인할 수 없다.
    const titleEl = await screen.findByRole(
      "heading",
      {
        name: "사용자 목록",
      },
      {
        timeout: 2000, // 기본 타임아웃이 1초기 때문에 2초로 수정
      }
    ); // findByRole은 비동기로 동작하여 요소를 찾음
    // findByRole은 default시간이 1초기 때문에 1초가 넘어가면 찾지 못함
    // screen.debug();
    expect(titleEl).toBeInTheDocument();
  });
  test("ul 이 있다.", () => {
    render(<UserList users={users} />);
    const ulEl = screen.getByRole("list"); // ul태그는 list로 접근
    expect(ulEl).toBeInTheDocument();
  });
  test("li는 3개가 나온다", () => {
    render(<UserList users={users} />);
    const liEls = screen.getAllByRole("listitem"); // li 태그들이 배열에 담김
    expect(liEls).toHaveLength(users.length); // li태그가 3개가 있다
  });
  test("user가 없으면 li는 나오지 않는다", () => {
    render(<UserList users={[]} />);
    // const liEls = screen.getAllByRole("listitem"); // getByRole은 일치하지 않으면 에러를 반환한다
    const liEls = screen.queryAllByRole("listitem"); // queryAllByRole은 일치하지 않으면 빈 배열을 반환한다
    expect(liEls).toHaveLength(0);
    // expect(liEls).not.toBeInTheDocument();
  });
});
