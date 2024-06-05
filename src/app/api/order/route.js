import { connectionStr } from "@/app/lib/db";
import { orderSchema } from "@/app/lib/ordersModel";
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
