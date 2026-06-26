# Decision Log: Interactive Digital CV

## Understanding Summary
- **What is being built:** A premium, interactive digital CV deployed on Vercel to showcase AI-accelerated engineering capabilities.
- **Why it exists:** To demonstrate to stakeholders (including family) the concrete, high-value systems the user can build using AI.
- **Key Constraints:** Spotlight FAMS and Automation projects. Premium UI/UX with "design spells."
- **Explicit Non-goals:** No generic "AI slop" or basic templates.

## Assumptions
- **Tech Stack:** Next.js (App Router), Tailwind CSS, Framer Motion.
- **Design Language:** Command Center Bento (Dark mode, sleek, highly polished GUI).
- **Maintenance:** Built as a static/highly cached site.

## Decision Log

### 1. Overall Layout & Theme
- **Decision:** Command Center Bento Grid.
- **Alternatives Considered:** 
  - Pure Command Center (Too terminal-focused, less scannable).
  - Minimalist Bento Box (Slightly too generic).
  - Scroll-Driven Architecture (Too complex to maintain, high risk of jank).
- **Rationale:** The Bento Grid is instantly scannable, while the dark "Command Center" aesthetic proves serious engineering capability.

### 2. Tech Stack
- **Decision:** Next.js 15 (App Router), Tailwind V4, Framer Motion, Lucide React.
- **Alternatives Considered:** React + Vite, Astro.
- **Rationale:** Next.js provides the best Vercel deployment experience and optimized performance out of the box. Framer Motion is the industry standard for the "design spells" micro-interactions we require.

### 3. FAMS Representation
- **Decision:** FAMS will occupy a 2x2 Hero Block with a conceptual data flow background animation.
- **Rationale:** FAMS is the crown jewel (full-scale system vs. single scripts). It deserves the highest visual hierarchy.
