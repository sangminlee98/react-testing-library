import React, { useEffect, useState } from "react";

interface Props {
  users: string[];
}

function UserList({ users }: Props) {
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 1500);
  }, []);
  return (
    <>
      {showTitle && <h1>사용자 목록</h1>}
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
