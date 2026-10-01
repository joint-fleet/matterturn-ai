# Operating Model

This page states a fact about MatterTurn directly, rather than leaving it for an outside reader to guess: **MatterTurn currently has one founder and core operator, Michael Xie, and no conventional in-house software engineering team.** Michael builds and runs MatterTurn's systems by combining his own domain experience, AI agents, external domain-expert input, reusable system assets, and real cases.

## Where this came from

Michael spent roughly 20 years in real estate and real-business decision environments — investment, development, asset, and operating decisions, often with incomplete information. That work meant reviewing not just an expert's conclusion, but the evidence and assumptions behind it, because a decision could be changed at once by market conditions, financing, policy, contracts, partners, execution capacity, and the physical reality of the asset itself. He also worked through development and asset-turnaround situations — real operating problems, not case studies — where a decision had to be made while evidence was still incomplete and conditions kept changing.

This is why MatterTurn is built as a **judgment system**, not a chatbot: the problem Michael spent two decades inside of was never "answer a question once." It was "keep a decision connected to a reality that won't hold still."

## The path to AI

The path did not start from AI looking for an application. It ran the other way:

```text
Domain / business experience
      │
      ▼
Judgment problems
      │
      ▼
Self-taught coding
      │
      ▼
AI tools / agents
      │
      ▼
Engineering professional judgment
      │
      ▼
MatterTurn
```

Michael taught himself to code and to use AI tools specifically to engineer the professional judgment process he already understood from the inside — not the reverse.

## How one person builds several systems

MatterTurn is not one founder claiming to be an expert in every domain it touches — nobody is. MatterTurn currently has one founder/core operator and no conventional in-house engineering team. Systems are built using domain experience, AI agents, domain-expert input, real cases and private reusable assets.

**What the founder does:** defines each system's direction, organizes the expert workflow and domain input behind it, tests it through real cases, and decides what's learned — including failures — becomes a reusable capability. See [`company/expert-workflows.md`](expert-workflows.md) and [`company/capability-evolution.md`](capability-evolution.md).

**What AI agents do:** agents support research, engineering, testing and structured evidence work within founder-defined boundaries. They are tools operating inside a workflow the founder designs and reviews — not an independent decision-making party, and not a stand-in for a human expert where a workflow requires one.

## What this means for maturity claims

A one-founder-plus-agents operating model is itself a reason several of MatterTurn's systems carry an Active Engineering or Candidate label rather than a Formal one: there is no large engineering organization independently stress-testing every system in parallel. Treat the organizational reality on this page as context for why system maturity varies, not as a reason to inflate it.
