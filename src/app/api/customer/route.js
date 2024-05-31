import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req) {
  let queryParams = req.nextUrl.searchParams;
  let filter = {};
  if (queryParams.get("location")) {
    let city = queryParams.get("location");
    filter = { city: { $regex: new RegExp(city, "i") } };
  } else if (queryParams.get("restaurant")) {
    let restaurantname = queryParams.get("restaurant");
    filter = { restaurantname: { $regex: new RegExp(restaurantname, "i") } };
  }

  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let result = await restaurantSchema.find(filter);
  return NextResponse.json({ success: true, result });
}
