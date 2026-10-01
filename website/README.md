# Website

The MatterTurn Ai marketing/product website (Next.js app, deployed on Vercel as the `matterturn-ai` project) currently lives at the **repository root** (`app/`, `components/`, `lib/`, `public/`, etc.) rather than inside this `website/` directory.

**This round deliberately did not move it.** The live production deployment (`matterturn-ai.vercel.app`) is built directly from the repository root via `vercel.json`'s `buildCommand`/`installCommand` and Vercel's project Root Directory setting. Moving the app into `website/` would require updating the Vercel project's Root Directory and re-verifying the build, which carries real risk of breaking the current deployment if done without a verified, tested cutover.

**Recommendation for a future round:** move the Next.js app into `website/` as a path-preserving `git mv`, update the Vercel project's Root Directory to `website/`, and verify a full deploy (preview, then production) before relying on the new layout — as its own isolated change, not bundled with other restructuring.

Until that migration happens, treat the repository root as the website's source, and this directory as a placeholder/pointer only.
