import { getProfile } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getProfile();
    return NextResponse.json({
      error: false,
      message: "Fetch data success",
      data,
    })
  } catch (error) {
    return NextResponse.json({
      error: true,
      message: error.message,
    })
  }
}