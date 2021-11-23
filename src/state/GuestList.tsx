import React, { useState } from "react";

export const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const addGuest = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />{" "}
      <button onClick={addGuest}>Add Guest</button>
    </div>
  );
};

export default GuestList;
