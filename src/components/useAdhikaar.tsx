import { useContractRead } from "wagmi";
import abi from '../contract/abi'
import { env } from "@/env.mjs";

export default function useAdhikaar() {
  const {data} = useContractRead({
    abi,
    functionName: "getPartyNamesCount",
    address: env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`,
  })
}
