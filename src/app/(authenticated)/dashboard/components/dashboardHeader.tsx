"use client";
import Web3ModalButton from "@/app/components/Web3ModalButton";
import { useAdhikaarCanVote } from "@/components/useAdhikaar";
import React from "react";

const DashboardHeader = () => {
  const { data, isError } = useAdhikaarCanVote();
  console.log(data, isError);
  return (
    <div className="flex items-center justify-between border-b border-b-black/20 p-5">
      <div className="text-lg font-medium">Welcome, Dhruv Bakshi</div>
      <div className="text-lg font-medium">
        {isError && "Thanks for voting!"}
      </div>
      <Web3ModalButton />
    </div>
  );
};

export default DashboardHeader;
