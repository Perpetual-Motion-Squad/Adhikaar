"use client";

import authContext from "@/context/authContext";
import { useContext, useEffect } from "react";
import { authStep } from "./constant";
import { useRouter } from "next/navigation";

const usePathHook = () => {
  const router = useRouter();

  const { authStep: currStep } = useContext(authContext);
  useEffect(() => {
    const currentPath = window.location.pathname;

    const step = authStep[currStep];
    if (currentPath !== step) {
      router.push(step);
    }
  }, [currStep]);
  const updateStep = useContext(authContext).updateStep;
  return updateStep;
};
export default usePathHook;
