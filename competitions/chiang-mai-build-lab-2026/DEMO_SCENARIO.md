# Frozen demo scenario

## Question

Can the same real-world event require different action for different tokenized assets?

## Event

**Anchor tenant will not renew.**

## Asset A

- Anchor tenant share of NOI: ~5%
- Diversified tenant base
- No modeled debt stress caused by the event

Expected state:

```text
CHANGE_OBSERVED
JUDGMENT_CURRENT
```

Expected explanation:

- event is real;
- event is relevant;
- event does not invalidate a controlling underwriting assumption;
- no reassessment is required.

## Asset B

- Anchor tenant share of NOI: ~45%
- Material concentration
- NOI, valuation and debt-capacity assumptions depend on continued occupancy

Expected state:

```text
MATERIAL_CHANGE
REASSESSMENT_REQUIRED
```

Expected impact:

```text
Affected:
- NOI
- valuation
- debt capacity

Preserved:
- title
- ownership
- unrelated fixed legal facts
```

## Why this test matters

A keyword alert system would react the same way to both assets.

MatterTurn should not.

**Same event. Different asset exposure. Different judgment.**
