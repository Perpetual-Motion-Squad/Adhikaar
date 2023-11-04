import { db } from "@/server/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id === null) {
      return NextResponse.json({ message: "ID NOT FOUND" }, { status: 400 });
    }
    const party = await db.party.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(party);
  } catch (err) {
    return NextResponse.json({ message: "GET ERROR", err }, { status: 500 });
  }
};
