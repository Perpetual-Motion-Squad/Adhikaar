"use client";

import {
  useAdhikaarCanVote,
  useAdhikaarRegisterVoter,
} from "@/components/useAdhikaar";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import usePathHook from "../usePathHook";
import { toast } from "react-toastify";
// import usePathHook from "../usePathHook";

const Register = () => {
  const { write, isSuccess, isError } = useAdhikaarRegisterVoter();
  const {
    data,
    isSuccess: isAllowed,
    isError: useCanVoteError,
    isLoading,
  } = useAdhikaarCanVote();

  const router = useRouter();
  const updateStep = usePathHook();

  useEffect(() => {
    if (isSuccess || data) {
      // If the user is connected, redirect to a different page
      updateStep(3);
      router.push("/dashboard");
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (useCanVoteError || isError) {
      toast.error("You are not allowed to vote!");
    }
  }, [useCanVoteError, isError]);

  return (
    <div className="flex">
      <img src="/images/wallet_connect_bg.jpg" className="h-screen" />
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
              Register yourself as a Voter
            </div>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <button
                className="rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500"
                disabled={!write && data}
                onClick={() => write?.()}
              >
                Register
              </button>
            )}
          </div>
          <div className="absolute bottom-0 right-10 text-[300px] leading-[300px] opacity-10">
            3.
          </div>
        </div>
        <div className="w-full border-t border-t-black/20 px-5 py-2 font-mono text-sm">
          By continuing, you agree to our User Agreement and Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default Register;
