import React from "react";
import GetByQueries from "./components/GetByQueries";
import MyPage from "./components/MyPage";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      {/* <MyPage user={{ name: "kim" }} /> */}
      {/* <GetByQueries /> */}
      <UserList users={["Tom", "Jane", "Mike"]} />
    </div>
  );
}

export default App;
