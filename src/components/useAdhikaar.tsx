"use client";

import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import abi from "../contract/abi";
import { env } from "@/env.mjs";

export function useAdhikaarParties() {
  return useContractRead({
    abi,
    functionName: "getPartyNamesCount",
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
  });
}

export function useAdhikaarPartyVotes(partyId: string) {
  return useContractRead({
    abi,
    functionName: "getPartyVotes",
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    args: [stringToBytes32(partyId)],
  });
}

export function useAdhikaarVote(args: { partyId: string }) {
  return useContractWrite({
    abi,
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    functionName: "vote",
    args: [stringToBytes32(args.partyId)],
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

export function stringToBytes32(input: string) {
  // Ensure the input string is not longer than 32 characters
  if (input.length > 32) {
    throw new Error("String length must be 32 characters or less");
  }

  // Pad the input string with null bytes to make it 32 bytes long
  const paddedString = input.padEnd(32, "\0");

  // Convert the padded string to a hexadecimal representation
  const hexString = "0x" + Buffer.from(paddedString).toString("hex");

  return hexString as `0x${string}`;
}

export function useAdhikaarInitialize(args: { partyIds: string[] }) {
  const { config } = usePrepareContractWrite({
    abi,
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
    functionName: "initializeElection",
    args: [args.partyIds.map(stringToBytes32)],
  });

  return useContractWrite(config);
}

