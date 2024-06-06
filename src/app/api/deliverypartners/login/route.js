import { connectionStr } from "@/app/lib/db";
import { deliveryPartnersSchema } from "@/app/lib/deliverypartnersModels";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  let success = false;
  const data = await req.json();
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let result = await deliveryPartnersSchema.findOne({
    mobile: data.mobile,
    password: data.password,
  });
  if (result) {
    success = true;
  }

  return NextResponse.json({ success, result });
}
