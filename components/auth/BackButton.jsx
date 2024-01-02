"use client";

import { Button } from "@/components/ui/button.jsx";
import Link from "next/link.js";

export const BackButton = ({ label, href }) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};
