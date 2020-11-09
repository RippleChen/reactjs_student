import React from "react";
import { Formik } from "formik";

const showForm = () => {
  return (
    <form>
      <input name="username" id="username" type="text" placeholder="Username" />
      <br />

      <input name="password" id="password" type="text" placeholder="Password" />
      <br />
    </form>
  );
};

const LoginPage = () => {
  const [account, setAccount] = React.useState({
    username: "",
    password: "",
  });

  return (
    <div>
      <h1>Login</h1>
      {showForm()}
      <span>{JSON.stringify(account)}</span>
    </div>
  );
};

export default LoginPage;
