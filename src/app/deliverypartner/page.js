"use client";
import { useEffect, useState } from "react";
import DeliveryHeader from "../_components/DeliveryHeader";
import { useRouter } from "next/navigation";

const Page = () => {
  const [loginphone, setLoginPhone] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const router = useRouter();

  useEffect(() => {
    const delivery = JSON.parse(localStorage.getItem("delivery"));
    if (delivery) {
      router.push("deliverydashboard");
    }
  }, []);

  const handleSignUp = async () => {
    let response = await fetch(
      "http://localhost:3000/api/deliverypartners/signup",
      {
        method: "post",
        body: JSON.stringify({ name, mobile, password, city, address }),
      }
    );
    response = await response.json();
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("delivery", JSON.stringify(result));
      router.push("deliverydashboard");
    } else {
      alert("Failed");
    }
  };

  const loginHandle = async () => {
    let response = await fetch(
      "http://localhost:3000/api/deliverypartners/login",
      {
        method: "post",
        body: JSON.stringify({ mobile: loginphone, password: loginpassword }),
      }
    );
    response = await response.json();
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("delivery", JSON.stringify(result));
      router.push("deliverydashboard");
    } else {
      alert("Failed to Login Please try again with valid fields");
    }
  };

  return (
    <div>
      <DeliveryHeader />
      <h1> Delivery Partner</h1>
      <div className="auth-container">
        <div className="login-wrapper">
          <h3>Login</h3>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter PhoneNumber"
              value={loginphone}
              className="input-field"
              onChange={(e) => setLoginPhone(e.target.value)}
            ></input>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              placeholder="Enter Password"
              className="input-field"
              value={loginpassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            ></input>
          </div>
          <div className="input-wrapper">
            <button onClick={loginHandle} className="button">
              Login
            </button>
          </div>
        </div>
        <div className="signup-wrapper">
          <h3>SignUp</h3>
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
              value={mobile}
              placeholder="Enter Phone Number"
              className="input-field"
              onChange={(e) => setMobile(e.target.value)}
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
            <button onClick={handleSignUp} className="button">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
