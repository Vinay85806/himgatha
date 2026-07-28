-- ============================================================
-- 360 Travellers — package visibility toggle + admin write access
-- ============================================================
-- 1) Adds an `active` flag to packages so the admin panel can hide a
--    package from the live site without deleting it.
-- 2) Grants logged-in admin (Supabase Auth "authenticated" role) write
--    access to packages and destinations. Both tables currently only
--    have a public SELECT policy, so RLS silently blocks every write
--    from the admin panel (add/edit/delete packages, hide/delete
--    destinations) even when logged in. This fixes that.
-- Safe to re-run.
-- ============================================================

alter table public.packages
  add column if not exists active boolean not null default true;

alter table public.packages enable row level security;

drop policy if exists "Public packages are viewable by everyone" on public.packages;
create policy "Public packages are viewable by everyone"
  on public.packages for select using (true);

drop policy if exists "Authenticated can manage packages" on public.packages;
create policy "Authenticated can manage packages"
  on public.packages for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated can manage destinations" on public.destinations;
create policy "Authenticated can manage destinations"
  on public.destinations for all
  to authenticated
  using (true)
  with check (true);
