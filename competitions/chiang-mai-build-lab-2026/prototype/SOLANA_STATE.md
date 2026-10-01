# Minimal Solana state design

The Build Lab prototype should publish only the minimum shared state required for downstream consumers.

## Proposed public record

```text
asset_id
judgment_state
materiality
event_id
judgment_version
updated_at
result_digest
```

Suggested state values:

```text
JUDGMENT_CURRENT
CHANGE_OBSERVED
REASSESSMENT_REQUIRED
JUDGMENT_REFRESHED
```

Suggested materiality values:

```text
NO_MATERIAL_CHANGE
MATERIAL_CHANGE
UNRESOLVED
```

## Explicit exclusions

Do not put private evidence, tenant names, confidential underwriting, full professional reasoning, or customer documents onchain.

The chain record is a shared status and integrity reference, not the private professional work product.

## Event-day proof requirement

A reviewer must be able to:

1. run or trigger the demo event;
2. observe the MatterTurn result;
3. see the Solana transaction signature;
4. independently read the updated devnet state;
5. match that state back to the local audit result through `result_digest`.

The exact Solana program/account implementation remains event-day work.
