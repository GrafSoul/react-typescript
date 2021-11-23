import React from "react";

interface ChildProps {
  name: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Child = ({ name, onClick, children }: ChildProps) => {
  return (
    <div>
      <h1>Hi! - {name}!</h1>
      <button onClick={onClick}>Click Me</button>
      <br />
      {children}
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  name,
  onClick,
  children,
}) => {
  return (
    <div>
      <h1>Hi! - {name}!</h1>
      <button onClick={onClick}>Click Me</button>
      <br />
      {children}
    </div>
  );
};
