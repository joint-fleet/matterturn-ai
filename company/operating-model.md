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

MatterTurn is not one founder claiming to be an expert in every domain it touches — nobody is. The actual mechanism is:

```text
Founder
   │
   ▼
Expert workflow
   │
   ▼
Agents
   │
   ▼
System
   │
   ▼
Real case
   │
   ▼
Learning
   │
   ▼
Central assets
   │
   ▼
Next system
```

**What the founder does:** identify high-value judgment problems, decompose expert reasoning into a workflow, define product and commercial direction, organize agents and domain-expert input around that workflow, test it through real cases, preserve what's learned (including failures), and decide what becomes a reusable capability for the next system. See [`company/expert-workflows.md`](expert-workflows.md) and [`company/capability-evolution.md`](capability-evolution.md).

**What AI agents do, inside a defined boundary:** research, coding, testing, documentation, comparison, implementation support, and evidence handling within the scope a workflow step defines for them. Agents are tools operating inside a workflow the founder designed and reviews — not an independent decision-making party, and not a stand-in for a human expert at the points (senior synthesis, approval, review) where a workflow requires one.

## What this means for maturity claims

A one-founder-plus-agents operating model is itself a reason several of MatterTurn's systems carry an Active Engineering or Candidate label rather than a Formal one: there is no large engineering organization independently stress-testing every system in parallel. Treat the organizational reality on this page as context for why system maturity varies, not as a reason to inflate it.
