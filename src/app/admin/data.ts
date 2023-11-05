'use server'
import { db } from "@/server/db";

export async function getPartiesFromDB() {

  const parties = await (db.party.findMany())
  return parties.map(party => party.id)
}

export const partiesPromise = getPartiesFromDB()
