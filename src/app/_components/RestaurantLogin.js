const restaurantLogin = () => {
  return (
    <>
      <h3> Login Component </h3>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Email Id"
          className="input-field "
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Enter Password"
          className="input-field "
        />
      </div>
      <div className="input-container">
        <button className="button">Sign In</button>
      </div>
    </>
  );
};

export default restaurantLogin;
