"use client";

import {
  useAdhikaarEndElection,
  useAdhikaarInitialize,
  useAdhikaarParties,
} from "@/components/useAdhikaar";
import { Party } from "@prisma/client";

const Bene = ({ parties }: { parties: Party[] }) => {
  const { data } = useAdhikaarParties();

  const { write, isLoading, isSuccess } = useAdhikaarInitialize({
    partyIds: parties.map((party) => party.id),
  });
  console.log(data?.toString());

  const { write: writeEnd, isSuccess: isSuccessEnd } = useAdhikaarEndElection();

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1>Admin</h1>
      {data !== BigInt(0) && data?.toString()}
      <button
        className="curosr-pointer rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500 w-fit"
        disabled={!write}
        onClick={() => write?.()}
      >
        Initialize
      </button>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <div>Success!</div>}

      <button
        className="curosr-pointer rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500 w-fit"
        disabled={!writeEnd}
        onClick={() => writeEnd?.()}
      >
        End Election
      </button>
      {isSuccessEnd && <div>Success End!</div>}
    </div>
  );
};
export default Bene;

