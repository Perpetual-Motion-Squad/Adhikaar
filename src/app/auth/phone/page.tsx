"use client";
import authContext from "@/context/authContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import usePathHook from "../usePathHook";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const sendOtp = async (phone: string) => {
  const res = await fetch("/api/auth/send-otp", {
    method: "POST",
    body: JSON.stringify({ mobile: "+91" + phone }),
  });
  const data = await res.json();
  return data;
};

const verifyOtp = async (phone: string, otp: string) => {
  const res = await fetch("/api/auth/verify-otp", {
    method: "POST",
    body: JSON.stringify({ mobile: "+91" + phone, code: otp }),
  });
  const data = await res.json();
  return data;
};

const PhoneAuth = () => {
  const [sentOtp, setSentOtp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const [verficationStatus, setVerificationStatus] = useState<
    "pending" | "approved" | "error"
  >("pending");

  const handleSendOtp = async () => {
    setSentOtp(true);
    await sendOtp(phoneNumber);
    toast.success("OTP sent to your phone!");
  };

  const handleVerifyOtp = async () => {
    const res = await verifyOtp(phoneNumber, otp);
    setVerificationStatus(res.status);
  };

  const router = useRouter();
  useEffect(() => {
    if (verficationStatus === "approved") {
      toast.success("Login approved, Welcome!");
      (async () =>
        await sleep(3000).then(() => {
          router.push("/auth/wallet");
        }))();
    } else if (verficationStatus === "error") {
      toast.error("Login failed, please try again!");
      setSentOtp(false);
      setVerificationStatus("pending");
    }
  }, [verficationStatus]);

  return (
    <div className="flex">
      <img src="/images/phone_connect_bg.jpg" className="h-screen" />
      <div className="flex w-full flex-col justify-between">
        <div className="w-full border-b border-b-black/20 px-5 py-2">
          <div className="text-3xl font-bold text-primary-500">Login</div>
          <div className="text-md font-mono">
            Login now to vote, your vote will decide the future of our nation!
          </div>
        </div>
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="mb-28 flex flex-col items-center gap-2">
            <div className="text-3xl font-bold text-primary-500">
              Connect your phone
            </div>
            {sentOtp ? (
              <>
                <input
                  className="w-full rounded-lg bg-zinc-300/30 p-2 font-mono text-sm"
                  placeholder="enter OTP"
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button
                  className="rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500"
                  onClick={handleVerifyOtp}
                >
                  Verify OTP
                </button>
              </>
            ) : (
              <>
                <div className="relative w-full text-center font-mono text-sm">
                  <div className="absolute  top-1/2 -translate-y-1/2 border-r border-r-black/20 px-2">
                    +91
                  </div>
                  <input
                    className="w-full rounded-lg bg-zinc-300/30 p-2 pl-12"
                    placeholder="enter your phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <button
                  className="rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500"
                  onClick={handleSendOtp}
                >
                  Send OTP
                </button>
              </>
            )}
          </div>
          <div className="absolute bottom-0 right-10 text-[300px] leading-[300px] opacity-10">
            1.
          </div>
        </div>
        <div className="w-full border-t border-t-black/20 px-5 py-2 font-mono text-sm">
          By continuing, you agree to our User Agreement and Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default PhoneAuth;
