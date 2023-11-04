"use client";
import React, { useState } from "react";

const PhoneAuth = () => {
  const [sentOtp, setSentOtp] = useState(false);
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
                  className="w-full rounded-lg bg-zinc-300/30 p-2"
                  placeholder="enter OTP"
                />
                <button
                  className="rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500"
                  onClick={() => setSentOtp(true)}
                >
                  Verify OTP
                </button>
              </>
            ) : (
              <>
                <input
                  className="w-full rounded-lg bg-zinc-300/30 p-2"
                  placeholder="enter your phone number"
                />
                <button
                  className="rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500"
                  onClick={() => setSentOtp(true)}
                >
                  Send OTP
                </button>
              </>
            )}
          </div>
          <div className="absolute bottom-0 right-10 text-[300px] leading-[300px] opacity-10">
            2.
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
