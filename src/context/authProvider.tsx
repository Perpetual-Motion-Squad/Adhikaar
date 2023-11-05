"use client";
import authContext from "./authContext";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <authContext.Provider value={{ authStep: 0 }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
