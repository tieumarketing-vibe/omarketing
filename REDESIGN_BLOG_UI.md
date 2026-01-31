# Redesign Blog UI - Modern Minimalist

## Objective
Create a "better, more modern, but still minimalist" interface for the blog.
Focus on:
- Clean typography (Outfit + Inter).
- Neutral color palette (Slate/Zinc) with a primary accent (Indigo).
- Subtle animations and interactions.
- Improved layout and spacing.

## Plan
1.  **Global Styles (`src/styles/global.css`)**:
    -   Import Google Fonts: `Outfit` (Headings), `Inter` (Body).
    -   Update CSS variables for colors, spacing, and typography.
    -   Add utility classes for animations.
2.  **Layout (`src/layouts/Layout.astro`)**:
    -   Update head to include font preconnects.
    -   Add a subtle background texture or gradient.
3.  **Components (`src/components/BlogCard.astro`)**:
    -   Refactor to match the new design (cleaner, less "boxed").
4.  **Homepage (`src/pages/index.astro`)**:
    -   Redesign Hero section.
    -   Use `BlogCard` component for the post grid.
    -   Improve spacing and visual hierarchy.

## Design Tokens
-   **Font Heading**: 'Outfit', sans-serif
-   **Font Body**: 'Inter', sans-serif
-   **Primary Color**: `#6366f1` (Indigo 500)
-   **Background**: `#f8fafc` (Slate 50) -> `#ffffff` (White) cards
-   **Text**: `#0f172a` (Slate 900) / `#475569` (Slate 600)
