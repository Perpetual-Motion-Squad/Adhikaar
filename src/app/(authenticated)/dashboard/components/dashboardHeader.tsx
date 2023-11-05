"use client";
import Web3ModalButton from "@/app/components/Web3ModalButton";
import { useAdhikaarCanVote } from "@/components/useAdhikaar";
import authContext from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const DashboardHeader = () => {
  const { authStep } = useContext(authContext);
  const router = useRouter();
  const [hasVoted, setHasVoted] = useState(false);
  useEffect(() => {
    const temp = localStorage.getItem("hasVoted");
    if (temp) setHasVoted(true);
    else setHasVoted(false);
  }, []);
  useEffect(() => {
    if (authStep !== 3) {
      router.push("/auth/register");
    }
  }, [authStep]);
  return (
    <div className="flex items-center justify-between border-b border-b-black/20 p-5">
      <div className="text-lg font-medium">Welcome, Dhruv Bakshi</div>
      <div className="text-lg font-medium">
        {hasVoted && "Thanks for voting!"}
      </div>
      <Web3ModalButton />
    </div>
  );
};

export default DashboardHeader;
