import React from "react";
import ReactDOM from "react-dom";

import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {
  return (
    <div>
      <h1>Hi There!</h1>
      <Parent />

      <hr />

      <GuestList />
      <hr />

      <UserSearch />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
