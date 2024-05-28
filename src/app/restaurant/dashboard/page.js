"use client";

import RestaurantHeader from "@/app/_components/RestaurantHeader";
import "./../style.css";
import AddFoodItem from "@/app/_components/AddFoodIem";
import { useState } from "react";
const dashboard = () => {
  const [addItem, setAddItem] = useState(false);
  return (
    <div>
      <RestaurantHeader />
      <button onClick={() => setAddItem(true)}> Add Food Item </button>
      <button onClick={() => setAddItem(false)}>Dashboard</button>
      {addItem ? <AddFoodItem /> : <h1>Welcome to dashboard</h1>}
    </div>
  );
};

export default dashboard;
