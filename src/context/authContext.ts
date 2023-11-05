"use client";
import { createContext } from "react";

const authContext = createContext({
  authStep: 0,
  updateStep: (step: number) => {},
});

export default authContext;
