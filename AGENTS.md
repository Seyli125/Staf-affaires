## Project Summary
STAF Affaires is a premium B2B coaching, training, and outsourced management website for Saïd Taaroust. The site aims to position Saïd as an expert humanist coach for managers, sellers, and SME leaders, emphasizing performance without exhaustion ("Performer sans s'épuiser") and meaningful management/sales ("Manager et vendre avec sens").

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS 4
- Animations: Framer Motion
- Icons: Lucide React
- Components: Shadcn UI (Radix UI)
- Deployment: Vercel

## Architecture
- `src/app`: Page routes and layouts
- `src/components`: Reusable UI sections (Hero, About, Services, Testimonials, Timeline, FAQ, Contact, Footer)
- `src/components/ui`: Base UI components from shadcn/ui
- `src/lib`: Utility functions (cn, etc.)
- `public`: Static assets (Photos, logos)

## User Preferences
- Professional, creative, warm, and elegant tone.
- High-end personal brand aesthetic (Blue navy/gray, Gold/Orange accent, Off-white background).
- Modern, sans-serif typography (Inter/Poppins) for readability, Serif (Playfair Display) for impact.
- Human-centric design using Saïd's professional photo.
- Performance and credibility focused (RNCP Level 6, AVR® approach, 40 years of experience).

## Project Guidelines
- Use `framer-motion` for scroll-triggered animations and micro-interactions.
- Maintain responsiveness (mobile-first design).
- Use Next.js Image for all media.
- Ensure high contrast and accessibility.
- Navigation should be intuitive with clear CTAs (e.g., "Prendre rendez-vous").

## Common Patterns
- Scroll-triggered fade-ins and staggered reveals.
- Hover states with scale and subtle elevation.
- Cards for testimonials and services.
- Chronological timeline for professional experience.
