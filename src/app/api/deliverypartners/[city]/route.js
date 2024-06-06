import { connectionStr } from "@/app/lib/db";
import { deliveryPartnersSchema } from "@/app/lib/deliverypartnersModels";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  let city = res.params.city;
  let success = false;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let filter = { city: { $regex: new RegExp(city, "i") } };
  let result = await deliveryPartnersSchema.find(filter);
  return NextResponse.json({ result });
}
