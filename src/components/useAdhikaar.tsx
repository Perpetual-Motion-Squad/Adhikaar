'use client';

import { useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";
import abi from '../contract/abi'
import { env } from "@/env.mjs";

export function useAdhikaarParties() {

  return useContractRead({
    abi,
    functionName: "getPartyNamesCount",
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${ string }`,
  })
}

export function useAdhikaar() {
  const { config } = usePrepareContractWrite({
    abi,
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${ string }`,
    functionName: 'initializeElection',
    // args: [],
  })

  const { write } = useContractWrite(config)
  // write()
}