# A Customer With Four Problems at Once

**Tags:** Synthetic Stress Test · Engineering Validation

**Synthetic institutional engineering system. Not connected to a real bank. Not approved for real customer decisions.**

## The Question

A real customer rarely has one clean problem. Can a frontline judgment system handle several genuinely different issues arriving together — some actionable now, some blocked, some requiring human sign-off — without conflating them into one verdict?

## What the system was given

A composite synthetic case combining a lost card, two disputed transactions, a hotel-payment continuity request, and a credit-card repayment difficulty, presented together as one customer's situation.

## What it found

Of the two disputed transactions, one was attributable to the customer; the other remained genuinely unresolved. The repayment difficulty and the fraud questions were evidentially and procedurally distinct, even though they arrived from the same customer at the same time.

## The judgment / result

The system kept repayment support and fraud/dispute handling as separate decisions rather than one combined outcome, and blocked only the specific actions whose own policy, evidence, or authority requirements weren't met — letting everything else proceed on its own track.

## What remained blocked, unresolved, or preserved

The unresolved disputed transaction stayed open rather than being forced to a premature conclusion just because the rest of the case could move forward. Actions that did proceed required human approval before execution, and what actually happened on execution was checked independently against what was planned, rather than assumed.

## What this case demonstrates

A real customer situation is usually several overlapping judgments, not one — and collapsing them into a single answer is where a simpler system would fail. This is a synthetic development exercise, not a real bank integration or a validated production capability.
