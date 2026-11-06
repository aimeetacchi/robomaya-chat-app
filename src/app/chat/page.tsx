"use client";

import { useEffect, useState, useRef, type SubmitEvent } from "react";
import { useChat } from "@ai-sdk/react";
import {
  IconMessageCircle,
  IconSend,
  IconPlayerStopFilled,
  IconRefresh,
} from "@tabler/icons-react";

import { AppShell } from "@/components/layout/AppShell";
import { Card } from "@/components/ui/Card";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error, stop, regenerate } = useChat();

  const isLoading = status === "submitted" || status === "streaming";

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) return;

    sendMessage({ text: trimmedInput });
    setInput("");
  };

  console.log("Chat status:", status);
  console.log("Chat error:", error);

  useEffect(() => {
    console.log("Scroll target:", messagesEndRef.current);

    messagesEndRef.current?.scrollIntoView({
      behavior: "auto",
    });
  }, [messages]);

  return (
    <AppShell>
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header>
          <div className="flex items-center gap-3">
            <IconMessageCircle
              size={28}
              stroke={1.75}
              className="text-primary"
            />

            <h1 className="text-3xl font-bold text-foreground">
              Chat with RoboMaya
            </h1>
          </div>

          <p className="mt-2 text-secondary">
            Your friendly AI companion is ready to chat.
          </p>
        </header>

        <Card className="flex h-150 flex-col gap-4">
          <div
            aria-label="Conversation"
            aria-live="polite"
            className="flex flex-1 flex-col gap-4 overflow-y-auto"
          >
            {messages.length === 0 && (
              <p className="text-center text-secondary">
                Hello! 🐱 I'm RoboMaya. What would you like to talk about?
              </p>
            )}

            {messages.map((message) => {
              const isUser = message.role === "user";

              // Check whether the message contains visible text
              const hasText = message.parts.some(
                (part) => part.type === "text" && part.text.trim().length > 0,
              );

              // Don't render empty message bubbles
              if (!hasText) return null;

              return (
                <div
                  key={message.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 md:max-w-[70%] ${
                      isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-foreground"
                    }`}
                  >
                    {message.parts.map((part, index) => {
                      if (part.type !== "text") return null;

                      return (
                        <p
                          key={index}
                          className="whitespace-pre-wrap text-sm leading-relaxed"
                        >
                          {part.text}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />

            {status === "submitted" && (
              <p className="text-sm text-secondary" role="status">
                RoboMaya is thinking... 🐱
              </p>
            )}

            {error && (
              <p role="alert" className="text-sm text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="shrink-0 flex gap-3 border-t border-border pt-4"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message RoboMaya..."
              aria-label="Message RoboMaya"
              className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-3 text-foreground outline-none placeholder:text-secondary focus-visible:ring-2 focus-visible:ring-primary"
            />
            {status === "streaming" ? (
              <button
                type="button"
                onClick={stop}
                className="cursor-pointer flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="stop message"
              >
                <IconPlayerStopFilled
                  size={28}
                  stroke={1.75}
                  className="text-primary-foreground"
                />
                <span className="hidden sm:inline">Stop</span>
              </button>
            ) : (
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="cursor-pointer flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <IconSend size={20} stroke={1.75} />
                <span className="hidden sm:inline">Send</span>
              </button>
            )}
            {error && (
              <button
                type="button"
                onClick={() => void regenerate()}
                className="cursor-pointer flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="retry"
              >
                <IconRefresh
                  size={28}
                  stroke={1.75}
                  className="text-primary-foreground"
                />
                <span className="hidden sm:inline">Retry</span>
              </button>
            )}
          </form>
        </Card>
      </div>
    </AppShell>
  );
}
