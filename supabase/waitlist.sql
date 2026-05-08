create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'landing',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

create policy "Service role can manage waitlist signups"
on public.waitlist_signups
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');
