# Five-minute audit plan

The prototype should be understandable without reading the private MatterTurn runtime.

## Test 1 — same event, different exposure

Input: the same anchor-tenant non-renewal event.

Expected:
- Asset A → judgment remains current.
- Asset B → reassessment required.

Proves: this is not a keyword alarm.

## Test 2 — irrelevant change

Input: a change that does not affect a material prior assumption.

Expected:

```text
CHANGE_OBSERVED
JUDGMENT_CURRENT
```

Proves: the system should not over-alert.

## Test 3 — scoped reopen

Input: material tenant event for Asset B.

Expected:

```text
Reopen:
- NOI
- valuation
- debt capacity

Preserve:
- title
- ownership
- unrelated legal facts
```

Proves: affected work is reopened selectively rather than regenerating everything.

## Test 4 — Solana state

Expected transition:

```text
JUDGMENT_CURRENT
        |
        v
REASSESSMENT_REQUIRED
        |
        v
JUDGMENT_REFRESHED
```

The audit surface should expose the devnet transaction signature for each onchain update.

## Audit UI target

A reviewer should be able to see:

```text
Assumption invalidation       PASS
Selective reopen              PASS
Unrelated judgment preserved  PASS
Material change detected      PASS
Solana state update           PASS
```

Each item should expand to show input, expected result, actual result and evidence reference.
