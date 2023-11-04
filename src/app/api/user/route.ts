import { db } from "@/server/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { voterId, walletId, name } = body;

    if (!voterId || !walletId || !name) {
      return NextResponse.json(
        { message: "PROVIDE VALID PARAM" },
        { status: 400 },
      );
    }

    const user = await db.user.create({
      data: {
        voterId: String(voterId),
        walletId: String(walletId),
        name: String(name),
      },
    });
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ message: "POST ERROR", err }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const users: unknown = await db.user.findMany();
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ message: "GET ERROR", err }, { status: 500 });
  }
};

