import React from "react";
import { Formik } from "formik";

const showForm = ({ handleChange, values, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={values.username}
        name="username"
        id="username"
        type="text"
        placeholder="Username"
      />
      <br />

      <input
        onChange={handleChange}
        value={values.password}
        name="password"
        id="password"
        type="text"
        placeholder="Password"
      />
      <br />

      <input
        onChange={handleChange}
        value={values.age}
        name="age"
        id="age"
        type="number"
        placeholder="Age"
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: "lek", password: "555" }}
        onSubmit={(values, setSubmitting) => {
          alert(JSON.stringify(values));
        }}
      >
        {(props) => showForm(props)}
      </Formik>
    </div>
  );
};

export default LoginPage;
