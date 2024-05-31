import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  let id = res.params.id;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let details = await restaurantSchema.findOne({ _id: id });
  let foodItems = await foodSchema.find({ resto_id: id });
  return NextResponse.json({ details, foodItems, success: true });
}
