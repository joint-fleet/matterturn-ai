# Professional Services for Tourists & Travel Agencies

**Maturity: Active engineering / validation.**

**Problem addressed:** Which travel options fit a traveler's needs, what they will cost in time and money, and how a travel agency can reduce the effort of gathering, purchasing, and operating around that information.

**Judgment supported:** Comparing flights, tickets, and itinerary options against stated needs, and organizing booking and itinerary steps.

**What's real today:** a mobile-first decision workflow (React Native / Expo), a Release-configuration APK built and run on a real physical device (an internal test build, not a public app-store release), a FastAPI backend on PostgreSQL with session/storage/intake handling, evidence capture, a domain pack, external connectors, and ten end-to-end acceptance test cases (E2E-01–E2E-10) run against the pipeline on real-device hardware — ten test cases, not ten separate devices.

**What's still incomplete:** the core professional judgment layer — the part that decides which travel options are actually sound for a given traveler — is still under development. The device-and-pipeline plumbing runs end to end; the judgment it's meant to carry does not yet. This is not presented as a mature Travel Judgment System.

**What you can use this for today** (Active Engineering): capture a traveler's decision problem (text and photos, with context) reliably for later professional judgment to act on.

**What you actually get, by maturity:**
- *Active Engineering* — problem intake & session capture, real-device tested across 10 documented acceptance scenarios.
- *Planned / Not Yet Available* — the judgment/recommendation engine itself. Professional judgment criteria are drafted as structured data, but the code that would apply them is an explicit placeholder; no recommendation has ever been produced.

**Link:** Product page on the [website](../../website/) (`/systems/travel`).
