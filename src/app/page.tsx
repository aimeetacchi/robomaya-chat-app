import Link from "next/link";
import {
  IconMessageCircle,
  IconPhone,
  IconHistory,
  IconHeart,
  IconArrowRight,
} from "@tabler/icons-react";

import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";

export default function HomePage() {
  return (
    <AppShell>
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Welcome */}
        <section>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Welcome to RoboMaya! 🐱
          </h1>

          <p className="mt-3 text-secondary">
            Your friendly AI companion is here whenever you need a chat.
          </p>
        </section>

        {/* Main welcome card */}
        <Card className="md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg">
              <p className="mb-2 text-sm font-medium text-secondary">
                YOUR AI COMPANION
              </p>

              <h2 className="text-2xl font-semibold text-foreground">
                Hello there! 💜
              </h2>

              <p className="mt-3 text-secondary">
                I'm RoboMaya. We can talk about your day, explore ideas or just
                have a friendly conversation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/chat"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <IconMessageCircle size={20} stroke={1.75} />
                  Start chatting
                </Link>

                <Link
                  href="/calls"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 font-medium text-foreground transition-colors hover:bg-accent hover:text-brand-900"
                >
                  <IconPhone size={20} stroke={1.75} />
                  Voice call
                </Link>
              </div>
            </div>

            {/* Mascot placeholder */}
            <div className="flex h-44 w-full shrink-0 items-center justify-center rounded-3xl bg-background md:w-48">
              <span className="text-7xl" role="img" aria-label="Cat">
                🐱
              </span>
            </div>
          </div>
        </Card>

        {/* Dashboard cards */}
        <section className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <IconHistory size={24} stroke={1.75} className="text-secondary" />
              <h2 className="text-lg font-semibold">Recent conversations</h2>
            </div>

            <p className="text-secondary">
              Your recent chats with RoboMaya will appear here.
            </p>

            <Link
              href="/chat"
              className="mt-6 inline-flex items-center gap-2 font-medium text-primary hover:underline"
            >
              View conversations
              <IconArrowRight size={18} />
            </Link>
          </Card>

          <Card>
            <div className="mb-4 flex items-center gap-3">
              <IconHeart size={24} stroke={1.75} className="text-secondary" />
              <h2 className="text-lg font-semibold">Saved memories</h2>
            </div>

            <p className="text-secondary">
              The things you choose to let RoboMaya remember will appear here.
            </p>

            <Link
              href="/memories"
              className="mt-6 inline-flex items-center gap-2 font-medium text-primary hover:underline"
            >
              View memories
              <IconArrowRight size={18} />
            </Link>
          </Card>
        </section>
      </div>
    </AppShell>
  );
}
