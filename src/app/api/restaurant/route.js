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
  console.log(data);
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  const restaurant = new restaurantSchema(data);
  console.log(restaurant);
  const result = await restaurant.save();
  console.log(result);
  return NextResponse.json({ result, success: true });
}
