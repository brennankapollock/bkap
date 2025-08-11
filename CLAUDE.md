# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "bkap" - Brennan K.A. Pollock's digital transmission portfolio. A
that functions as a perpetual broadcast rather than a traditional website. Built with an anti-portfolio philosophy emphasizing temporal hauntology and digital séance aesthetics.

## Architecture

Based on the PRD, this will be a Next.js 14+ application with:

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS v4 with custom glitch effects
- **Animation**: Framer Motion for organic, breathing animations
- **Content**: MDX for mobile-written transmissions
- **Video**: Background video loops with degraded aesthetic
- **Navigation**: Channel-based system (CHANNEL 00-05) with keyboard shortcuts

### Channel System

- **CHANNEL 00**: Dead air (about, contact, void)
- **CHANNEL 01**: Engineering transmissions (code, projects)
- **CHANNEL 02**: Poetic frequencies (written work)
- **CHANNEL 03**: Visual static (photography, design)
- **CHANNEL 04**: Audio waves (music, sound experiments)
- **CHANNEL 05**: Sacred disruptions (theological work)

### Key Components

- Living background system with multiple video modes
- Glitch typography engine with character-level distortions
- Channel memory via localStorage
- Mobile content sync via GitHub webhooks
- Temporal responses based on time/date

## Development Commands

_Note: This appears to be a greenfield project with only the PRD. Development commands will need to be established during initial setup._

When the project is initialized with Next.js:

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
npm run type-check # TypeScript checking
```

## Content Management

### Mobile Writing Workflow

1. Write content in `/transmissions` directory via GitHub mobile app
2. Use `.mdx` format with frontmatter:

   ```yaml
   ---
   channel: 02
   title: "Midnight Transmission"
   corruption: 15
   timestamp: "2024-11-15T03:33:33Z"
   ---
   ```

3. Commit triggers Vercel rebuild
4. Content appears as new transmission

### File Structure

```
/transmissions/
  /channel-01-engineering/
  /channel-02-poetry/
  etc.
/artifacts/
  /code/
  /visual/
  /audio/
/static/
  /videos/background-loops/
  /shaders/
```

## Design Principles

### Anti-Patterns to Avoid

- No hero sections, CTAs, testimonials, case studies
- No loading spinners, popups, cookie banners
- No traditional portfolio grids or smooth scroll
- No SEO optimization or analytics tracking

### Performance Targets

- LCP < 2.5s (even with video)
- FID < 100ms
- CLS < 0.1
- Video size < 2MB per loop

### Accessibility

- Semantic HTML underneath aesthetic layers
- Screen reader "broadcast transcript" mode
- `?signal=clear` URL parameter for high contrast
- Keyboard navigation with arrow keys for channels

## Technical Implementation Notes

1. **Video Backgrounds**: Use `<video>` with `muted`, `autoplay`, `loop`, `playsInline`
2. **CRT Effects**: Pure CSS using pseudo-elements with animated linear-gradients
3. **Glitch Text**: Framer Motion component with random per-character delays
4. **Channel Routes**: Dynamic routes `/channel/[id]` with parallel routing
5. **Mobile Sync**: API route `/api/webhook/github` for push events
6. **Performance**: Use `next/dynamic`, CSS transforms, facade pattern for video loading

## Philosophy

This is not a website - it's a broadcast. Build with the understanding that:

- Visitors don't browse, they tune in
- Content should feel intercepted, not served
- Aesthetic degradation is intentional
- Confusion and friction are features, not bugs
- The site exists whether anyone's watching or not
