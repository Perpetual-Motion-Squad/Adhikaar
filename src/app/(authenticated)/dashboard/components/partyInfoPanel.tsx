"use client";

import { Party } from "@prisma/client";
import { useState } from "react";

const PartyInfoPanel = ({ parties }: { parties: Party[] }) => {
  const [selectedParty, setSelectedParty] = useState<Party | null>(null);

  return <div>this is sopmething new</div>;
};

export default PartyInfoPanel;
