"use client";
import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";
import UserLogin from "../_components/UserLogin";
import UserSignUp from "../_components/UserSignUp";

const UserAuth = (props) => {
  const [login, setLogin] = useState(true);
  console.log("order flag", props);
  return (
    <div>
      <CustomerHeader />
      <div className="container">
        <h1>{login ? "User Login" : "User SignUp"}</h1>
        {login ? (
          <UserLogin redirect={props.searchParams} />
        ) : (
          <UserSignUp redirect={props.searchParams} />
        )}
        <button className="button-link" onClick={() => setLogin(!login)}>
          {login
            ? "Do not have Account? SignUp"
            : "Already have an account? Login"}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default UserAuth;
