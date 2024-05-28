import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const data = await restaurantSchema.find();
  console.log(data);
  return NextResponse.json({ result: data });
}

export async function POST(req) {
  let data = await req.json();
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let result;
  let success = false;
  if (data.login) {
    result = await restaurantSchema.findOne({
      email: data.email,
      password: data.password,
    });
    if (result) {
      success = true;
      console.log("data fetched succesfully");
    }
  } else {
    const restaurant = new restaurantSchema(data);
    result = await restaurant.save();
    if (result) {
      success = true;
    }
  }

  return NextResponse.json({ result, success });
}
