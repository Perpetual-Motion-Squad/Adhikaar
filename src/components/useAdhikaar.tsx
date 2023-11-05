"use client";

import {
  useContractRead,
  useContractWrite,
} from "wagmi";
import abi from "../contract/abi";
import { env } from "@/env.mjs";
import { stringToBytes32 } from "@/contract/utils";

export function useAdhikaarParties() {
  return useContractRead({
    abi,
    functionName: "getPartyNamesCount",
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
  });
}

export function useAdhikaarVote() {
  return useContractWrite({
    abi,
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    functionName: "vote",
  });
}

export function useAdhikaarRegisterVoter() {
  return useContractWrite({
    abi,
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    functionName: "registerVoter",
  });
}

export function useAdhikaarCanVote() {
  return useContractRead({
    abi,
    functionName: "canVote",
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
  });
}

export function useAdhikaarInitialize() {
  return useContractWrite({
    abi,
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    functionName: "initializeElection",
  });
}

export function useAdhikaarEndElection() {
  return useContractWrite({
    abi,
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    functionName: "endElection",
  });
}

export function useAdhikaarPartyVotes(id: string) {
  return useContractRead({
    abi,
    functionName: "getPartyVotes",
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    args: [stringToBytes32(id)],
  });
}
