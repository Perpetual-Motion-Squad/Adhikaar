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
    <div className="h-screen w-full">
      <div className="flex w-full items-center justify-between border-b border-b-black/20 p-5 font-sans text-lg font-medium">
        Welcome, Dhruv Bakshi!
        <button className="rounded-lg bg-accent-400 px-3 py-2 text-background-50 hover:bg-accent-500">
          Logout
        </button>
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
