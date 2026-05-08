import { createClient } from "@supabase/supabase-js";

type WaitlistInsert = {
  email: string;
  source?: string;
  metadata?: Record<string, unknown>;
};

export function createSupabaseAdminClient() {
  const supabaseUrl =
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return null;
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export async function insertWaitlistSignup(signup: WaitlistInsert) {
  const supabase = createSupabaseAdminClient();

  if (!supabase) {
    return {
      ok: false,
      status: 503,
      message: "Waitlist storage is not configured yet.",
    };
  }

  const { error } = await supabase.from("waitlist_signups").insert({
    email: signup.email,
    source: signup.source ?? "landing",
    metadata: signup.metadata ?? {},
  });

  if (!error) {
    return { ok: true, status: 200, message: "Joined waitlist." };
  }

  if (error.code === "23505") {
    return { ok: true, status: 200, message: "Already on the waitlist." };
  }

  return {
    ok: false,
    status: 500,
    message: "Could not save this signup. Please try again.",
  };
}
