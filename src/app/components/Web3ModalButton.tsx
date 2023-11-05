"use client";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

type Props = {
  callbackUrl?: string
};

const Web3ModalButton = (props: Props) => {
  const { address, isConnecting, isDisconnected,  } = useAccount();
  const router = useRouter();
  useEffect(() => {
    if (!isConnecting && !isDisconnected && address) {
      // If the user is connected, redirect to a different page
      props.callbackUrl && router.push(props.callbackUrl);
    }
  }, [isConnecting, isDisconnected, address]);

  return (
    <button className="rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500">
      <w3m-button label="wallet connect" />
    </button>
  );
};

export default Web3ModalButton;
