import { env } from "@/env.mjs";
import { NextResponse } from "next/server";
import twilio from "twilio";
export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { mobile, code } = body;
    if (!mobile) {
      return new NextResponse(null, { status: 400 });
    }

    const client = twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN);
    const res = await client.verify.v2
      .services(env.TWILIO_SERVICE_SID)
      .verificationChecks.create({
        to: mobile,
        code: code,
      });
    const status = res.status;
    if (status === "approved") {
      return NextResponse.json({ status: "approved" });
    } else {
      return NextResponse.json({ status: "pending" });
    }
  } catch (err) {
    return NextResponse.json({ status: "error", err });
  }
};
