# Product Requirements Document

## Brennan K.A. Pollock - Digital Transmission Portfolio

### Vision Statement

Create a living, breathing digital artifact that functions as both portfolio and art piece - a haunted broadcast from the liminal space between analog decay and digital permanence. This is not a website; it's a transmission intercepted, a ghost in the machine, a meditation disguised as a portfolio.

---

## Core Concept: The Broadcast Paradigm

The site exists as a **perpetual broadcast** - visitors don't browse, they tune in. Each visit is catching a transmission mid-stream, creating the uncanny feeling of stumbling upon something that exists whether you're watching or not.

### Philosophical Framework

- **Anti-Portfolio**: The site demonstrates capability through its existence, not through case studies
- **Temporal Hauntology**: Nostalgic for a future that never was - what if the internet evolved from public access television?
- **Digital Séance**: The degraded video background creates parasocial intimacy through static and distance
- **Slow Web Manifesto**: Resists instant gratification; demands presence and patience

---

## Technical Architecture

### Framework Decision

**Next.js 14+ with App Router**

- Server Components for initial load performance with video backgrounds
- Built-in image/video optimization crucial for mobile experience
- API routes for future mobile content syncing
- Edge runtime compatibility for global performance

### Core Stack

- **Next.js 14+** - App Router, Server Components, API Routes
- **Tailwind CSS v4** - With custom configuration for glitch effects
- **Framer Motion** - For subtle, organic animations
- **MDX** - For content that can be written on mobile and synced
- **Cloudinary or similar** - For video CDN and on-the-fly optimization
- **GitHub API** - For mobile content updates via GitHub mobile app

### Mobile Content Workflow

1. Write content in markdown files via GitHub mobile app
2. Commit triggers rebuild on Vercel
3. MDX processes content with custom components
4. Content appears as new "transmission"

---

## Design Language

### Visual Hierarchy

```
BACKGROUND LAYER (0): Looping video - degraded, abstract, atmospheric
INTERFERENCE LAYER (1): CRT scanlines, chromatic aberration, noise
CONTENT LAYER (2): Text and interactive elements
TEMPORAL LAYER (3): Date stamps, channel indicators, ephemeral UI
```

### Typography System

- **Primary**: Custom monospace or IBM Plex Mono
- **Characteristics**:
  - Subtle RGB channel separation on hover
  - Occasional character "glitches" - random transforms
  - Breathing effect - subtle scale pulsing (0.98-1.02)
  - Magnetic field distortion near cursor

### Color Palette

```css
--signal-white: #e8e3d3; /* Phosphor burn */
--static-gray: #7a7265; /* CRT gray */
--interference-green: #7ed321; /* Terminal green */
--ghost-blue: #4a90e2; /* Electron blue */
--degradation-red: #d0021b; /* Magnetic bleed */
--void-black: #0a0908; /* Deep CRT black */
--holographic: ; /* Iridescent gradient */
```

### Animation Philosophy

- **Organic Timing**: Nothing snaps - everything drifts (2-4s transitions)
- **Perpetual Motion**: Subtle, constant movement like breathing
- **Interference Patterns**: Random glitches every 20-30 seconds
- **Cursor Influence**: Elements subtly react to cursor proximity

---

## Content Architecture

### Channel System

Each "channel" represents a different aspect of identity:

- **CHANNEL 01**: Engineering transmissions (code, projects)
- **CHANNEL 02**: Poetic frequencies (written work)
- **CHANNEL 03**: Visual static (photography, design)
- **CHANNEL 04**: Audio waves (music, sound experiments)
- **CHANNEL 05**: Sacred disruptions (theological work, past life)
- **CHANNEL 00**: Dead air (about, contact, void)

### Navigation Paradigm

- **Arrow Keys**: Channel switching (← →)
- **Space Bar**: Toggle "SPACE MODE" (alternate reality)
- **Escape**: Return to static
- **Numbers 0-5**: Direct channel access
- **Mouse Wheel**: Temporal scrolling within channel

### Content Types

#### Transmissions (Blog Posts)

- Appear as intercepted messages
- Timestamp indicates "broadcast time"
- Can decay over time (older posts get more distorted)
- Mobile-written via markdown

#### Artifacts (Portfolio Pieces)

- Presented as "recovered data"
- Each has corruption level (0-100%)
- Higher corruption = older/more experimental work
- Includes: code, visuals, audio, video

#### Frequencies (Real-time elements)

- Live GitHub commit feed styled as incoming signals
- Current listening (Spotify API) as audio wavelength
- Weather in Venice Beach as atmospheric interference

---

## Core Features

### 1. Living Background System

```javascript
// Pseudocode for background behavior
const backgroundModes = {
  default: "degraded-portrait-loop.mp4",
  space: "cosmic-interference.mp4",
  night: "static-dreams.mp4", // 10pm-6am
  error: "pure-static.mp4", // 404 states
};
```

### 2. Glitch Typography Engine

- Custom CSS animations for character-level distortions
- React component wrapping text with random glitch timing
- Mobile-optimized performance (reduce on low-end devices)

### 3. Channel Memory

- LocalStorage persists last viewed channel
- Cookie stores "transmission frequency" (user preferences)
- Return visitors see "WELCOME BACK" static burst

### 4. Mobile Content Sync

- GitHub webhook endpoint at `/api/sync`
- Markdown files in `/transmissions` directory
- Automatic rebuild on new content
- Optional: SMS to markdown via Twilio

### 5. Temporal Responses

- Different content/styling based on:
  - Time of day (night mode after 10pm)
  - Day of week (weekend aesthetic)
  - Season (color temperature shifts)
  - Lunar phase (hidden easter egg content)

---

## Responsive Design Strategy

### Mobile-First Through Constraint

- Single column layout always
- Touch gestures for channel navigation
- Swipe up/down for content, left/right for channels
- Video backgrounds become still frames on low bandwidth
- Reduced animation complexity on mobile

### Breakpoint Philosophy

```css
/* No traditional breakpoints - only capability queries */
@media (hover: hover) {
  /* Desktop enhancements */
}
@media (prefers-reduced-motion) {
  /* Accessibility */
}
@supports (backdrop-filter: blur(10px)) {
  /* Progressive enhancement */
}
```

---

## Performance Targets

### Metrics

- **LCP**: < 2.5s (even with video)
- **FID**: < 100ms
- **CLS**: < 0.1
- **Video Size**: < 2MB per loop
- **Mobile Data**: Graceful degradation under 1MB

### Optimization Strategies

- Aggressive video compression (aim for artifact aesthetic)
- CSS-only effects where possible
- Lazy load channels not in view
- Service worker for offline "static" experience

---

## Accessibility Considerations

### Hidden Accessibility Layer

- Semantic HTML underneath the aesthetic
- Screen reader "broadcast transcript" mode
- Keyboard navigation fully functional
- "CLEAR SIGNAL" mode - removes all effects via toggle

### Contrast Modes

- Default: Low contrast (artistic)
- Focus: High contrast appears on tab navigation
- Accessible: URL parameter `?signal=clear` for full clarity

---

## Content Management

### File Structure

```
/transmissions
  /channel-01-engineering
    2024-11-15-ghost-in-the-shell.mdx
    2024-11-20-recursive-dreams.mdx
  /channel-02-poetry
    venetian-static.mdx
    episcopal-interference.mdx
/artifacts
  /code
  /visual
  /audio
/static
  /videos
    background-loops/
  /shaders
    crt-effect.glsl
    chromatic-aberration.glsl
```

### Mobile Writing Workflow

1. Open GitHub mobile app
2. Navigate to `/transmissions`
3. Create new `.mdx` file
4. Write in markdown with front matter:

```yaml
---
channel: 02
title: "Midnight Transmission"
corruption: 15
timestamp: "2024-11-15T03:33:33Z"
---
```

5. Commit triggers Vercel rebuild
6. Content appears on site within minutes

---

## Easter Eggs & Hidden Depths

### Secret Channels

- **CHANNEL 666**: Glitch art experiments
- **CHANNEL 404**: Beautiful error states
- **CHANNEL π**: Infinite generative poetry

### Konami Code

Entering the Konami code reveals "DIRECTOR'S COMMENTARY" mode

### Time-Based Secrets

- 3:33 AM: Ghost mode activated
- Full moon: Lycanthropic typography
- Your birthday: Special transmission

### URL Experiments

- `/?tune=random` - Random channel on each refresh
- `/?year=1985` - Retrograde filter intensity
- `/?corruption=100` - Full signal decay

---

## Implementation Phases

### Phase 1: Foundation (Week 1)

- Next.js setup with Tailwind v4
- Basic channel architecture
- Video background system
- Core typography with glitch effects

### Phase 2: Transmission (Week 2)

- MDX integration
- GitHub webhook for content
- Channel navigation system
- Mobile gesture support

### Phase 3: Interference (Week 3)

- Advanced CSS effects
- Temporal responses
- Performance optimization
- Accessibility layer

### Phase 4: Broadcast (Week 4)

- Content population
- Easter eggs
- Final tuning
- Deployment

---

## Success Metrics

### Artistic Success

- Visitors spend >3 minutes average (meditation achieved)
- No bounce rate concerns (confusion is intentional)
- Screenshots shared on Are.na and Cosmos.so
- Described as "haunting," "uncanny," "beautiful"

### Technical Success

- Lighthouse score >90 despite video
- Smooth 60fps animations on mobile
- <3 second load time globally
- Zero CLS despite constant movement

### Personal Success

- Can update from iPhone without friction
- Site feels alive, not static
- Stands apart from typical portfolios
- Exists as art piece independent of career function

---

## Anti-Patterns to Avoid

### What This Site Is NOT

- ❌ No hero sections
- ❌ No call-to-action buttons
- ❌ No testimonials or social proof
- ❌ No project case studies
- ❌ No "Contact Me" forms
- ❌ No loading spinners
- ❌ No newsletter popups
- ❌ No cookie banners
- ❌ No social media icons
- ❌ No SEO optimization
- ❌ No analytics tracking
- ❌ No portfolio grid
- ❌ No smooth scroll
- ❌ No gradient blobs
- ❌ No particle effects

---

## Final Notes

### The Paradox

This site succeeds by failing conventional metrics. It's hostile to conversion, antagonistic to clarity, and allergic to best practices. Yet it demonstrates technical mastery through deliberate degradation, artistic vision through obscurity, and personality through absence.

### The Invitation

Visitors aren't users - they're participants in a transmission. The site doesn't serve content; it broadcasts continuously into the void. Whether anyone's receiving is irrelevant to its existence.

### The Memory

Like the best art, it should haunt. Weeks later, visitors should remember the feeling more than the content - the sense of intercepting something not meant for them, beautiful in its decay, eternal in its transience.

---

## Technical Addendum for Claude Code

### Environment Setup

```bash
npx create-next-app@latest brennan-transmission --typescript --tailwind --app
cd brennan-transmission
npm install framer-motion @mdx-js/loader @mdx-js/react
npm install -D @types/node
```

### Critical Implementation Notes

1. **Video Background**: Use `<video>` with `muted`, `autoplay`, `loop`, `playsInline` attributes. Multiple sources for compatibility.

2. **CRT Effect**: Pure CSS using `::before` and `::after` pseudo-elements with animated linear-gradients for scanlines.

3. **Glitch Text**: Create `<GlitchText>` component using Framer Motion with random animation delays per character.

4. **Channel System**: Use Next.js App Router with dynamic routes `/channel/[id]` and parallel routes for smooth transitions.

5. **Mobile Sync**: API route at `/api/webhook/github` to receive push events and trigger revalidation.

6. **Performance**: Implement `next/dynamic` for heavy components, use CSS transforms for animations (not position changes), implement facade pattern for video loading.

7. **Accessibility**: Hidden skip links, preserve semantic structure, ensure focus indicators work despite low contrast design.

Remember: This is not a website. It's a broadcast. Build accordingly.
