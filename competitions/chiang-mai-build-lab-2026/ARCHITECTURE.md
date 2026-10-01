# Public-safe architecture

```text
Real-world event / trusted evidence
              |
              v
   MatterTurn continuity adapter
              |
              v
  Materiality / impact judgment
      |                 |
      |                 +--> preserved judgments
      v
 affected assumptions / judgments
              |
              v
 current judgment state
              |
              v
          Solana
              |
      +-------+--------+
      |       |        |
    Wallet   RWA    Lending /
            Platform  Portfolio
```

## Design boundary

MatterTurn does **not** claim that Solana proves the truth of the underlying real-world event.

The source layer answers: **what evidence arrived?**

MatterTurn answers: **does this evidence materially affect the prior professional judgment?**

Solana answers: **what is the current shared judgment state and its history?**

## Why Solana is not decorative

The prototype is not using Solana as a generic hash store.

The intended role is a shared state layer that multiple independent downstream consumers can read without depending on a private MatterTurn database.

The Build Lab prototype will keep the onchain surface deliberately small and auditable.
