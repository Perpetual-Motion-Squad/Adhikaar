"use client";

import { Party } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const PartyGrid = ({ parties }: { parties: Party[] }) => {
  const [selectedParty, setSelectedParty] = useState<Party | null>(null);
  const router = useRouter();
  return (
    <div className="grid h-[600px] grid-cols-1 gap-5 overflow-y-scroll p-5 xl:grid-cols-2 2xl:grid-cols-3">
      {parties.map((party) => (
        <div
          className={`${
            selectedParty?.id === party.id &&
            "ring ring-primary-200 ring-offset-4"
          } w-full min-w-[250px] cursor-pointer rounded-md border border-black/20`}
          key={party.id}
          onClick={() => {
            setSelectedParty(party);
            router.push(`/dashboard?id=${party.id}`);
          }}
        >
          <div className="h-[200px] w-full bg-gray-200">
            <img
              src={party.logo}
              alt=""
              className="pointer-events-none h-full w-full rounded-t-md border-b border-b-black/20 bg-white object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-3 p-2">
            <div className="col-span-2">
              <div className="text-md font-sans font-bold text-text-900">
                {party.alias}
              </div>
              <div className="truncate font-mono text-sm">{party.name}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-md font-sans font-bold text-text-900">
                Mems.
              </div>
              <div className="truncate font-mono text-sm">
                {party.members.length}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PartyGrid;
