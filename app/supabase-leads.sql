-- Cole no Supabase: SQL Editor → New query → Execute
-- Cria a tabela de leads e libera insert para usuários anônimos (site público)

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  telefone text not null,
  created_at timestamptz default now()
);

alter table public.leads enable row level security;

create policy "Permitir insert anônimo para leads"
  on public.leads for insert
  to anon
  with check (true);
