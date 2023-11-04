import { NextResponse } from "next/server";
import { db } from "@/server/db";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { message: "PROVIDE VALID ID" },
        { status: 400 },
      );
    }

    const user = await db.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "USER NOT FOUND" }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ message: "GET ERROR", err }, { status: 500 });
  }
};

