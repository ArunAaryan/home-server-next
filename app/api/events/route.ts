import { NextResponse } from "next/server";
import { addEvent } from "./action";

export async function GET(request: Request) {
  return NextResponse.json({ message: "Hello from the events API!" });
}

export async function POST(request: Request) {
  // Handle POST requests
  const body = await request.json();
  await addEvent(body.title, body.description);
  return NextResponse.json({ message: "Data received", data: body });
}
