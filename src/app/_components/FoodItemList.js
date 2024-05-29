import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FoodItemList = () => {
  const [foodItems, setFoodItems] = useState();
  const router = useRouter();
  useEffect(() => {
    LoadFoodItems();
  }, []);

  const LoadFoodItems = async () => {
    const restaurentData = JSON.parse(localStorage.getItem("restaurentUser"));
    const resto_id = restaurentData._id;
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

  const deleteFoodItem = async (id) => {
    let response = await fetch(
      "http://localhost:3000/api/restaurant/foods/" + id,
      {
        method: "delete",
      }
    );

    response = await response.json();
    if (response.success) {
      LoadFoodItems();
    } else {
      alert("Food Item Not Deleted");
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
                  <button onClick={() => deleteFoodItem(item._id)}>
                    Delete
                  </button>
                  <button onClick={() => router.push("dashboard/" + item._id)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodItemList;
