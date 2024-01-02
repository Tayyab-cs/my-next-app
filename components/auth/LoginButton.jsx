"use client";
import React from "react";
import { useRouter } from "next/navigation.js";

export const LoginButton = ({ children }) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};
