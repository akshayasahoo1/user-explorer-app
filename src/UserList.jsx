import React from "react";
import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <div style={{ display: "grid", gap: "15px" }}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
