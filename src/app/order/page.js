"use client";
import { useState } from "react";
import CustomerHeader from "../_components/CustomerHeader";
import Footer from "../_components/Footer";
import { DELIVERY_CHARGES, TAX } from "../lib/constant";

const Cart = () => {
  const [userStorage, setUserStorage] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [cartStorage, setCartStorage] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );

  const [total] = useState(() =>
    cartStorage.length == 1
      ? cartStorage[0].price
      : cartStorage.reduce((a, b) => {
          return a.price + b.price;
        })
  );
  console.log(total);

  const orderNow = async () => {
    let user_id = JSON.parse(localStorage.getItem("user"))._id;
    let cart = JSON.parse(localStorage.getItem("cart"));
    let resto_id = cart[0].resto_id;
    let foodItemIds = cart.map((item) => item._id).toString();
    let deliveryBoy_id = "6655a6fe4b4426d2ed2d94c8";
    let collection = {
      user_id,
      resto_id,
      foodItemIds,
      deliveryBoy_id,
      status: "confirm",
      amount: total + DELIVERY_CHARGES + (total * TAX) / 100,
    };

    let response = await fetch("http://localhost:3000/api/order", {
      method: "POST",
      body: JSON.stringify(collection),
    });
    response = await response.json();
    if (response.success) {
      alert("Order Confirmed");
    } else {
      alert("Order Failed");
    }
    console.log(collection);
  };

  return (
    <div>
      <CustomerHeader />
      <div className="total-wrapper">
        <div className="block-1">
          <h2> User Details</h2>
          <div className="row">
            <span>Name</span>
            <span>{userStorage.name}</span>
          </div>
          <div className="row">
            <span>Address</span>
            <span>{userStorage.address}</span>
          </div>
          <div className="row">
            <span>Mobile Number</span>
            <span>{userStorage.mobile}</span>
          </div>
          <h2> Amount Details </h2>
          <div className="row">
            <span>Tax:</span>
            <span>{(total * TAX) / 100}</span>
          </div>
          <div className="row">
            <span>Delivery Charges :</span>
            <span>{DELIVERY_CHARGES}</span>
          </div>
          <div className="row">
            <span>Total Amount</span>
            <span>{total + DELIVERY_CHARGES + (total * TAX) / 100}</span>
          </div>
          <h2>Payment Method</h2>
          <div className="row">
            <span>Cash On Delivery:</span>
            <span>{total + DELIVERY_CHARGES + (total * TAX) / 100}</span>
          </div>
        </div>
        <div className="block-2">
          <button onClick={orderNow}>Place Order</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
