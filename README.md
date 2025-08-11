# BKAP - Digital Transmission

> This is not a portfolio. This is not a website. This is a perpetual broadcast.

Brennan K.A. Pollock's digital transmission portfolio - a subversive art piece disguised as a portfolio site that functions as a perpetual broadcast rather than a traditional website. Built with an anti-portfolio philosophy emphasizing temporal hauntology and digital séance aesthetics.

## Architecture

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS v4 with custom glitch effects  
- **Animation**: Framer Motion for organic, breathing animations
- **Content**: MDX for mobile-written transmissions
- **Video**: Background video loops with degraded aesthetic
- **Navigation**: Channel-based system (CHANNEL 00-05) with keyboard shortcuts

## Channel System

- **CHANNEL 00**: Dead air (about, contact, void)
- **CHANNEL 01**: Engineering transmissions (code, projects)  
- **CHANNEL 02**: Poetic frequencies (written work)
- **CHANNEL 03**: Visual static (photography, design)
- **CHANNEL 04**: Audio waves (music, sound experiments)
- **CHANNEL 05**: Sacred disruptions (theological work)

## Development

```bash
npm install      # Install dependencies
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
   channel: "02"
   title: "Midnight Transmission"
   corruption: 15
   timestamp: "2024-11-15T03:33:33Z"
   ---
   ```
3. Commit triggers rebuild
4. Content appears as new transmission

### File Structure

```
/transmissions/
  /channel-00-dead-air/
  /channel-01-engineering/
  /channel-02-poetry/
  /channel-03-visual/
  /channel-04-audio/
  /channel-05-sacred/
/artifacts/
  /code/
  /visual/
  /audio/
/public/
  /videos/background-loops/
  /shaders/
```

## Design Philosophy

### Anti-Patterns (Intentionally Avoided)
- No hero sections, CTAs, testimonials, case studies
- No loading spinners, popups, cookie banners  
- No traditional portfolio grids or smooth scroll
- No SEO optimization or analytics tracking

### Core Principles
- Visitors don't browse, they tune in
- Content should feel intercepted, not served
- Aesthetic degradation is intentional
- Confusion and friction are features, not bugs
- The site exists whether anyone's watching or not

## Navigation

- **Arrow Keys**: Channel navigation
- **Number Keys (0-5)**: Direct channel access
- **ESC**: Return to channel selector
- **?signal=clear**: High contrast mode (accessibility)

## Performance Targets

- LCP < 2.5s (even with video)
- FID < 100ms
- CLS < 0.1
- Video size < 2MB per loop

## Accessibility

- Semantic HTML underneath aesthetic layers
- Screen reader "broadcast transcript" mode
- Keyboard navigation support
- High contrast option via URL parameter

---

**STATUS**: BROADCASTING  
**SIGNAL**: STRONG  
**CORRUPTION**: MINIMAL