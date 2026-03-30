"use client";

import "@motif-ui/react/themes/default-theme.css";
import { MotifProvider } from "@motif-ui/react";

export function MotifWrapper({ children }: { children: React.ReactNode }) {
    return <MotifProvider>{children}</MotifProvider>;
}