"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const restaurantLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
    if (!email || !password) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({ email, password, login: true }),
    });
    response = await response.json();
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurentUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <>
      <h3> Login Component </h3>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Email Id"
          className="input-field "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && !email && (
          <span className="input-error">Please Enter Email</span>
        )}
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Enter Password"
          className="input-field "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && !password && (
          <span className="input-error">Please Enter Password</span>
        )}
      </div>
      <div className="input-container">
        <button className="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </>
  );
};

export default restaurantLogin;
