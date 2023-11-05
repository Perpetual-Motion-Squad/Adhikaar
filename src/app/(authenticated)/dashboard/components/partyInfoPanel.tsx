"use client";

import { Party } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PartyInfoPanel = ({ parties }: { parties: Party[] }) => {
  const [selectedParty, setSelectedParty] = useState<Party | null>(null);
  const searchParam = useSearchParams();
  useEffect(() => {
    const id = searchParam.get("id");
    if (!id) setSelectedParty(null);
    else {
      const party = parties.find((p) => p.id === id);
      if (!party) setSelectedParty(null);
      else setSelectedParty(party);
    }
  }, [searchParam]);
  return (
    <div className="h-[calc(100vh - 100px)] overflow-y-scroll p-5">
      <div
        className={`${selectedParty && "flex items-center justify-between"}`}
      >
        <div className="font-sans text-3xl font-bold text-primary-500">
          {selectedParty
            ? selectedParty.alias
            : "Select Party to see the details"}
        </div>
        {selectedParty && (
          <button className="rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500">
            Vote
          </button>
        )}
      </div>
      {selectedParty ? (
        <img
          src={selectedParty.logo}
          className="mt-5 h-[200px] w-full rounded-xl bg-white object-cover shadow"
        />
      ) : (
        <div className="h-[200px] w-full rounded-xl bg-zinc-300"></div>
      )}
      <div className="mt-5 flex flex-col gap-5">
        <div>
          <div className="font-sans text-lg font-semibold">Name:</div>
          {selectedParty ? (
            <div className="font-mono text-black/60">{selectedParty.name}</div>
          ) : null}
        </div>
        <div>
          <div className="font-sans text-lg font-semibold">Slogan:</div>
          {selectedParty ? (
            <div className="font-mono text-black/60">
              {selectedParty.slogan}
            </div>
          ) : null}
        </div>
        <div>
          <div className="font-sans text-lg font-semibold">Members:</div>
          {selectedParty ? (
            <>
              {selectedParty.members.map((m) => (
                <>
                  <div className="font-sans font-semibold">{m?.position}</div>
                  <div className="font-mono text-black/60">{m?.name}</div>
                </>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PartyInfoPanel;