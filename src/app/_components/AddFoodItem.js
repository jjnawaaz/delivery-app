import { useState } from "react";

const AddFoodItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  const handleAddFoodItem = async () => {
    console.log(name, price, path, description);
    if (!name || !price || !path || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    const restaurentData = JSON.parse(localStorage.getItem("restaurentUser"));
    let resto_id;
    if (restaurentData) {
      resto_id = restaurentData._id;
    }

    let response = await fetch("http://localhost:3000/api/restaurant/foods", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        img_path: path,
        description,
        resto_id,
      }),
    });
    response = await response.json();
    if (response.success) {
      alert("Successfully added item");
    } else {
      alert("Failed to add Item");
    }
  };

  return (
    <div className="container">
      <h1> Add Food Item </h1>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter Food Item"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        {error && !name && (
          <span className="input-error">Please Enter Item Name</span>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Price"
          className="input-field"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        {error && !price && (
          <span className="input-error">Please Enter Price</span>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Image Path"
          className="input-field"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        ></input>
        {error && !path && (
          <span className="input-error">Please Enter Image Path</span>
        )}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Description"
          className="input-field"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        {error && !description && (
          <span className="input-error">Please Enter Description</span>
        )}
      </div>
      <div className="input-container">
        <button className="button" onClick={handleAddFoodItem}>
          Add Food Item
        </button>
      </div>
    </div>
  );
};

export default AddFoodItem;
