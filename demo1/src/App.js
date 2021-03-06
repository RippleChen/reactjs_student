import React, { useState } from "react";

export default function App() {
  const Header = (props) => {
    return (
      <div>
        {/* JSX */}
        <h1>{props.title}</h1>
      </div>
    );
  };

  // Destructuring
  const CountMe = ({ setCount, count, btnTitle, resultMessage }) => {
    return (
      <>
        <button
          onClick={(e) => {
            setCount(count + 1);
          }}
        >
          {btnTitle}
        </button>
        <span>
          {resultMessage} {count}
        </span>
        <br />
      </>
    );
  };

  var count1 = 0;
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = useState(1);
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
        Count1
      </button>
      <span>Count1 = {count1}</span>
      <br />

      <button
        onClick={(e) => {
          // alert("1234");
          // count2++;
          setCount2(count2 + 1);
          console.log(count2);
        }}
      >
        Count2
      </button>
      <span>Count2 = {count2}</span>
      <br />

      <button
        onClick={(e) => {
          // alert("1234");
          // count2++;
          setCount3(count3 + 1);
          console.log(count3);
        }}
      >
        Count3
      </button>
      <span>Count3 = {count3}</span>
      <br />

      <CountMe
        btnTitle="ClickMe"
        resultMessage="Count3 is : "
        setCount={setCount3}
        count={count3}
      />
    </div>
  );
}
