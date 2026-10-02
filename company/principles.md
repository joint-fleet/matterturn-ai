# Principles

**Responsibility before release.** When a customer relies on a professional judgment, the cost of error can extend far beyond the software itself — capital, years of work, a family's future. We test, challenge, red-team, and preserve failures before asking anyone to rely on a capability. Customers should not become the place where a core judgment failure is discovered for the first time. Every other principle below is a specific form this takes.

**Judgment continuity, not alerting.** A keyword or threshold alarm reacts the same way to every event. MatterTurn asks whether an event is material to a *specific prior judgment* before treating it as something that needs reassessment.

**Selective reopening.** When a judgment is affected, only the parts that depend on the changed assumption reopen. Unrelated facts and conclusions are preserved, not regenerated.

**Evidence over confidence.** Every judgment traces back to the evidence and assumptions that produced it. A judgment that can't show its reasoning is not something we publish as a capability. *This is responsibility, applied to reasoning: a judgment nobody can check is a judgment nobody can be held to.*

**Honest maturity labeling.** Systems are described as verified capability, competition prototype, or planned capability — never blurred together. A system in design stage is called a design, not a product. *This is responsibility, applied to claims: a customer can only rely on a capability as far as its real maturity, not its billing.*

**Public/private boundary by default.** This repository shows what MatterTurn is and what its public-safe systems do. The proprietary judgment runtime, private case evidence, and internal orchestration stay in private repositories, always.

**No premature production claims.** Nothing here implies a working, generally-available commercial product unless it is one. Where a system is not yet live, the honest status is stated plainly instead of implied away. *This is responsibility, applied to timing: we earn trust before we ask for it, not after.*

**We do not delete failure.** Failed tests, rejected assumptions, negative results and known limitations are preserved as engineering memory. A system that only keeps its successes hasn't shown anyone how it handles being wrong — this reduces the risk of repeating a failure, it does not guarantee one can never recur. See [`company/case-and-failure-history.md`](case-and-failure-history.md) and [`company/capability-evolution.md`](capability-evolution.md). *This is responsibility, applied to memory: customers should not be where we discover our own mistakes for the first time.*
