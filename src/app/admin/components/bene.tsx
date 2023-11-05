'use client';

import { useAdhikaarInitialize, useAdhikaarParties } from "@/components/useAdhikaar";
import { Party } from "@prisma/client";
import { use } from "react";



const Bene = ({ parties }: { parties: Party[] }) => {
  const { data } = useAdhikaarParties();

  const { write, isLoading, isSuccess } = useAdhikaarInitialize({ partyIds: parties.map(party => party.id) });
  console.log(data?.toString());

  return (
    <div>
      <h1>Admin</h1>
      <div>TODO: Add admin page</div>
      {data !== BigInt(0) && data?.toString()}
      <button disabled={!write} onClick={() => write?.()}>Initialize</button>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <div>Success!</div>}
    </div>
  )
}
export default Bene