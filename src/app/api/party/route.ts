import { db } from "@/server/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const party = await db.party.findMany();
    return NextResponse.json(party);
  } catch (err) {
    return NextResponse.json({ message: "GET ERROR", err }, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { name, slogan, logo, members } = body;
    if (!slogan || !name || !logo) {
      return NextResponse.json(
        { message: "PROVIDE VALID PARAM" },
        { status: 400 },
      );
    }
    const party = await db.party.create({
      data: {
        name: String(name),
        logo: logo,
        slogan: String(slogan),
        members: members,
      },
    });
    return NextResponse.json(party);
  } catch (err) {
    return NextResponse.json({ message: "POST ERROR", err }, { status: 500 });
  }
};
