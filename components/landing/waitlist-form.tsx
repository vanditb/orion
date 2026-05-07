"use client";

import { FormEvent, useId, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "loading" | "success" | "error";

type WaitlistFormProps = {
  className?: string;
};

export function WaitlistForm({ className }: WaitlistFormProps) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    "Early access updates will be sent to this email.",
  );
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("Submitting to waitlist...");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "landing",
        }),
      });
      const payload = (await response.json()) as {
        message?: string;
      };

      if (!response.ok) {
        setState("error");
        setMessage(payload.message ?? "Could not join the waitlist.");
        return;
      }

      setState("success");
      setMessage(payload.message ?? "You're on the waitlist.");
      setEmail("");
    } catch {
      setState("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col gap-3 sm:max-w-[560px]",
        className,
      )}
    >
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <div className="min-w-0 flex-1">
          <label className="sr-only" htmlFor={`${id}-email`}>
            Email address
          </label>
          <Input
            id={`${id}-email`}
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            aria-describedby={`${id}-message`}
          />
        </div>
        <Button
          disabled={state === "loading"}
          type="submit"
        >
          {state === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
          Join waitlist
        </Button>
      </div>
      <p
        id={`${id}-message`}
        className={
          state === "error"
            ? "font-mono mx-auto max-w-[300px] text-center text-xs leading-5 text-[#F87171] sm:max-w-none"
            : "font-mono mx-auto max-w-[300px] text-center text-xs leading-5 text-[#9BAEC8] sm:max-w-none"
        }
      >
        {message}
      </p>
    </form>
  );
}
