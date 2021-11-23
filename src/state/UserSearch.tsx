import React, { useState } from "react";

const users = [
  { name: "Sarah", age: 22 },
  { name: "Alex", age: 20 },
  { name: "Micheal", age: 22 },
];

export const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<undefined | { name: string; age: number }>();

  const onFindUser = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);

    console.log(foundUser);
  };

  return (
    <div>
      <h3>UserSearch</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <button onClick={onFindUser}>Find User</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default UserSearch;
