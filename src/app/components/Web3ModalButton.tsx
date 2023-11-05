"use client";
import React from "react";

const Web3ModalButton = () => {
  return (
    <button className="rounded-lg bg-accent-600 px-3 py-2 text-background-50 hover:bg-accent-500">
      <w3m-button label="wallet connect" />
    </button>
  );
};

export default Web3ModalButton;
