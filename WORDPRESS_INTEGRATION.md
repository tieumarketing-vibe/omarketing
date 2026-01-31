---
status: done
title: WordPress CMS Integration
---

# WordPress CMS Integration

## Objective
Link the Astro blog with the WordPress CMS (`lynnthestoryteller.wordpress.com`) to manage posts on WordPress and display them on the Astro website.

## Implementation Plan

### Phase 1: Data Fetching Layer
- [ ] Create `src/lib/wordpress.ts`
    - Implement `getPosts()` to fetch posts from `https://public-api.wordpress.com/rest/v1.1/sites/lynnthestoryteller.wordpress.com/posts/`
    - Implement `getPostBySlug(slug)`
    - Define TypeScript interfaces for WP Post objects.

### Phase 2: Homepage Integration
- [ ] Update `src/pages/index.astro`
    - Remove hardcoded `posts` array.
    - Use `getPosts()` to fetch real data.
    - Map WP data to `BlogCard` props.

### Phase 3: Single Post Page
- [ ] Create `src/pages/post/[slug].astro`
    - Use `getStaticPaths` (if SSG) or dynamic routing (if SSR). *Note: Astro default is SSG, so we will use `getStaticPaths` fetching all posts.*
    - Render post content using the HTML from WordPress.

### Phase 4: UI Adjustments
- [ ] Update `BlogCard.astro` if necessary to handle new data fields (e.g., featured image from WP).
- [ ] Ensure styles work with WP-generated HTML content in the single post view.

## Questions for User
- Do you want to generate pages at build time (SSG) or request time (SSR)? (Defaulting to SSG for performance).
- Do you want to keep the "Daily Dev Life" local posts or replace everything with WordPress posts?
