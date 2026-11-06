"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IconHome,
  IconMessageCircle,
  IconPhone,
  IconBrain,
  IconSettings,
} from "@tabler/icons-react";

const navigationItems = [
  { label: "Home", href: "/", icon: IconHome },
  { label: "Chat", href: "/chat", icon: IconMessageCircle },
  { label: "Calls", href: "/calls", icon: IconPhone },
  { label: "Memories", href: "/memories", icon: IconBrain },
  { label: "Settings", href: "/settings", icon: IconSettings },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden min-h-screen w-64 flex-col bg-surface p-6 md:flex">
        <h1 className="mb-10 text-2xl font-bold text-foreground">
          RoboMaya 🐱
        </h1>

        <nav aria-label="Main navigation" className="flex flex-col gap-2">
          {navigationItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <Icon size={20} stroke={1.75} />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile bottom navigation */}
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-50 flex justify-around border-t border-border bg-surface px-2 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden"
      >
        {navigationItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-col items-center gap-1 rounded-lg px-2 py-1 text-xs transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-secondary hover:text-foreground"
              }`}
            >
              <Icon size={21} stroke={1.75} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
