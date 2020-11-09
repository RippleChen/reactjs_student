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

  var count = 0;
  return (
    <div>
      <Header title="Lek CodeMobiles" />
      <button
        onClick={(e) => {
          count = count + 1;
          console.log(count);
        }}
      >
        Click me
      </button>
      <div>
        <span>#spy variable{count}</span>
      </div>
    </div>
  );
}
