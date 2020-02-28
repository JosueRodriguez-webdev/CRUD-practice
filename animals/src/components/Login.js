import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  // How can we log in? What do we need to do?
  const [userInput, setUserInput] = useState({
    username: "",
    password: ""
  });

  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/login`, userInput)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Welcome to the Safari App!</h1>
      <h2>I can't show you more until you log in. Please build out a login.</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          label="username"
          className="input"
          onChange={handleChange}
          value={userInput.username}
        />

        <label htmlFor="password">password</label>
        <input
          name="password"
          label="password"
          className="input"
          onChange={handleChange}
          value={userInput.password}
        />

        <button className="start" type="submit">
          Start
        </button>
      </form>
    </div>
  );
}
