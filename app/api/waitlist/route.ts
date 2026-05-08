import { NextResponse } from "next/server";
import { insertWaitlistSignup } from "@/lib/supabase/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? String(body.email).trim().toLowerCase()
      : "";
  const source =
    typeof body === "object" && body !== null && "source" in body
      ? String(body.source).slice(0, 80)
      : "landing";

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const result = await insertWaitlistSignup({
    email,
    source,
    metadata: {
      userAgent: request.headers.get("user-agent"),
    },
  });

  return NextResponse.json(
    { ok: result.ok, message: result.message },
    { status: result.status },
  );
}
