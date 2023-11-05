"use client";
import { Party } from "@prisma/client";
import { PieChart } from "react-minimal-pie-chart";

const LeaderboardPanel = ({ parties }: { parties: Party[] }) => {
  console.log(parties);
  const sortedPartyData = parties.map((p, key) => ({
    id: p.id,
    name: p.alias,
    votes: key,
  }));

  return (
    <div className="flex h-screen w-full flex-col">
      <div className="h-[80px] w-full text-2xl font-bold text-primary-500">
        Leaderboard
      </div>
      <div className="flex flex-col">
        <div className="flex w-full flex-col gap-2">
          {sortedPartyData.map((party, i) => {
            return (
              <div
                key={i}
                className={`${
                  i === 0 && "bg-secondary shadow"
                } flex w-full justify-between rounded-lg p-2 text-xl`}
              >
                <span>
                  <span className="font-bold text-black/60">{i + 1}. </span>
                  <span className="font-bold text-black/60">{party.name}</span>
                </span>
                <span className="font-bold">{party.votes}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPanel;
