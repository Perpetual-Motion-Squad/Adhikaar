import { db } from "@/server/db";
import React from "react";
import PartyInfoPanel from "./components/partyInfoPanel";
import PartyGrid from "./components/partyGrid";
import LeaderboardPanel from "./components/leaderboardPanel";
import DashboardHeader from "./components/dashboardHeader";

const getParties = async () => {
  const res = await db.party.findMany();
  return res;
};

const DashboardPage = async () => {
  const parties = await getParties();

  return (
    <main className="flex">
      <div className="flex min-h-screen w-1/5 min-w-[300px] flex-col border-r border-r-black/20 p-5">
        <LeaderboardPanel parties={parties} />
      </div>

      <div className="h-screen w-full">
        <DashboardHeader />
        <div className="flex w-full justify-between">
          <PartyGrid parties={parties} />
          <div className="h-full w-1/5 min-w-[300px] border-l border-l-black/20">
            <PartyInfoPanel parties={parties} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
