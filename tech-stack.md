# Tech Stack: Muldan Portfolio

## Core Framework
- **Next.js 16.1.6** (React 19.2.3)
- **App Router** architecture 
- **TypeScript**

## Styling & UI
- **Tailwind CSS v4** (PostCSS integration)
- **Framer Motion** (for animations, though current animations heavily use CSS `@keyframes` and state-based visibility)
- **Lucide React** (icons)
- **clsx / tailwind-merge** (for utility class merging)

## Architecture Notes
- *Static/Client Components:* Uses `"use client"` heavily for intersection observers, state management, and real-time animation simulations.
- *Custom Animations:* Relies on CSS keyframes (`fadeIn`) and `animationDelay` mapping to sequence console lines and table rows appearing dynamically.
- *Styling System:* Employs CSS variables for theming (e.g., `--color-bg`, `--color-fg`, `--color-accent`) to maintain the terminal aesthetic.
