"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DeliveryHeader = (props) => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img style={{ width: 100 }} src="/images/restlogo.png"></img>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default DeliveryHeader;
