"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginHandle = async () => {
    let response = await fetch("http://localhost:3000/api/user/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
    });
    response = await response.json();
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("user", JSON.stringify(result));
      if (props.redirect?.order) {
        router.push("/order");
      } else {
        router.push("/");
      }
    } else {
      alert("Failed to Login Please try again with valid fields");
    }
  };
  return (
    <div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          className="input-field"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Enter Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="input-wrapper">
        <button onClick={loginHandle} className="button">
          Login
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
