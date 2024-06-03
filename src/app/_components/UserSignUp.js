"use client";
import { useState } from "react";

const UserSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSignUp = () => {
    console.log(name, password, cpassword, city, address, mobile);
  };
  return (
    <div>
      <div className="input-wrapper">
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          className="input-field"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={email}
          placeholder="Enter Email"
          className="input-field"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={password}
          placeholder="Enter password"
          className="input-field"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={cpassword}
          placeholder="Confirm Password"
          className="input-field"
          onChange={(e) => setCpassword(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={city}
          placeholder="Enter City"
          className="input-field"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={address}
          placeholder="Enter Address"
          className="input-field"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={mobile}
          placeholder="Enter Phone Number"
          className="input-field"
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <button onClick={handleSignUp} className="button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default UserSignUp;
