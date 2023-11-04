import { db } from "@/server/db";
import React from "react";
import PartyInfoPanel from "./components/partyInfoPanel";
import PartyGrid from "./components/partyGrid";

const getParties = async () => {
  const res = await db.party.findMany();
  return res;
};

const DashboardPage = async () => {
  const parties = await getParties();

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="w-full border-b border-b-black/20 p-5">
        client logic here
      </div>
      <div className="flex w-full justify-between">
        <PartyGrid parties={parties} />
        <div className="h-full w-1/5 min-w-[300px] border-l border-l-black/20">
          <PartyInfoPanel parties={parties} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
