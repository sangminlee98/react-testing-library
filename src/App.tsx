import React from "react";
import MyPage from "./components/MyPage";

function App() {
  return (
    <div>
      <MyPage user={{ name: "kim" }} />
    </div>
  );
}

export default App;
