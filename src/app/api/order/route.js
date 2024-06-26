import { connectionStr } from "@/app/lib/db";
import { orderSchema } from "@/app/lib/ordersModel";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let success = false;
  const orderObject = new orderSchema(data);
  const result = await orderObject.save();
  if (result) {
    success = true;
  }
  return NextResponse.json({ success, result });
}

export async function GET(req) {
  const userId = req.nextUrl.searchParams.get("id");
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let result = await orderSchema.find({ user_id: userId });
  if (result) {
    let restoData = await Promise.all(
      result.map(async (item) => {
        let restoInfo = {};
        restoInfo.data = await restaurantSchema.findOne({ _id: item.resto_id });
        restoInfo.amount = item.amount;
        restoInfo.status = item.status;
        return restoInfo;
      })
    );
    result = restoData;
    success = true;
  }
  return NextResponse.json({ result, success });
}
