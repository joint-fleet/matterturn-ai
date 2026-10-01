# Kiosque Hassan II — When Nearby Isn't the Same Thing

**Tags:** Evidence Boundary · Engineering Validation

**Phase 0 / experimental engineering validation. Not a product. No Moroccan rule or local practice was verified by this exercise.**

## The Question

A public transit kiosk and avenue location in Casablanca (Kiosque Hassan II / Avenue Hassan II) needed to be identified from open map data. If two different sources place something at nearly the same coordinates, is that enough to say they're the same real-world place?

## What the system was given

Two plain-text location queries and one reverse-geocoding lookup against public OpenStreetMap data, plus official transit-authority (Casatramway) data for the same area.

## What it found

The text queries returned an unrelated kiosk and no tram-station result at all. The reverse lookup returned a location about 0.62 meters from the official kiosk coordinates — very close, but a coordinate match is not the same claim as an entity match. The official transit data separately identified the kiosk and the tram line it sits on, but said nothing about whether it was currently open.

## The judgment / result

Cross-source resolution was recorded as **spatial proximity only** — explicitly not treated as a confirmed identity match between the sources.

## What remained blocked, unresolved, or preserved

Current opening status stayed unknown. No "go there now" or similar action recommendation was generated. Sufficiency for a real decision was recorded as requiring external confirmation — the geographic data existed, but it wasn't enough on its own.

## What this case demonstrates

Being close on a map is not the same fact as being the same place, and this system is built to keep that distinction rather than quietly merge "nearby" into "confirmed." A gap between what's geographically findable and what's actually verified is reported as a gap, not papered over with a confident-sounding answer.
