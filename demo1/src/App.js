import React from "react";

export default function App() {
  const Header = (props) => {
    return (
      <div>
        {/* JSX */}
        <h1>{props.title}</h1>
      </div>
    );
  };

  return (
    <div>
      <Header title="Lek CodeMobiles" />
    </div>
  );
}
