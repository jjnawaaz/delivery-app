"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditFoodItem = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    handleLoadFoodItem();
  }, []);

  const handleLoadFoodItem = async () => {
    console.log(props);
    let response = await fetch(
      "http://localhost:3000/api/restaurant/foods/edit/" + props.params.id
    );
    response = await response.json();
    if (response.success) {
      setName(response.result.name);
      setPrice(response.result.price);
      setPath(response.result.img_path);
      setDescription(response.result.description);
    }
  };

  const handleEditFoodItem = async () => {
    console.log(name, price, path, description);
    if (!name || !price || !path || !description) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    let response = await fetch(
      "http://localhost:3000/api/restaurant/foods/edit/" + props.params.id,
      {
        method: "PUT",
        body: JSON.stringify({ name, price, img_path: path, description }),
      }
    );
    response = await response.json();
    if (response.success) {
      router.push("../dashboard");
    } else {
      alert("Data is not updated");
    }
  };

  return (
    <div className="container">
      <h1> Update Food Item </h1>
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
        <button className="button" onClick={handleEditFoodItem}>
          Update Food Item
        </button>
      </div>
      <div className="input-container">
        <button className="button" onClick={() => router.push("../dashboard")}>
          Back to Food Item List
        </button>
      </div>
    </div>
  );
};

export default EditFoodItem;
