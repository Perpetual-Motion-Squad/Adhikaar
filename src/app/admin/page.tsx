'use client';

import { useAdhikaarParties } from "@/components/useAdhikaar";

const Admin = () => {
  const { data, isError, isLoading } = useAdhikaarParties();
  console.log(data?.toString());

  return (
    <div>
      <h1>Admin</h1>
      <div>TODO: Add admin page</div>
      {data !== BigInt(0) && data?.toString()}
    </div>
  )
}
export default Admin