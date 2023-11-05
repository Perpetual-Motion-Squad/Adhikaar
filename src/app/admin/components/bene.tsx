"use client";

import {
  useAdhikaarEndElection,
  useAdhikaarInitialize,
  useAdhikaarParties,
} from "@/components/useAdhikaar";
import { stringToBytes32 } from "@/contract/utils";
import { Party } from "@prisma/client";

const Bene = ({ parties }: { parties: Party[] }) => {
  const { data } = useAdhikaarParties();

  const { write, isLoading, isSuccess } = useAdhikaarInitialize();

  console.log(data?.toString());

  const { write: writeEnd, isSuccess: isSuccessEnd } = useAdhikaarEndElection();

  return (
    <div className="flex flex-col items-center gap-5">
      <h1>Admin</h1>
      {data !== BigInt(0) && data?.toString()}
      <button
        className="curosr-pointer w-fit rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500"
        disabled={!write}
        onClick={() =>
          write?.({
            args: [parties.map((party) => stringToBytes32(party.id))],
          })
        }
      >
        Initialize
      </button>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <div>Success!</div>}

      <button
        className="curosr-pointer w-fit rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500"
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
