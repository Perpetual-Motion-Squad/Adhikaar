"use client";

import authContext from "@/context/authContext";
import { useContext, useEffect } from "react";
import { authStep } from "./constant";
import { useRouter } from "next/navigation";

const usePathHook = () => {
  const router = useRouter();

  const currStep = useContext(authContext).authStep;
  useEffect(() => {
    const currentPath = window.location.pathname;

    const step = authStep[currStep];
    if (currStep !== step) {
      router.push(step);
    }
  }, []);
};
export default usePathHook;
