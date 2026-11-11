-- ============================================================
-- Himgatha rebrand — replace "360 Travellers" wherever it's
-- stored as literal text inside the packages table.
-- Covers plain text columns and the JSONB array/object columns
-- (itinerary, highlights, inclusions, exclusions, know_before,
-- route, keywords). replace() is a no-op where the substring
-- isn't present, so this is safe to run across all rows.
-- Safe to re-run.
-- ============================================================

-- Plain text columns
update public.packages set
  title             = replace(title, '360 Travellers', 'Himgatha'),
  meta_title        = replace(meta_title, '360 Travellers', 'Himgatha'),
  meta_description  = replace(meta_description, '360 Travellers', 'Himgatha'),
  description       = replace(description, '360 Travellers', 'Himgatha'),
  location           = replace(location, '360 Travellers', 'Himgatha');

-- itinerary: array of {day, title, description}
update public.packages
set itinerary = (
  select coalesce(jsonb_agg(
    jsonb_set(
      jsonb_set(elem, '{title}', to_jsonb(replace(elem->>'title', '360 Travellers', 'Himgatha'))),
      '{description}', to_jsonb(replace(elem->>'description', '360 Travellers', 'Himgatha'))
    )
  ), '[]'::jsonb)
  from jsonb_array_elements(itinerary) as elem
)
where itinerary is not null and jsonb_typeof(itinerary) = 'array';

-- Simple string-array JSONB columns
update public.packages
set highlights = (
  select coalesce(jsonb_agg(replace(elem, '360 Travellers', 'Himgatha')), '[]'::jsonb)
  from jsonb_array_elements_text(highlights) as elem
)
where highlights is not null;

update public.packages
set inclusions = (
  select coalesce(jsonb_agg(replace(elem, '360 Travellers', 'Himgatha')), '[]'::jsonb)
  from jsonb_array_elements_text(inclusions) as elem
)
where inclusions is not null;

update public.packages
set exclusions = (
  select coalesce(jsonb_agg(replace(elem, '360 Travellers', 'Himgatha')), '[]'::jsonb)
  from jsonb_array_elements_text(exclusions) as elem
)
where exclusions is not null;

update public.packages
set know_before = (
  select coalesce(jsonb_agg(replace(elem, '360 Travellers', 'Himgatha')), '[]'::jsonb)
  from jsonb_array_elements_text(know_before) as elem
)
where know_before is not null;

update public.packages
set route = (
  select coalesce(jsonb_agg(replace(elem, '360 Travellers', 'Himgatha')), '[]'::jsonb)
  from jsonb_array_elements_text(route) as elem
)
where route is not null;

update public.packages
set keywords = (
  select coalesce(jsonb_agg(replace(elem, '360 Travellers', 'Himgatha')), '[]'::jsonb)
  from jsonb_array_elements_text(keywords) as elem
)
where keywords is not null;
