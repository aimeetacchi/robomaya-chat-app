import type { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground md:flex">
      <Navigation />

      <div className="min-w-0 flex-1">
        <header className="flex justify-end px-5 pt-5 md:px-10">
          <ThemeToggle />
        </header>

        <main className="px-5 py-8 pb-28 md:px-10 md:py-8">{children}</main>
      </div>
    </div>
  );
}
