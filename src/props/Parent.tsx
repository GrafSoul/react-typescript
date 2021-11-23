import React from "react";

import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  const onClick = () => {
    console.log("Clicked!");
  };

  return (
    <>
      <Child name="GrafSoul" onClick={onClick}>
        Some text
      </Child>

      <ChildAsFC name="GrafSoul" onClick={onClick}>
        Some text
      </ChildAsFC>
    </>
  );
};

export default Parent;
