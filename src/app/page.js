"use client";
import Image from "next/image";
import styles from "./page.module.css";
import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    loadLocations();
  }, []);

  const loadLocations = async () => {
    let response = await fetch("http://localhost:3000/api/customer/locations");
    response = await response.json();
    if (response.success) {
      setLocations(response.result);
    }
  };

  const handleListItem = (item) => {
    setSelectedLocation(item);
    setShowLocation(false);
  };

  return (
    <main>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1> Food Delivery App</h1>
        <div className="input-wrapper">
          <input
            type="text"
            value={selectedLocation}
            className="select-input"
            placeholder="Select Place"
            onClick={() => setShowLocation(true)}
          />
          <ul className="location-list">
            {showLocation &&
              locations.map((item) => (
                <li onClick={() => handleListItem(item)}>{item}</li>
              ))}
          </ul>
          <input
            type="text"
            className="select-search"
            placeholder="Enter Food or Restaurant"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
