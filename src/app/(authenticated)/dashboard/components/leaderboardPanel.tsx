"use client";
import { useAdhikaarPartyVotes } from "@/components/useAdhikaar";
import { Party } from "@prisma/client";

const PartyInfo = ({ party, i }: { party: Party; i: number }) => {
  const { data: votes } = useAdhikaarPartyVotes(party.id);
  return (
    <div className="flex items-center justify-between rounded-lg p-2 ">
      <span>
        <span className="font-bold text-black/60">{i + 1}. </span>
        <span className="font-bold text-black/60">{party.alias}</span>
      </span>
      <span className="font-bold">{votes?.toString()}</span>
    </div>
  );
};

const LeaderboardPanel = ({ parties }: { parties: Party[] }) => {
  console.log(parties);

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="h-[80px] w-full text-2xl font-bold text-primary-500">
        Live votes
      </div>
      <div className="flex flex-col">
        <div className="flex w-full flex-col gap-2">
          {parties.map((party, i) => (
            <PartyInfo party={party} i={i} key={party.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPanel;
