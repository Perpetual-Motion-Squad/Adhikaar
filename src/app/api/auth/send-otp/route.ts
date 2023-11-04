import { env } from "@/env.mjs";
import { NextResponse } from "next/server";
import twilio from "twilio";
export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { mobile } = body;
    if (!mobile) {
      return new NextResponse(null, { status: 400 });
    }

    const client = twilio(env.TWILIO_ACCOUNT_SID, env.TWILIO_AUTH_TOKEN);
    await client.verify.v2
      .services(env.TWILIO_SERVICE_SID)
      .verifications.create({
        to: mobile,
        channel: "sms",
      });
    return NextResponse.json({ message: "OTP sent" });
  } catch (err) {
    return NextResponse.json({ message: "POST ERROR", err }, { status: 500 });
  }
};
