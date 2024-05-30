"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const RestaurantHeader = () => {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    let data = localStorage.getItem("restaurentUser");
    console.log(data);
    if (!data && pathName == "/restaurant/dashboard") {
      router.push("/restaurant");
      console.log("Inside First if in header");
    } else if (data && pathName == "/restaurant") {
      router.push("/restaurant/dashboard");
      console.log("Hitting 2nd if");
    } else {
      setDetails(JSON.parse(data));
      console.log("Inside 3rd if");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("restaurentUser");
    router.push("/restaurant");
  };

  return (
    <div className="header-wrapper">
      <div>
        <img style={{ width: 100 }} src="/images/restlogo.png" />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {details && details.restaurantname ? (
          <li>
            <button onClick={logout}>LogOut</button>
            <Link href="/">Profile</Link>
          </li>
        ) : (
          <li>
            <Link href="/">Login/SignUp</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantHeader;
