# Principles

**Judgment continuity, not alerting.** A keyword or threshold alarm reacts the same way to every event. MatterTurn asks whether an event is material to a *specific prior judgment* before treating it as something that needs reassessment.

**Selective reopening.** When a judgment is affected, only the parts that depend on the changed assumption reopen. Unrelated facts and conclusions are preserved, not regenerated.

**Evidence over confidence.** Every judgment traces back to the evidence and assumptions that produced it. A judgment that can't show its reasoning is not something we publish as a capability.

**Honest maturity labeling.** Systems are described as verified capability, competition prototype, or planned capability — never blurred together. A system in design stage is called a design, not a product.

**Public/private boundary by default.** This repository shows what MatterTurn is and what its public-safe systems do. The proprietary judgment runtime, private case evidence, and internal orchestration stay in private repositories, always.

**No premature production claims.** Nothing here implies a working, generally-available commercial product unless it is one. Where a system is not yet live, the honest status is stated plainly instead of implied away.

**We do not delete failure.** MatterTurn preserves failed tests, invalid assumptions, HOLD states, NO_MODEL and SOURCE_UNAVAILABLE results, zero-opportunity outcomes, evaluation leakage, integration failures, environment failures, classifier errors, unsupported claims, and negative validation results. A system that only keeps its successes hasn't shown anyone how it handles being wrong. This failure memory is used for future case checks, system-design correction, candidate rejection, regression prevention, and reuse decisions — it reduces the risk of repeating a failure, it does not guarantee one can never recur. See [`company/case-and-failure-history.md`](case-and-failure-history.md) and [`company/capability-evolution.md`](capability-evolution.md).
