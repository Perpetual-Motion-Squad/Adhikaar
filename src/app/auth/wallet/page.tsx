"use client";
import Web3ModalButton from "@/app/components/Web3ModalButton";
import React, { useEffect } from "react";
import usePathHook from "../usePathHook";
import { useAccount } from "wagmi";

import { toast } from "react-toastify";
const WalletAuth = () => {
  const { status } = useAccount();
  const updateStep = usePathHook();

  useEffect(() => {
    if (status === "connected") {
      toast.success("Wallet connected");
      updateStep(2);
    }
  }, [status]);

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
              Connect your wallet
            </div>
            <Web3ModalButton />
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

export default WalletAuth;
