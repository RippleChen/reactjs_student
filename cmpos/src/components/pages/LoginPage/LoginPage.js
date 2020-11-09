import React from "react";

const LoginPage = () => {
  const [account, setAccount] = React.useState({
    username: "",
    password: "",
  });

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          onChange={(e) => {
            setAccount({
              ...account,
              username: e.target.value,
            });
          }}
          type="text"
          placeholder="Username"
        />
        <br />

        <input type="text" placeholder="Password" />
        <br />
      </form>

      <span>{JSON.stringify(account)}</span>
    </div>
  );
};

export default LoginPage;
