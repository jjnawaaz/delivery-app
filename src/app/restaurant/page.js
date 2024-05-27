"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignup from "../_components/RestaurantSignup";
import RestaurantHeader from "../_components/RestaurantHeader";
import "./style.css";
import Footer from "../_components/Footer";

const page = () => {
  const [login, setlogin] = useState(true);

  return (
    <>
      <div className="container">
        <RestaurantHeader />
        <h1>Hello Welcome to restaurant page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignup />}
        <div>
          <button className="button-link" onClick={() => setlogin(!login)}>
            {login ? "SignUp" : "Already Have an Account? Login"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
