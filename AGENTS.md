## Project Summary
STAFF AFFAIRES is a high-end B2B coaching website designed for Saïd Taaroust. The project focuses on replicating a premium personal brand aesthetic (James David reference) with a modern, responsive, and animation-rich user experience in French.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS 4
- Animations: Framer Motion
- Icons: Lucide React
- Components: Shadcn UI (Radix UI)
- Deployment: Vercel

## Architecture
- `src/app`: Page routes and layouts
- `src/components`: Reusable UI sections (Hero, Brands, Services, etc.)
- `src/components/ui`: Base UI components from shadcn/ui
- `src/lib`: Utility functions (cn, etc.)
- `public`: Static assets

## User Preferences
- Professional, high-end coaching aesthetic
- Ultra-modern micro-interactions and scroll-triggered animations
- Visual fidelity to the provided reference image
- French language (professional and action-oriented)
- High contrast and distinctive typography (Black/Bold headings)

## Project Guidelines
- Use `framer-motion` for all complex animations
- Maintain responsiveness across all viewports
- Use Next.js Image component for optimized media
- Follow Tailwind 4 conventions for styling
- Ensure accessibility with ARIA tags

## Common Patterns
- Scroll-triggered fade-ins and slides
- Hover effects with scale and shadow elevation
- Staggered animation delays for list items
- Glass-morphism for UI elements in the hero section
