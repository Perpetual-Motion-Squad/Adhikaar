import Bene from "./components/bene";
import { db } from "@/server/db";

const getParties = async () => {
  const res = await db.party.findMany();
  return res;
};

const Admin = async () => {
  const parties = await getParties();
  return <Bene parties={parties} />;
};
export default Admin;
