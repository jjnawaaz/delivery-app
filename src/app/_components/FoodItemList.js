import { useEffect, useState } from "react";

const FoodItemList = () => {
  const [foodItems, setFoodItems] = useState();
  useEffect(() => {
    LoadFoodItems();
  }, []);

  const LoadFoodItems = async () => {
    const resaurentData = JSON.parse(localStorage.getItem("restaurentUser"));
    const resto_id = resaurentData._id;
    let response = await fetch(
      "http://localhost:3000/api/restaurant/foods/" + resto_id
    );
    response = await response.json();
    if (response.success) {
      setFoodItems(response.result);
    } else {
      alert("Food Item List not Loading");
    }
  };

  return (
    <div>
      <h1>Food Item List</h1>
      <table>
        <thead>
          <tr>
            <td>S.No</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Operations</td>
          </tr>
        </thead>
        <tbody>
          {foodItems &&
            foodItems.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <img src={item.img_path}></img>
                </td>
                <td>
                  <button>Delete</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodItemList;
