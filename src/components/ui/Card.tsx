import type { ComponentProps } from "react";

type CardProps = ComponentProps<"div">;

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-border bg-surface p-6 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
