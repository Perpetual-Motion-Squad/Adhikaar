"use client";
import { useEffect, useState } from "react";
import authContext from "./authContext";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authStep, setAuthStep] = useState(0);
  const updateStep = (step: number) => {
    setAuthStep(step);
    localStorage.setItem("authStep", step.toString());
  };

  // in a useEffect, store the authStep in localStorage if it doesn't exist
  useEffect(() => {
    if (!localStorage.getItem("authStep")) {
      localStorage.setItem("authStep", "0");
    } else {
      setAuthStep(Number(localStorage.getItem("authStep")));
    }
  }, [authStep]);

  return (
    <authContext.Provider value={{ authStep: authStep, updateStep }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
