import { useState } from "react";

const AddFoodItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const handleAddFoodItem = () => {
    console.log(name, price, path, description);
  };

  return (
    <>
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
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Price"
            className="input-field"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Image Path"
            className="input-field"
            value={path}
            onChange={(e) => setPath(e.target.value)}
          ></input>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Description"
            className="input-field"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div className="input-container">
          <button className="button" onClick={handleAddFoodItem}>
            Add Food Item
          </button>
        </div>
      </div>
    </>
  );
};

export default AddFoodItem;
