"use client";
import { createContext } from "react";

const authContext = createContext({
  authStep: 0,
});

export default authContext;
