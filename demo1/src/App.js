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

  var count1 = 0;

  return (
    <div>
      <Header title="Lek CodeMobiles" />
      <button
        onClick={(e) => {
          alert("1234");
        }}
      >
        Click me
      </button>
    </div>
  );
}
