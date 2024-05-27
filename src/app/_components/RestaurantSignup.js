import { useState } from "react";

const restaurantSignup = () => {
  const [restaurantname, setRestaurantname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSignup = async () => {
    console.log(
      restaurantname,
      phonenumber,
      city,
      address,
      email,
      password,
      repassword
    );

    let result = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({
        restaurantname,
        phonenumber,
        city,
        address,
        email,
        password,
      }),
    });

    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("Restaurant registered successfully");
    }
  };
  return (
    <>
      <h3> SignUp Component </h3>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Restaurant Name"
          className="input-field "
          value={restaurantname}
          onChange={(e) => setRestaurantname(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Phone Number"
          className="input-field "
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter City"
          className="input-field "
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Address"
          className="input-field "
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Email Id"
          className="input-field "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Enter Password"
          className="input-field "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-field "
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
        />
      </div>
      <div className="input-container">
        <button className="button" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </>
  );
};

export default restaurantSignup;
