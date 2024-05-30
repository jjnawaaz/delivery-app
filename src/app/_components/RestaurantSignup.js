import { useRouter } from "next/navigation";
import { useState } from "react";

const restaurantSignup = () => {
  const [restaurantname, setRestaurantname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState(false);
  const [passworderror, setPassworderror] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    if (password !== repassword) {
      setPassworderror(true);
      return false;
    } else {
      setPassworderror(false);
    }

    if (
      !restaurantname ||
      !phonenumber ||
      !city ||
      !address ||
      !email ||
      !password ||
      !repassword
    ) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    console.log(
      restaurantname,
      phonenumber,
      city,
      address,
      email,
      password,
      repassword
    );

    let response = await fetch("http://localhost:3000/api/restaurant", {
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

    response = await response.json();
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurentUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
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
        {error && !restaurantname && (
          <span className="input-error">Please enter all fields</span>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Phone Number"
          className="input-field "
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        {error && !phonenumber && (
          <span className="input-error">Please enter all fields</span>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter City"
          className="input-field "
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {error && !city && (
          <span className="input-error">Please enter all fields</span>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Address"
          className="input-field "
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {error && !address && (
          <span className="input-error">Please enter all fields</span>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Email Id"
          className="input-field "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && !email && (
          <span className="input-error">Please enter all fields</span>
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
        {passworderror && (
          <span className="input-error">
            Password and Confirm password not matched
          </span>
        )}
        {error && !password && (
          <span className="input-error">Please enter all fields</span>
        )}
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Confirm Password"
          className="input-field "
          value={repassword}
          onChange={(e) => setRepassword(e.target.value)}
        />
        {passworderror && (
          <span className="input-error">
            Password and Confirm password not matched
          </span>
        )}
        {error && !repassword && (
          <span className="input-error">Please enter all fields</span>
        )}
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
