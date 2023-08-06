"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8bf563c6-fe6e-4779-96bb-dd54895738f7");
  }, []);

  return null;
};