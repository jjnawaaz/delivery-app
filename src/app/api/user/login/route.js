import { connectionStr } from "@/app/lib/db";
import { userSchema } from "@/app/lib/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  let success = false;
  const data = await req.json();
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let result = await userSchema.findOne({
    email: data.email,
    password: data.password,
  });
  if (result) {
    success = true;
  }

  return NextResponse.json({ success, result });
}
