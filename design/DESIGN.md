# DESIGN.md

## Overview

This document captures the implementation-facing design specification for the CV / portfolio website represented by the provided desktop and mobile reference images.

The intended output is a premium, modern, responsive personal CV website for **Jc Cloete**, optimized for:
- strong first-impression hero branding
- elegant professional presentation
- high readability
- clear information hierarchy
- polished desktop and mobile responsiveness
- lightweight, premium visual treatment rather than noisy effects

This spec should be used together with the provided **desktop** and **mobile** reference images, which are the primary visual source of truth for composition and style.

## Product Intent

### Positioning
A premium personal website / CV landing page for a senior software developer.

### Tone
- polished
- modern
- intelligent
- calm
- premium
- minimal but not sterile
- slightly creative / distinctive
- soft spring aesthetic rather than hard corporate austerity

### Core Personality
The design balances:
- executive professionalism
- approachable human warmth
- modern product-design literacy
- engineering credibility

## Page Structure

The page is a single long-form landing page with the following sections in order:

1. Header / Navigation
2. Hero
3. Compact Stats
4. Key Achievements
5. Professional Summary
6. Professional Experience
7. Technical Skills

Desktop and mobile preserve the same content hierarchy, but mobile reflows into a narrower single-column layout.

---

## Content Model

### Identity
- Name: **Jc Cloete**
- Role: **Senior Software Developer**

### Main Sections
The section titles should be exactly:
- `Key Achievements`
- `Professional Summary`
- `Professional Experience`
- `Technical Skills`

### Hero CTA Labels
- `VIEW MY WORK`
- `GET IN TOUCH`

### Stats / Summary Highlights
Desktop and mobile both surface:
- years of experience
- projects delivered
- technologies

### Suggested Metadata
Use implementation-friendly placeholder values unless real values are supplied later:
- location
- email
- phone
- LinkedIn URL

These should be easy to swap via data/config.

---

## Visual System

## Design Direction Summary

The visual design is defined by:
- soft white background
- pale lavender / violet accents
- dark navy primary text and CTA
- very light card surfaces
- subtle rounded corners
- premium, airy spacing
- restrained shadows
- cherry blossom hero atmosphere
- editorial-quality typography with strong headline presence

The site should feel refined and expensive without looking flashy.

---

## Design Tokens

The exact colors in the generated references are approximate. Use the following token system as implementation guidance.

## Color Tokens

### Base
```css
--color-bg: #F7F7FA;
--color-surface: #FFFFFF;
--color-surface-soft: #FBFBFE;
--color-surface-muted: #F2F3F8;
--color-border: #E7E8F1;
--color-border-soft: #EFF0F6;
```

### Text
```css
--color-text-primary: #131B3A;
--color-text-secondary: #4B5576;
--color-text-muted: #7B84A3;
--color-text-inverse: #FFFFFF;
```

### Brand / Accent
```css
--color-accent-primary: #6A63FF;
--color-accent-primary-soft: #ECE9FF;
--color-accent-secondary: #8E7DFF;
--color-accent-pink: #F05DD7;
--color-accent-pink-soft: #FBE6F7;
--color-accent-blue: #5B8DFF;
--color-accent-blue-soft: #E9F1FF;
--color-accent-orange: #FF9D2D;
--color-accent-orange-soft: #FFF0DE;
```

### CTA / Dark UI
```css
--color-cta-bg: #101A46;
--color-cta-bg-hover: #0C1438;
--color-cta-text: #FFFFFF;
```

### Status / Utility
```css
--color-success: #33C16B;
--color-success-soft: #E7F8EE;
```

## Shadows

Keep shadows soft and restrained.

```css
--shadow-sm: 0 4px 18px rgba(17, 24, 39, 0.05);
--shadow-md: 0 10px 30px rgba(17, 24, 39, 0.08);
--shadow-lg: 0 20px 60px rgba(17, 24, 39, 0.10);
```

Use shadows only on:
- floating cards
- hero stat card
- compact stat row
- primary panels
- subtle button elevation

Do not use harsh shadows.

## Radius

```css
--radius-xs: 8px;
--radius-sm: 12px;
--radius-md: 16px;
--radius-lg: 20px;
--radius-xl: 24px;
--radius-pill: 999px;
```

Suggested usage:
- chips: pill
- buttons: pill or 16px
- cards: 16px to 20px
- large panels: 20px to 24px

## Spacing Scale

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

The references are generous with spacing. Favor more breathing room over density.

---

## Typography

## Font Strategy

Use a premium contemporary sans-serif with excellent readability and rounded-modern character.

Recommended stack:
1. **Inter**
2. **Plus Jakarta Sans**
3. **Manrope**
4. system fallback

Best fit:
- **Inter** for implementation simplicity
- **Plus Jakarta Sans** if a slightly more premium and softer look is desired

### Suggested CSS
```css
font-family: "Inter", "Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

## Type Tokens

### Hero Eyebrow
```css
font-size: 18px;
line-height: 1.3;
font-weight: 500;
letter-spacing: -0.01em;
```

### Hero Name
Desktop:
```css
font-size: clamp(56px, 6vw, 88px);
line-height: 0.95;
font-weight: 600;
letter-spacing: -0.04em;
```

Mobile:
```css
font-size: clamp(42px, 11vw, 64px);
line-height: 0.95;
font-weight: 600;
letter-spacing: -0.04em;
```

### Hero Role
```css
font-size: 28px desktop;
font-size: 20px mobile;
line-height: 1.2;
font-weight: 500;
letter-spacing: -0.02em;
```

### Section Heading
```css
font-size: 36px desktop;
font-size: 28px mobile;
line-height: 1.15;
font-weight: 600;
letter-spacing: -0.03em;
```

### Card Title
```css
font-size: 20px;
line-height: 1.25;
font-weight: 600;
letter-spacing: -0.02em;
```

### Body Large
```css
font-size: 18px;
line-height: 1.65;
font-weight: 400;
```

### Body Standard
```css
font-size: 16px;
line-height: 1.65;
font-weight: 400;
```

### Small / Metadata
```css
font-size: 14px;
line-height: 1.5;
font-weight: 500;
```

### Tiny Labels
```css
font-size: 12px;
line-height: 1.4;
font-weight: 600;
letter-spacing: 0.02em;
text-transform: none;
```

## Typography Notes
- Headlines should feel large and elegant.
- Avoid overly bold text outside hero and section titles.
- Secondary text should remain readable and never too light.
- Letter spacing should be slightly tightened for major headings.

---

## Layout System

## Max Width
Desktop content container:
```css
max-width: 1440px;
```

Inner reading/content width:
```css
max-width: 1240px;
```

## Grid
Desktop:
- 12-column grid for main content alignment
- sections can use nested grids
- hero should feel wide and cinematic

Mobile:
- single-column layout
- 16px to 24px outer padding
- stack all cards vertically
- preserve clear visual grouping

## Desktop Page Padding
```css
padding-inline: 32px to 48px;
padding-block: 24px to 96px depending on section;
```

## Mobile Page Padding
```css
padding-inline: 16px to 20px;
padding-block: 16px to 32px;
```

---

## Header / Navigation

## Desktop Header
Structure:
- left: `J·C` logo / monogram
- center/right: nav links
- rightmost: dark rounded `DOWNLOAD CV` button

Desktop nav items in reference:
- ABOUT
- EXPERIENCE
- SKILLS
- PROJECTS
- CONTACT

Implementation guidance:
- header overlays hero
- transparent or lightly frosted background
- sticky behavior optional
- use subtle blur only if performance remains good

### Header Tokens
```css
height: 80px desktop;
```

### Nav Styling
- uppercase or semi-uppercase appearance is acceptable
- small font size
- medium weight
- wide spacing
- restrained hover state with color transition only

## Mobile Header
Structure:
- left: `J·C`
- right: hamburger icon
- no full nav visible by default

Behavior:
- menu opens slide-down sheet or drawer
- keep motion subtle and fast

---

## Hero Section

## Purpose
The hero must immediately establish:
- identity
- profession
- premium tone
- visual uniqueness

## Visual Composition
Desktop reference:
- large scenic background using the provided hero image
- left side: standing portrait pose
- right side: seated portrait pose under blossoms
- text placed center-left
- floating stat card on right
- availability badge on lower-right
- light airy atmosphere

Mobile reference:
- recomposed to a narrower crop
- standing figure remains dominant
- seated figure may be omitted or heavily de-emphasized
- text stacks above CTA
- hero becomes a contained vertical panel

## Hero Content Order
1. Eyebrow: `Hello, I'm`
2. Name: `Jc Cloete`
3. Role: `Senior Software Developer`
4. small pill: `10+ Years Experience`
5. short intro paragraph
6. CTA row
7. compact stats

## Hero Background Treatment
Use the supplied hero image as background / artwork source.

Recommended overlay treatment:
```css
background:
  linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05)),
  linear-gradient(90deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.55) 42%, rgba(255,255,255,0.08) 100%);
```

The goal is:
- preserve photography
- ensure text legibility
- avoid washing out blossoms entirely

## Hero Layout Notes
Desktop:
- hero height approx 760px to 940px depending on implementation
- name can wrap naturally if needed
- stat card floats right
- availability pill floats near lower-right

Mobile:
- hero becomes a tall card / section
- copy and CTA above or beside portrait crop
- use the most legible crop rather than trying to preserve every desktop element

---

## Buttons

## Primary Button
Used for:
- `VIEW MY WORK`

Style:
- dark navy background
- white text
- pill shape
- medium-large horizontal padding
- optional subtle icon on right

Suggested token:
```css
min-height: 56px;
padding: 0 28px;
border-radius: 999px;
font-size: 16px;
font-weight: 600;
```

## Secondary Button
Used for:
- `GET IN TOUCH`

Style:
- white or very light surface
- subtle border
- dark text
- pill shape
- optional icon on right

Hover behavior:
- slight lift or background tint
- no aggressive animations

---

## Chips / Pills / Micro-UI

Used for:
- years experience pill
- skill tags
- experience technology tags
- summary attributes
- availability badge

Style:
- soft background fill
- subtle border
- rounded pill
- small-medium text
- low-contrast but readable

Examples:
- lavender soft fill for highlighted chip
- white surface + border for neutral chip
- success dot inside availability pill

---

## Compact Stats Row

## Desktop
Can appear as:
- floating compact card row
- integrated strip under hero
- three stat units:
  - `10+ Years Experience`
  - `45+ Projects Delivered`
  - `30+ Technologies`

## Mobile
The reference uses a three-column compact card directly under hero.
Keep this pattern.

Style:
- white floating card
- rounded corners
- soft shadow
- icon + number + label
- equal-width columns
- thin dividers optional

---

## Section Styling

Each major section sits in a rounded panel or clearly bounded area with:
- white or near-white card background
- soft border
- subtle shadow only when necessary
- generous internal padding

### Section Spacing
Desktop:
```css
padding: 32px to 40px;
gap: 24px to 32px;
```

Mobile:
```css
padding: 20px to 24px;
gap: 16px to 20px;
```

---

## Key Achievements

## Structure
Title row:
- left: section title
- right: optional `View all`

Cards:
- 4 metrics
  - `40%+`
  - `1M+`
  - `45+`
  - `99.9%`

Each card contains:
- colored circular icon badge
- large metric
- short title
- short descriptive copy

## Desktop Layout
4-column row.

## Mobile Layout
Can be:
- 2x2 grid
- horizontal snap cards
- stacked cards

The provided mobile reference approximates a tight multi-card layout.
Implementation may simplify to 2 columns for readability.

## Achievement Card Style
- white surface
- pale border
- rounded 16px to 20px
- icon badge with tinted background matching metric accent
- metric text in accent color
- short copy in smaller muted text

---

## Professional Summary

## Structure
Desktop reference contains:
- left: descriptive paragraph + summary chips
- middle/right: progress bars
- right: decorative stacked 3D lavender illustration

## Implementation Guidance
This section should communicate:
- architecture ability
- scalability
- leadership
- problem solving

### Progress Bars
Suggested labels:
- Architecture & Design — 95%
- System Scalability — 90%
- Team Leadership — 85%
- Problem Solving — 95%

Style:
- thin horizontal bar
- lavender / violet fill
- muted track
- right-aligned numeric percentage

### Decorative Illustration
The stacked translucent lavender illustration is purely decorative.
Implementation options:
1. static PNG / SVG asset
2. CSS layered squares with blur / gradients
3. omit on smaller mobile if layout becomes cramped

If omitted, preserve spacing and let progress bars carry the section visually.

---

## Professional Experience

## Purpose
Communicate progression over time with a clean vertical timeline.

## Structure
Three entries:
1. Senior Software Developer
2. Software Developer
3. Junior Developer

Each entry includes:
- date range
- role
- company
- location
- 2–3 concise bullets
- technology tags

## Desktop Layout
- timeline marker column on left
- content cards in main body
- optional side panel summary card

## Mobile Layout
- single-column stacked cards
- timeline line can remain on far left
- each card should remain clean and not become cramped
- technology tags may wrap under bullet list

## Experience Card Style
- white surface
- thin border
- rounded 16px
- soft internal padding
- small company icon block on left
- metadata above bullets
- technology pills aligned to bottom/right or below content

## Timeline Style
- thin vertical lavender line
- circular milestone markers
- year labels in accent color

Avoid over-decoration.

---

## Technical Skills

## Purpose
Provide a scannable overview rather than exhaustive skill dump.

## Desktop Reference
Skills are grouped by category with dot indicators.

## Mobile Reference
Skills are presented as stacked expandable-style rows with:
- icon
- category name
- dot ratings
- chevron

## Recommended Categories
- Languages
- Frontend
- Backend
- DevOps & Cloud
- Tools & Others

## Recommended Implementations
### Option A — Static rows
Use single-line category rows with dots and a chevron visual.

### Option B — Collapsible accordion
Expand to show actual skills under each category.

This is likely the best production implementation.

## Skill Dots
Use 10-dot scale.
Example:
- filled dots: accent purple
- unfilled dots: pale lavender / border-only

---

## Iconography

## Style
- thin line icons
- modern rounded stroke
- light and refined
- avoid heavy filled icon sets

Recommended libraries:
- Lucide
- Phosphor
- Heroicons (outline)

Icons are used for:
- stats
- achievements
- skill categories
- contact metadata
- availability badge
- section decoration

---

## Imagery

## Source of Truth
The provided desktop and mobile images are visual references and should be treated as the source for:
- overall tone
- crop behavior
- layout composition
- spacing feel
- color mood

## Hero Photography Usage
Use the supplied image(s) directly if rights permit.

Desktop:
- preserve both portrait compositions if possible

Mobile:
- prioritize the standing portrait crop and blossom atmosphere

## Image Treatment
- soft, luminous
- minimal saturation increase
- no gritty filters
- no dark dramatic overlays
- preserve blossoms and sky softness

---

## Responsive Behavior

## Breakpoints
Suggested:
```css
--bp-sm: 640px;
--bp-md: 768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
```

## Responsive Rules

### >= 1280px
- full desktop composition
- hero split balance
- floating stat card
- wide grid sections

### 1024px–1279px
- simplify some secondary floating elements
- keep 2-column / 12-col structure where possible

### 768px–1023px
- shift toward stacked layout
- reduce hero typography slightly
- reduce empty space

### < 768px
- mobile view
- stack everything
- single-column cards
- simpler header
- hero crop optimized for portrait
- fewer floating decorations

---

## Motion / Interaction

Motion should be subtle, premium, and brief.

## Recommended Motion
- fade + slight upward reveal on section entrance
- button hover with tiny lift
- chip hover tint
- progress bars animate once on initial viewport entry
- mobile menu slide/fade

## Motion Tokens
```css
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
--duration-fast: 160ms;
--duration-medium: 260ms;
--duration-slow: 420ms;
```

## Avoid
- parallax heavy effects
- large springy bounces
- flashy hover explosions
- overly long page reveal animations

---

## Accessibility

## Contrast
Keep text contrast comfortably readable.
Do not let pastel styling reduce usability.

## Targets
- buttons minimum height 44px, ideally 48px+
- mobile interactive rows minimum 44px

## Focus States
Use visible focus rings in lavender / blue.

## Semantics
- use real headings in descending order
- buttons vs links used correctly
- nav landmarks
- section labels
- meaningful alt text for imagery

---

## Recommended Tech Stack for Implementation

Any modern frontend stack is viable.

Most natural implementation options:
- Next.js + React
- Tailwind CSS
- Framer Motion for subtle entrance animation
- Lucide icons

## Tailwind Mapping Suggestions
Create semantic classes or a design token layer rather than scattering raw utility values everywhere.

Recommended pattern:
- global CSS variables for tokens
- Tailwind config maps semantic colors
- component-level abstractions for:
  - Button
  - StatCard
  - AchievementCard
  - SectionShell
  - TimelineItem
  - SkillGroup
  - Chip
  - MobileMenu

---

## Component Inventory

### Core Components
- `SiteHeader`
- `HeroSection`
- `HeroStatCard`
- `CompactStatsRow`
- `SectionShell`
- `AchievementCard`
- `SummaryPanel`
- `ProgressMetric`
- `ExperienceTimeline`
- `ExperienceItem`
- `SkillAccordion`
- `SkillDots`
- `Footer` (optional if later added)

### Utility Components
- `Pill`
- `IconBadge`
- `CTAButton`
- `SectionTitle`
- `TagList`

---

## Implementation Notes for Codex

## Priorities
1. Match the supplied desktop and mobile visuals closely.
2. Preserve the premium spacing and softness.
3. Keep implementation clean and maintainable.
4. Use semantic tokens and reusable components.
5. Make responsive behavior feel intentional, not merely collapsed.

## Important Constraints
- Do not drift into generic SaaS dashboard aesthetics.
- Do not make it too corporate-dark or too playful.
- Do not overuse glassmorphism.
- Do not over-round everything to cartoon levels.
- Do not compress spacing aggressively on desktop.
- Do not let mobile become cramped.

## Acceptable Simplifications
If time-constrained, preserve the following first:
- header
- hero
- CTA row
- compact stats
- section shells
- achievement cards
- timeline
- skills rows

Decorative elements that can be simplified:
- floating right hero card
- decorative line flourishes
- 3D stacked illustration
- some minor chip / micro-icon details

---

## Suggested File / Styling Architecture

Example:
```text
/app
  /components
    SiteHeader.tsx
    HeroSection.tsx
    CompactStatsRow.tsx
    AchievementGrid.tsx
    SummarySection.tsx
    ExperienceSection.tsx
    SkillsSection.tsx
    ui/
      Button.tsx
      Card.tsx
      Chip.tsx
      SectionTitle.tsx
      SkillDots.tsx
  /styles
    tokens.css
    globals.css
```

---

## Desktop-Specific Notes

- Header should feel light and clean over the hero image.
- Hero should be expansive.
- Name should be very large and commanding.
- Right-side blossoms should remain visible.
- Floating stat card should not overlap text.
- Experience section can afford more horizontal breathing room.
- Technical skills can remain condensed and elegant.

## Mobile-Specific Notes

- Mobile should not merely scale down desktop.
- Recompose hero intentionally.
- Keep the portrait dominant and readable.
- Buttons should sit comfortably side-by-side only if they fit; otherwise stack.
- Compact stat row should remain immediately visible after hero.
- Experience cards should be concise and legible.
- Skills should likely use accordions or dense summary rows.

---

## Copy Guidance

Until final real resume copy is supplied, use concise implementation placeholders aligned to the visual reference.

Avoid:
- long paragraphs
- generic buzzword spam
- dense bullet walls

Prefer:
- sharp concise bullets
- measurable impact
- scannable structure

---

## Final Acceptance Criteria

The implementation is successful if:
- it clearly resembles the provided desktop and mobile references
- it feels premium and modern
- the desktop hero has strong visual identity
- the mobile version feels intentionally redesigned
- typography is elegant and readable
- cards, spacing, and accents match the soft lavender premium aesthetic
- sections are easy to scan
- the page works responsively without awkward collapse

---

## Asset Handoff Notes

Codex should be given:
1. this `DESIGN.md`
2. desktop reference image
3. mobile reference image

These three items together should be treated as the design source of truth.

When ambiguity exists:
- the images win for visual composition
- this document wins for implementation intent, structure, and tokenization
