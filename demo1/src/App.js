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
          // alert("1234");
          count1++;
          console.log(count1);
        }}
      >
        Click me
      </button>

      <span>Count1 = {count1}</span>
    </div>
  );
}
