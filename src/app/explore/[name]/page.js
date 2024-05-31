"use client";
import CustomerHeader from "@/app/_components/CustomerHeader";
import Footer from "@/app/_components/Footer";
import { useEffect, useState } from "react";

const Page = (props) => {
  const name = props.params.name;
  const [restaurantdetails, setRestaurantDetails] = useState();
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    loadRestaurantDetails();
  }, []);

  const loadRestaurantDetails = async () => {
    let id = props.searchParams.id;
    let response = await fetch("http://localhost:3000/api/customer/" + id);
    response = await response.json();
    if (response.success) {
      setRestaurantDetails(response.details);
      setFoodItems(response.foodItems);
    }
  };

  return (
    <div>
      <CustomerHeader />
      <div className="restaurant-page-banner">
        <h1>{decodeURI(name)}</h1>
      </div>
      <div className="detail-wrapper">
        <h4>Contact:{restaurantdetails?.phonenumber}</h4>
        <h4>City:{restaurantdetails?.city}</h4>
        <h4>Address:{restaurantdetails?.address}</h4>
        <h4>Email:{restaurantdetails?.email}</h4>
      </div>
      <div className="food-item-wrapper">
        {foodItems.length > 0 ? (
          foodItems.map((item) => (
            <div className="list-item">
              <img style={{ width: 100 }} src={item.img_path}></img>

              <div>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div className="description">{item.description}</div>
                <button>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <h1>No Food Item Added For Now</h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
