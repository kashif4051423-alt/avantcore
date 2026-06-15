# AvantCore Technology Website Redesign Specification
## Based on Systems Limited UI/UX Analysis

**Document Version:** 1.0  
**Date:** June 9, 2026  
**Target Platform:** React/Vite + TypeScript  
**Current Status:** Specification Document

---

## TABLE OF CONTENTS

1. [Executive Summary](#executive-summary)
2. [Website Structure Analysis](#website-structure-analysis)
3. [Design System Specification](#design-system-specification)
4. [Navigation Architecture](#navigation-architecture)
5. [Homepage Layout & Sections](#homepage-layout--sections)
6. [Internal Page Templates](#internal-page-templates)
7. [Component Library](#component-library)
8. [Animations & Interactions](#animations--interactions)
9. [Mobile Responsiveness](#mobile-responsiveness)
10. [Implementation Guide](#implementation-guide)
11. [File Structure](#file-structure)

---

## EXECUTIVE SUMMARY

This document outlines a comprehensive redesign of the AvantCore Technology website, inspired by the professional UI/UX patterns found on Systems Limited's website. The redesign maintains AvantCore's existing content and business information while adopting modern design language, improved information architecture, and enhanced user experience patterns.

### Key Improvements Over Current Design:
- **Professional Navigation**: Mega menus with organized service categories
- **Hero Section**: Dynamic, animated introduction with clear value proposition
- **Service Showcase**: Grid-based service cards with hover effects and CTAs
- **Statistics Section**: Animated counters showing key metrics
- **Trust Indicators**: Awards and partnerships display
- **Industry-focused**: Cards showing different industry verticals
- **Modern Interactions**: Smooth animations, scroll-triggered effects
- **Better Information Hierarchy**: Clear content organization across pages
- **Responsive Design**: Mobile-first approach with proper breakpoints

---

## WEBSITE STRUCTURE ANALYSIS

### Overall Information Architecture

```
Root
├── Home Page
├── Services
│   ├── Service Detail Pages
│   └── Sub-service Pages
├── Industries
│   └── Industry Detail Pages
├── Products
│   └── Product Detail Pages
├── About
│   ├── Company Overview
│   ├── Leadership Team
│   └── Our Story
├── News/Insights
│   ├── Blog
│   ├── Case Studies
│   └── Newsroom
├── Contact
├── Career
└── Legal
    ├── Privacy Policy
    ├── Terms & Conditions
    └── Cookie Policy
```

### Page Hierarchy Levels

**Level 1 (Top Navigation)**
- Home
- Services
- Industries
- Products
- About
- Insights/News
- Contact
- Careers

**Level 2 (Mega Menu Dropdowns)**
- Service Categories: Digital, Data & Analytics, Cloud, Security, etc.
- Industry Verticals: Banking, Retail, Healthcare, Communications, etc.
- Insights Types: Case Studies, Blogs, Newsroom, Whitepapers

**Level 3 (Detail Pages)**
- Individual service pages
- Industry-specific pages
- Product showcase pages
- Case study details

---

## DESIGN SYSTEM SPECIFICATION

### 1. COLOR PALETTE

The design uses a professional, trust-building color scheme suitable for B2B enterprise services:

#### Primary Colors
```
Primary Blue: #1e3a8a (Deep Blue - Main brand color)
Light Blue: #0f172a (Dark Navy - Text & Headers)
Accent Blue: #3b82f6 (Medium Blue - Interactive elements, CTAs)
Accent Orange: #f97316 (Orange - Highlights, emphasis)
```

#### Secondary Colors
```
White: #ffffff (Backgrounds, cards)
Light Gray: #f8fafc (Section backgrounds)
Medium Gray: #e2e8f0 (Borders, dividers)
Dark Gray: #475569 (Secondary text)
Text Gray: #64748b (Body text)
```

#### Usage Guidelines
- **Primary Blue (#1e3a8a)**: Hero sections, major headings, navigation backgrounds
- **Accent Blue (#3b82f6)**: Buttons, links, hover states, highlights
- **Orange (#f97316)**: CTAs, badges, emphasis elements, hover highlights
- **Light Gray (#f8fafc)**: Alternating section backgrounds
- **White**: Primary card backgrounds, content areas

#### Gradient Usage
- Hero sections: `linear-gradient(135deg, #1e3a8a → #0f172a)`
- Card hovers: `linear-gradient(135deg, #3b82f6 → #f97316)`
- Accent backgrounds: `linear-gradient(90deg, #3b82f6 → #06b6d4)`

### 2. TYPOGRAPHY SYSTEM

#### Font Stack
```
Primary Font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Backup: System fonts for maximum compatibility
```

#### Type Scale

```
H1 (Page Title)
- Size: 48px (Desktop), 36px (Tablet), 28px (Mobile)
- Weight: 700 (Bold)
- Line Height: 1.2
- Letter Spacing: -0.02em
- Color: #0f172a
- Use: Main page headings, hero titles

H2 (Section Title)
- Size: 36px (Desktop), 28px (Tablet), 24px (Mobile)
- Weight: 700
- Line Height: 1.3
- Letter Spacing: -0.01em
- Color: #0f172a
- Use: Major section headings, category titles

H3 (Subsection Title)
- Size: 24px (Desktop), 20px (Tablet), 18px (Mobile)
- Weight: 600 (Semibold)
- Line Height: 1.4
- Color: #1e3a8a
- Use: Card titles, subsection headers

H4 (Card/Module Title)
- Size: 18px (Desktop), 16px (Tablet), 14px (Mobile)
- Weight: 600
- Line Height: 1.5
- Color: #0f172a
- Use: Card headings, feature titles

Body Text (Regular)
- Size: 16px (Desktop), 15px (Tablet), 14px (Mobile)
- Weight: 400
- Line Height: 1.6
- Letter Spacing: 0.02em
- Color: #475569
- Use: Paragraph content, descriptions

Body Text (Small)
- Size: 14px (Desktop), 13px (Tablet), 12px (Mobile)
- Weight: 400
- Line Height: 1.5
- Color: #64748b
- Use: Secondary text, captions, metadata

CTA Text
- Size: 14px
- Weight: 600 (Semibold)
- Letter Spacing: 0.05em
- Text Transform: Uppercase
- Use: Button labels, links

Badge Text
- Size: 12px
- Weight: 600
- Letter Spacing: 0.1em
- Text Transform: Uppercase
- Color: #3b82f6 or #f97316
- Use: Category badges, labels

```

#### Font Weight Usage
- **400**: Body text, regular content
- **500**: Regular button text
- **600**: Semibold headings, card titles
- **700**: Bold headings, strong emphasis
- **800**: Extra bold (rare, for special highlights)

### 3. SPACING SYSTEM

#### Base Unit
The spacing system is built on 4px base unit:

```
4px (xs) - Micro spacing
8px (sm) - Tight spacing
12px (md) - Comfortable spacing
16px (lg) - Regular spacing
20px (xl) - Generous spacing
24px (2xl) - Spacious layout
32px (3xl) - Major section spacing
40px (4xl) - Large section spacing
48px (5xl) - Extra large spacing
56px (6xl) - Hero section spacing
64px (7xl) - Maximum section spacing

Mobile Padding: 16px (horizontal)
Tablet Padding: 24px (horizontal)
Desktop Padding: 32px-48px (horizontal container, max-width: 1280px)
```

#### Section Spacing
- Between sections: 64px (Desktop), 48px (Tablet), 32px (Mobile)
- Between cards: 24px (Grid gap)
- Card internal padding: 24px-32px

### 4. CARD DESIGN SYSTEM

#### Standard Card
```
Properties:
- Background: White
- Border Radius: 12px-16px
- Padding: 24px
- Box Shadow: 0 1px 3px rgba(0,0,0,0.08)
- Border: 1px solid #e2e8f0

Hover State:
- Box Shadow: 0 12px 24px rgba(0,0,0,0.12)
- Transform: translateY(-4px)
- Transition: 300ms ease
```

#### Featured/Premium Card
```
Properties:
- Background: Gradient (blue to orange)
- Color: White text
- Padding: 32px
- Border: None
- Box Shadow: 0 12px 24px rgba(59,130,246,0.2)

Hover State:
- Box Shadow: 0 16px 32px rgba(59,130,246,0.3)
- Scale: 1.02
```

#### Minimal Card (Blog/News)
```
Properties:
- Background: Transparent/Light Gray
- Border: 1px solid #e2e8f0
- Padding: 16px
- Hover: Light background, slight border color change
- Text color: Dark Gray
```

### 5. BUTTON STYLES

#### Primary Button (Main CTA)
```
Properties:
- Background: Linear Gradient (#3b82f6 → #f97316)
- Color: White
- Padding: 12px 24px (Desktop), 10px 20px (Mobile)
- Border Radius: 8px
- Font Weight: 600
- Font Size: 14px
- Letter Spacing: 0.05em
- Text Transform: Uppercase
- Box Shadow: 0 4px 12px rgba(59,130,246,0.3)
- Border: None

Hover State:
- Brightness: 110%
- Box Shadow: 0 6px 20px rgba(59,130,246,0.4)
- Transform: translateY(-2px)
- Transition: 200ms ease

Active State:
- Brightness: 90%
- Transform: translateY(0px)
```

#### Secondary Button (Alternative CTA)
```
Properties:
- Background: White
- Color: #3b82f6
- Border: 2px solid #3b82f6
- Padding: 10px 22px
- Border Radius: 8px
- Font Weight: 600

Hover State:
- Background: #3b82f6
- Color: White
- Transition: 200ms ease
```

#### Tertiary Button (Less Prominent)
```
Properties:
- Background: Transparent
- Color: #3b82f6
- Border: None
- Text Decoration: Underline (optional)

Hover State:
- Color: #f97316
- Text Decoration: None
```

#### Ghost Button (Minimal)
```
Properties:
- Background: Transparent
- Color: #475569
- Border: 1px solid #e2e8f0
- Padding: 10px 16px

Hover State:
- Background: #f8fafc
- Border Color: #64748b
```

### 6. ICON SYSTEM

#### Icon Library
Use: **Lucide React** icons (already installed in your project)

#### Icon Sizing
```
Extra Small (xs): 16px - Badges, inline icons
Small (sm): 20px - Secondary actions
Medium (md): 24px - Standard UI icons
Large (lg): 32px - Feature highlights
Extra Large (xl): 40px-48px - Hero sections
Hero (xxl): 64px+ - Large feature sections
```

#### Icon Colors
- Primary actions: #3b82f6
- Hover state: #f97316
- Disabled: #cbd5e1
- Secondary text: #64748b
- Success: #10b981
- Warning: #f59e0b
- Error: #ef4444

#### Icon Usage Guidelines
- Always pair with text for clarity
- Use consistent sizing within contexts
- Add subtle hover animations (scale 1.1, color change)
- Avoid excessive icon usage in text-heavy sections

### 7. BORDERS & DIVIDERS

```
Subtle Divider: 1px solid #e2e8f0
Medium Divider: 2px solid #cbd5e1
Bold Divider: 3px solid #3b82f6

Border Radius:
- Tight: 4px
- Small: 8px
- Medium: 12px (default for cards)
- Large: 16px
- Full: 9999px (for pills/badges)

Use rounded corners on:
- Buttons: 8px
- Cards: 12-16px
- Images: 8px-12px
- Input fields: 8px
```

---

## NAVIGATION ARCHITECTURE

### Header/Top Navigation Bar

#### Desktop Navigation (>1024px)
```
Layout: Sticky header with fixed height

Structure:
[Logo] [Primary Nav Items] [Secondary Items] [CTA Button]

Spacing: 16px horizontal padding, 16px vertical padding

Logo:
- Width: 140px (auto height)
- Left aligned
- Hover: Slight opacity change

Primary Navigation Items:
- Services (with Mega Menu)
- Industries (with Mega Menu)
- Products (simple dropdown)
- About (simple dropdown)
- Insights (with Mega Menu)

Secondary Navigation:
- Contact
- Careers
- Language/Region selector

CTA Button:
- "Get in Touch" - Primary button style
- Positioned right-aligned
```

#### Sticky Header Behavior
```
- Background: White with subtle shadow on scroll
- Transition: Smooth 300ms when scrolling
- Z-index: 1000 (stays above all content)
- Height: 72px (including padding)
- Shadow: 0 1px 3px rgba(0,0,0,0.08) (on scroll)
```

### Mega Menu: Services

#### Structure & Content
```
[Main Category] → [Subcategory List]

Digital Services:
├── Digital Consulting & Strategy
├── Digital Commerce
└── Business Applications

Data & Analytics:
├── Data Modernization
├── Advanced Analytics
├── Connected Intelligence
├── Data Management
└── Generative AI

Cloud Services:
├── Cloud Operations & Migration
├── Cloud Applications Development
├── Cloud Managed Services
└── Digital Infrastructure Services

Additional Categories:
├── Security
├── Emerging Technologies
└── Business Process Services

Layout:
- 4 columns of content
- Each column width: 200px
- Grid gap: 16px
- Top padding: 24px
- Bottom padding: 24px
- Horizontal padding: 32px

Typography:
- Column headers: 12px, bold, uppercase, gray
- Menu items: 14px, regular, dark text
- Hover item: Orange color (#f97316), bold text
```

#### Mega Menu: Technical Specs
```
Trigger: Hover (Desktop), Click (Mobile)
Width: 100% of viewport (full width)
Max Content Width: 1280px (centered)
Background: White
Border Bottom: 1px solid #e2e8f0
Box Shadow: 0 8px 16px rgba(0,0,0,0.1)

Animation:
- Entrance: Fade + slide down (200ms)
- Exit: Fade out (150ms)
- Transition Timing: ease-out

Mobile Behavior:
- Convert to accordion/collapsible
- Stack vertically
- Remove columns layout
- Full width sections
```

### Mega Menu: Industries

#### Structure & Content
```
Layout: 3-column grid with icons

Banking & Financial Services
├── Icon
├── Description
└── "Explore More" link

Communications
└── Similar structure

Public Sector
├── Healthcare & Life Sciences
├── Retail & CPG
├── Automotive
├── Hospitality
└── Energy & Utilities

Each menu item:
- Featured image/icon (80x80px)
- Title: 16px, semibold
- Description: 14px, gray text (2 lines max)
- "Explore More" link: 12px, blue, underline on hover

Hover State:
- Icon scales 1.05x
- Background light gray
- Text color changes to orange
```

### Mega Menu: Insights

```
Structure:
├── Case Studies
├── Newsroom
├── Blogs
├── Whitepapers/eBooks

Layout: Single column or 2-column with recent items

Each Item:
- Thumbnail image (if applicable)
- Category badge (12px, uppercase)
- Title (14px, semibold)
- Date (12px, gray)
- "Read More" link

Recent Items Preview:
- Show 3-4 most recent items
- "View All" link at bottom
```

### Mobile Navigation (<1024px)

#### Mobile Header
```
Height: 64px
Layout: Logo (left) | Icon Menu (right)

Logo: 120px width
Hamburger Menu: 32px square icon, right-aligned

Background: White
Shadow: 0 1px 3px rgba(0,0,0,0.08)
Sticky: Yes, fixed position
Z-index: 999
```

#### Mobile Menu Panel
```
Triggered: Click hamburger icon
Animation: Slide in from left
Width: 100% or max 360px
Height: Full screen (calc(100vh - 64px))
Background: White
Padding: 16px

Structure:
├── Search bar (optional)
├── Primary Menu Items (collapsible)
│   ├── Services
│   ├── Industries
│   ├── Products
│   ├── About
│   └── Insights
├── Secondary Links
│   ├── Contact
│   ├── Careers
│   └── Language
└── CTA Button (Get in Touch)

Typography:
- Menu items: 16px, semibold
- Submenu items: 14px, regular, indented
- Collapsed icon: > arrow, rotates on open

Submenu Animation:
- Accordion style
- Height animation 200ms
- Icon rotation 200ms
```

---

## HOMEPAGE LAYOUT & SECTIONS

### Section 1: Hero Section

#### Desktop Layout (>1024px)
```
Full viewport height or min-height: 600px
Background: Gradient (Blue #1e3a8a → Dark Navy #0f172a)
Foreground: Animated background pattern or subtle gradient overlay

Content Grid: 2 columns, 50/50 split

LEFT COLUMN (Text):
├── Headline (H1)
│   └── "Leading change through\nAI-native technology"
│   └── Style: Bold, 48px, white
│   └── Accent word: "AI-native" in orange
│
├── Spacing: 24px
│
├── Subheadline (Body)
│   └── "Strategy, consulting, and technology services\nbuilt for the next era of enterprise growth."
│   └── Style: 18px, light blue (#bfdbfe)
│   └── Line height: 1.6
│
├── Spacing: 32px
│
├── CTA Group (Flex row)
│   ├── Primary Button: "Lead with AI"
│   └── Secondary Button: "Build the Future Now" (outline white)
│
└── Spacing: 48px (Bottom)

RIGHT COLUMN (Visual):
├── Animated background shapes
├── Floating cards showing services/values
├── Gradient circles (orange/blue)
├── Subtle animations: float, pulse, rotate

Animation Details:
- Headline: Fade-in + slide-up (600ms, 200ms delay)
- Subheadline: Fade-in + slide-up (600ms, 400ms delay)
- Buttons: Fade-in + scale (600ms, 600ms delay)
- Visual: Fade-in (800ms, 400ms delay)
```

#### Tablet Layout (768px - 1024px)
```
Height: min-height 500px
2 columns, but with adjusted spacing
Text content: 36px H1, 16px body text
Visual: Scaled down, maintained proportions
```

#### Mobile Layout (<768px)
```
Single column, stacked content
Height: auto (not fixed)
Padding: 16px horizontal

Layout:
├── Headline: 28px, center-aligned
├── Spacing: 16px
├── Subheadline: 14px, center-aligned
├── Spacing: 24px
├── Buttons: Stack vertically, full width
│   ├── Primary button: Full width
│   ├── Spacing: 12px
│   └── Secondary button: Full width
└── Visual: Below content, full width

Visual adjustments:
- Remove complex animations
- Simplify background
- Reduce visual complexity
```

### Section 2: Featured Insights/News Carousel

#### Layout
```
Container: Full width section
Background: White
Padding: 64px 32px (desktop), 48px 16px (tablet/mobile)

Content:
├── Section Title: "Featured Insights"
│   └── Style: 36px, bold, center-aligned
│   └── Subtitle: Gray text explaining content
│
├── Spacing: 48px
│
└── Carousel Container
    ├── 4 items visible (desktop)
    ├── 2 items visible (tablet)
    ├── 1 item full width (mobile)
    └── Gap between items: 24px

Card Structure (Repeat):
├── Image Container (Aspect ratio: 16/9)
│   └── Background image with overlay
│   └── Overlay opacity: 0.3 on hover
│
├── Card Content
│   ├── Category Badge
│   │   └── "NEWSROOM" / "BLOG" / "CASE STUDY"
│   │   └── Style: 12px, uppercase, orange background
│   │   └── Padding: 4px 8px
│   │   └── Border radius: 4px
│   │
│   ├── Spacing: 12px
│   │
│   ├── Title
│   │   └── Style: 18px, semibold, dark text
│   │   └── Line clamp: 2 lines
│   │   └── Hover: Orange color
│   │
│   ├── Spacing: 12px
│   │
│   ├── Description
│   │   └── Style: 14px, gray text
│   │   └── Line clamp: 2 lines
│   │
│   ├── Spacing: 16px
│   │
│   └── "Read More" Link
│       └── Style: 12px, blue, uppercase
│       └── Icon: Arrow-right
│       └── Hover: Orange color, translate-x

Carousel Controls:
├── Previous Button (left arrow, 32px square)
├── Next Button (right arrow, 32px square)
├── Dot Indicators (circular, centered below)
├── Active dot: Orange (#f97316)
└── Inactive dot: Light gray (#cbd5e1)

Animation Details:
- Card entrance: Fade-in + scale (400ms)
- Carousel slide: Smooth 500ms transition
- Hover: 300ms ease-out
```

### Section 3: Statistics Section

#### Layout
```
Container: Full width
Background: Gradient (Blue to Dark Blue)
Color: White text
Padding: 64px 32px

Structure (4 columns - desktop):
├── Stat Item 1
│   ├── Number: "49+"
│   │   └── Style: 48px, bold, orange color
│   │
│   ├── Label
│   │   └── "Years of continuous excellence"
│   │   └── Style: 16px, white
│
├── [Vertical divider line]
├── Stat Item 2 (similar)
├── [Vertical divider line]
├── Stat Item 3 (similar)
├── [Vertical divider line]
└── Stat Item 4 (similar)

Responsive:
- Tablet: 2 columns x 2 rows
- Mobile: 1 column, 4 rows

Dividers:
- Height: 60% of item height
- Width: 1px
- Color: rgba(255,255,255,0.3)
- Mobile: Hidden, use spacing instead

Animation:
- Numbers: Counter animation from 0 to final value
- Duration: 2000ms
- Trigger: On scroll into view
- Easing: ease-out

Counter Logic:
```
Function: animateCounter(from: 0, to: targetNumber, duration: 2000)
Update frequency: Every 16ms (60fps)
Trigger: Intersection Observer on scroll into view
```

### Section 4: Awards & Certifications Section

#### Layout
```
Container: Full width section
Background: Light gray (#f8fafc)
Padding: 64px 32px

Section Header:
├── Title: "Recognized Excellence"
├── Subtitle: "Awards and partnerships that define our commitment"
└── Centered, 36px title

Content:
├── Grid layout: 5 columns (desktop), 3 columns (tablet), 2 columns (mobile)
├── Grid gap: 24px
├── Max item width: 160px
├── Center items in grid

Award Item:
├── Image container
│   ├── Height: 120px
│   ├── Display: flex, centered
│   └── Content: Award logo (max-height: 80px)
│
├── Title (optional)
│   └── 12px, center-aligned, gray text
│   └── Hover: Orange color

Card Background:
├── White background
├── Padding: 16px
├── Border: 1px solid #e2e8f0
├── Border radius: 12px
├── Hover shadow: 0 8px 16px rgba(0,0,0,0.1)

Animation:
- Entrance: Staggered fade-in
- Delay: 100ms between items
- Hover: Slight scale (1.05x), shadow change
- Transition: 300ms ease

Scrolling Behavior:
- Infinite auto-scroll option (optional)
- Pause on hover
- Manual next/prev buttons (optional)
```

### Section 5: Services Overview

#### Layout
```
Container: Full width
Background: Light gray (#f8fafc)
Padding: 64px 32px

Section Header:
├── Pretitle: "OUR SERVICES"
├── Title: "From digital change to AI-powered advantage"
└── Subtitle: Descriptive text

Services Grid:
├── Desktop: 3 columns
├── Tablet: 2 columns
├── Mobile: 1 column
├── Gap: 24px

Service Card (Repeat):
├── Icon Container
│   ├── 64px square
│   ├── Background: Gradient (blue to orange)
│   ├── Border radius: 12px
│   ├── Display: flex, centered
│   └── Icon: 32px, white
│
├── Spacing: 16px
│
├── Title
│   └── 20px, semibold, dark blue
│   └── Hover: Orange color
│
├── Spacing: 12px
│
├── Description
│   └── 14px, gray text
│   └── Line clamp: 3 lines
│
├── Spacing: 16px
│
├── Features List (optional)
│   └── 3-4 bullet points
│   └── 12px text
│   └── Bullet color: Orange
│
├── Spacing: 20px
│
└── CTA Link
    └── "Learn More" + arrow icon
    └── 12px, uppercase, blue
    └── Hover: Orange color

Card Styling:
├── Background: White
├── Padding: 24px
├── Border: 1px solid #e2e8f0
├── Border radius: 12px
├── Hover effects:
│   ├── Shadow: 0 12px 24px rgba(0,0,0,0.1)
│   ├── Transform: translateY(-4px)
│   └── Transition: 300ms ease

Animation:
- Entrance: Staggered fade-in + scale
- Delay: 100ms between cards
```

### Section 6: Industries Section

#### Layout
```
Container: Full width
Background: White
Padding: 64px 32px

Section Header:
├── Title: "Industries We Serve"
├── Subtitle: Long description
└── Center-aligned

Industries Grid:
├── Desktop: 3 columns
├── Tablet: 2 columns
├── Mobile: 1 column
├── Gap: 24px

Industry Card:
├── Image Area (40% height)
│   ├── Aspect ratio: 16/9
│   ├── Background image
│   ├── Overlay: Gradient (transparent to dark)
│   └── Industry icon
│
├── Content Area (60% height)
│   ├── Background: White
│   ├── Padding: 24px
│   │
│   ├── Title
│   │   └── 18px, semibold
│   │
│   ├── Description
│   │   └── 14px, gray text
│   │   └── Line clamp: 2-3 lines
│   │
│   ├── Spacing: 16px
│   │
│   └── "Explore More" Button
│       └── Tertiary style (text + arrow)

Card Behavior:
├── On hover:
│   ├── Image scales 1.05x
│   ├── Content area shadow increases
│   └── Title color changes to orange
│
└── Transition: 300ms ease

Animation:
- Entrance: Staggered fade-in from bottom
- Delay: 100ms between items
- Scroll trigger: Once when visible
```

### Section 7: Technology Partnerships/Alliances

#### Layout
```
Container: Full width
Background: Gradient (light blue to white)
Padding: 64px 32px

Section Header:
├── Title: "Built on Strong Technology Alliances"
├── Subtitle: Partnership description
└── Center-aligned

Partnerships Grid:
├── Desktop: 4 columns
├── Tablet: 2 columns
├── Mobile: 1 column
├── Gap: 32px

Partnership Item:
├── Logo Container
│   ├── Height: 120px
│   ├── Display: flex, centered
│   ├── Background: White
│   ├── Border radius: 12px
│   ├── Padding: 16px
│   ├── Border: 1px solid #e2e8f0
│   └── Logo: max-height 60px
│
├── Spacing: 16px (if title below)
│
└── Title (optional)
    └── 14px, centered, gray text

Hover Effects:
├── Shadow: 0 8px 16px rgba(0,0,0,0.1)
├── Transform: scale(1.05) + translateY(-4px)
└── Transition: 300ms ease

CTA Button:
├── Below grid
├── "VIEW ALL ALLIANCES" - Primary button
└── Center-aligned

Animation:
- Entrance: Staggered fade-in
- Delay: 80ms between items
- Scroll trigger: Lazy load if many items
```

### Section 8: Call-to-Action Section

#### Layout
```
Container: Full width
Background: Gradient (Blue #1e3a8a → Dark Navy #0f172a)
Padding: 64px 32px
Margin top: 64px

Content Structure:
├── Title
│   └── "Let's build what's next, together."
│   └── Style: 36px, bold, white, center-aligned
│
├── Spacing: 48px
│
└── Form Container
    ├── Background: White
    ├── Padding: 32px
    ├── Border radius: 12px
    ├── Max width: 600px
    └── Centered

Form Fields:
├── Input Group (2 columns on desktop, stacked on mobile)
│   ├── Field: Your challenge/goal (dropdown or textarea)
│   ├── Field: First Name
│   ├── Field: Last Name
│   ├── Field: Email
│   ├── Field: Company
│   ├── Field: Country
│   ├── Field: Message (textarea)
│   └── Checkbox: Subscribe to updates

Form Styling:
├── Label: 12px, uppercase, gray, above input
├── Input: 14px, 12px padding, border 1px #e2e8f0
├── Input radius: 8px
├── Input focus: Blue border, blue shadow
├── Placeholder: Gray text
├── Error state: Red border, red text below

Submit Button:
├── Primary gradient button
├── Text: "SUBMIT ENQUIRY"
├── Full width (desktop), full width (mobile)
├── Padding: 12px 24px
├── Hover: Scale 1.02, shadow increase

reCAPTCHA:
├── Google reCAPTCHA badge
├── Below form, right-aligned
├── Font size: 12px

Animation:
- Form entrance: Fade-in + slide-up (600ms)
- Field focus: Smooth 200ms transition
- Error shake: Subtle animation
```

---

## INTERNAL PAGE TEMPLATES

### Services Detail Page Template

#### Layout
```
Header:
├── Background: Gradient (primary blue)
├── Content: Breadcrumb + Title + Subtitle
├── Height: 300px (desktop), 250px (mobile)
├── Text: White, centered

Main Content:
├── Container max-width: 1280px
├── Padding: 64px 32px
│
├── Section 1: Overview
│   ├── Title + Description
│   ├── 2 columns (desktop), 1 column (mobile)
│   ├── Left: Text content
│   └── Right: Infographic or key stats
│
├── Section 2: Key Benefits
│   ├── Title: "Why Choose Our [Service Name]"
│   ├── Grid: 3 columns (desktop), 1 column (mobile)
│   ├── Cards with icon + text
│   └── Icon styled same as homepage
│
├── Section 3: Our Approach
│   ├── Title: "Our Methodology"
│   ├── Timeline or step-by-step process
│   ├── 4 steps displayed horizontally (desktop)
│   ├── Step number, title, description
│   └── Connected with lines/arrows
│
├── Section 4: Case Studies
│   ├── Title: "Success Stories"
│   ├── Related case studies grid
│   ├── 2-3 columns (desktop), 1 column (mobile)
│   └── Similar card design as homepage
│
├── Section 5: Technology Stack
│   ├── Title: "Technologies We Use"
│   ├── Logo grid: 5-6 columns
│   ├── Tech logos displayed
│   └── Hover tooltip with tech name
│
└── Section 6: CTA
    ├── "Ready to get started?"
    ├── Primary button: "Schedule Consultation"
    └── Secondary button: "Download Case Study"

Sidebar (Optional, Desktop):
├── Sticky sidebar at right
├── Related services menu
├── Quick contact form
├── Stay visible on scroll
```

### Industries Detail Page Template

#### Layout
```
Hero Section:
├── Full height or min-height 500px
├── Background: Industry-specific image or gradient
├── Content: Breadcrumb + Title + Description
├── Text: White, positioned left/center

Main Content:
├── Section 1: Industry Overview
│   ├── 2 columns layout
│   ├── Left: Text + key statistics
│   └── Right: Relevant image/infographic
│
├── Section 2: Challenges We Solve
│   ├── Title: "Challenges in [Industry]"
│   ├── 3-4 cards showing common challenges
│   ├── Icon + title + description per challenge
│   └── Hover effects on cards
│
├── Section 3: Our Solutions
│   ├── Title: "How We Help [Industry]"
│   ├── Service offerings specific to industry
│   ├── Grid or carousel layout
│   └── Each solution: icon + title + description
│
├── Section 4: Industry Expertise
│   ├── Title: "Our Track Record"
│   ├── Statistics/metrics
│   ├── Number of projects
│   ├── Years of experience
│   └── Client satisfaction metrics
│
├── Section 5: Case Studies
│   ├── Related case studies (filtered by industry)
│   ├── Grid: 2-3 columns
│   └── Featured case study highlighted
│
└── CTA: "Let's Transform Your Business"

Color Scheme:
- Each industry can have its own accent color
- Primary colors remain consistent
- Industry-specific imagery throughout
```

### Products Page

#### Layout
```
Hero Section:
├── Title: "Our Products"
├── Subtitle: Description
├── Height: 250px
├── Background: Gradient

Products Grid:
├── Desktop: 2 columns (alternating image left/right)
├── Tablet: 1 column
├── Mobile: 1 column
├── Gap: 48px between items

Product Item Layout:
├── Left: Product Image/Screenshot (50% width on desktop)
│   ├── Image height: 300px
│   ├── Border radius: 12px
│   ├── Hover: Slight zoom 1.05x
│   ├── Shadow on hover
│   └── Transition: 300ms ease
│
├── Right: Product Content (50% width on desktop)
│   ├── Product Name: 24px, semibold
│   ├── Spacing: 16px
│   ├── Description: 14px, gray text, 3-4 lines
│   ├── Spacing: 20px
│   │
│   ├── Features List (if applicable)
│   │   ├── 3-4 key features
│   │   ├── Checkmark icon + text
│   │   ├── 14px text
│   │   └── Spacing: 8px between items
│   │
│   ├── Spacing: 24px
│   │
│   └── CTA Buttons
│       ├── Primary: "Get a Demo" or "Learn More"
│       ├── Secondary: "View Pricing" (if applicable)
│       └── Horizontal layout, spacing: 16px

Testimonials Section:
├── Title: "What Our Users Say"
├── Grid: 3 columns (desktop), 1 column (mobile)
├── Gap: 24px
│
├── Testimonial Card
│   ├── Quote marks icon (large, faded)
│   ├── Quote text: 16px, italic
│   ├── Author name: 14px, semibold
│   ├── Author title: 12px, gray
│   └── Optional: Author photo (40px circle)

Modal/Popup:
- Demo request form in modal/popup
- Similar form structure as homepage CTA
- Close button (X) top right
- Overlay: rgba(0,0,0,0.5)
- Animation: Fade-in + scale

Responsive Product Item:
Mobile (<768px):
├── Single column
├── Image above content
├── Full width
├── No image/content split
```

### About Page

#### Layout
```
Hero Section:
├── Title: "About AvantCore Technologies"
├── Subtitle: Company mission/tagline
├── Background: Gradient
├── Height: 300px

Company Story Section:
├── Title: "Our Story"
├── 2 columns (desktop), 1 column (mobile)
├── Left: Text content (3-4 paragraphs)
├── Right: Timeline or milestones
├── Timeline style: Vertical line with milestone markers

Values Section:
├── Title: "Our Values"
├── Grid: 4 columns (desktop), 2 columns (mobile)
├── Each value: Icon + title + description
├── Cards background: Light gray with colored top border

Leadership Section:
├── Title: "Meet Our Leadership"
├── Grid: 3-4 columns per row
├── Person card:
│   ├── Photo: 200x200px, circular or square
│   ├── Name: 16px, semibold
│   ├── Title: 14px, gray
│   ├── Bio: 13px, 2 lines max
│   ├── Social links: LinkedIn, Twitter icons
│   └── Hover: Photo grayscale removed, text color change

Team Statistics:
├── Title: "Our Team"
├── Grid: 4 items
├── Each stat: Icon + number + label
├── Numbers: Large (48px), orange color
├── Labels: Gray text

Awards & Recognition:
├── Reuse awards section from homepage
├── Show all awards/certifications
├── Grid with multiple columns

Global Presence:
├── Title: "Where We Operate"
├── Map or list of regions/offices
├── For each region: City name, address, phone
├── Can use interactive map or styled list

CTA Section:
├── "Join Our Team" button
├── Links to careers page
```

### Blog/News Page

#### Layout
```
Hero Section:
├── Title: "Insights & Resources"
├── Subtitle: Description
├── Optional: Featured post highlighted

Filter/Sort Bar:
├── Category filter dropdown
├── Date range filter
├── Search bar
├── Sort by: Latest, Popular, Trending

Blog Grid:
├── Desktop: 3 columns
├── Tablet: 2 columns
├── Mobile: 1 column
├── Gap: 24px

Blog Card:
├── Featured Image
│   ├── Aspect ratio: 16/9
│   ├── Height: 180px
│   ├── Overlay gradient on hover
│   ├── Category badge positioned on image
│   └── Date positioned on image
│
├── Content Area
│   ├── Category tag: 12px, uppercase
│   ├── Title: 18px, semibold
│   ├── Excerpt: 14px, gray, 2-3 lines
│   ├── Author info: Small text + avatar
│   └── "Read More" link

Pagination:
├── Previous/Next buttons
├── Page numbers (1, 2, 3, etc.)
├── Active page highlighted
├── Centered at bottom

Sidebar (Desktop):
├── Recent posts section
├── Categories list
├── Newsletter signup
├── Sticky on scroll
├── Width: 25-30% of container
```

### Contact Page

#### Layout
```
Hero Section:
├── Title: "Get in Touch"
├── Subtitle: "We'd love to hear from you"
├── Height: 250px
├── Background: Gradient

Contact Container:
├── 2 columns (desktop), 1 column (mobile)
├── Gap: 48px
├── Max width: 1280px

Left Column: Contact Information
├── Title: "Contact Information"
├── Contact Details:
│   ├── Address block
│   │   └── Icon + Text
│   ├── Phone block
│   │   └── Icon + Number (clickable link)
│   ├── Email block
│   │   └── Icon + Email (clickable mailto)
│   └── Office hours (if applicable)
│
├── Spacing: 24px between blocks
├── Social Links:
│   ├── LinkedIn
│   ├── Twitter
│   ├── Facebook
│   └── Instagram
│
├── Optional: Embed map
│   └── Google Maps iframe
│   └── Height: 300px

Right Column: Contact Form
├── Title: "Send us a Message"
├── Form fields:
│   ├── Name (required)
│   ├── Email (required)
│   ├── Phone (optional)
│   ├── Subject (dropdown or text)
│   ├── Message (textarea, required)
│   └── Checkbox: Subscribe to newsletter
│
├── Form styling: Same as homepage
├── Submit button: Full width
├── Success message: Toast notification

Form Validation:
├── Real-time validation
├── Error messages below each field
├── Red border on invalid field
├── Success checkmark on valid field
├── Submit disabled until all required fields filled

Form Submission:
├── Loading state: Button shows spinner
├── Success: Toast notification
├── Error: Error message display
├── Optional: Redirect to thank you page
```

---

## COMPONENT LIBRARY

### Reusable React Components

#### 1. Header Component
```typescript
// components/Header.tsx
- Sticky navigation
- Logo display
- Primary navigation with mega menus
- Mobile hamburger menu
- Region/language selector
- Props: currentPage, isScrolled

Features:
├── Responsive navigation
├── Mega menu dropdown on hover/click
├── Mobile menu slide-out animation
├── Sticky behavior on scroll
└── Active link highlighting
```

#### 2. Mega Menu Component
```typescript
// components/MegaMenu.tsx
- Service/Industry/Insights menu
- Multi-column layout
- Search functionality (optional)
- Props: menuItems, menuType (services/industries/insights)

Features:
├── Responsive grid layout
├── Hover effects on items
├── Animation in/out
├── Mobile accordion format
└── Icon display
```

#### 3. Hero Section Component
```typescript
// components/HeroSection.tsx
- Title, subtitle, CTA buttons
- Background gradient/image
- Animated elements
- Props: title, subtitle, buttons, backgroundImage

Features:
├── Staggered animations
├── Button group with primary/secondary
├── Responsive text sizing
├── Animated background shapes
└── Scroll indicator (optional)
```

#### 4. Statistics Counter Component
```typescript
// components/StatisticsSection.tsx
- Animated number counters
- Multiple stats in grid
- Scroll-triggered animation
- Props: stats array

Features:
├── useIntersectionObserver for trigger
├── AnimateCounter function
├── Responsive grid (4/2/1 columns)
├── Divider lines
└── Gradient background
```

#### 5. Service Card Component
```typescript
// components/ServiceCard.tsx
- Icon, title, description
- Features list
- CTA link
- Hover animations
- Props: icon, title, description, features, link

Variants:
├── Standard card
├── Featured/premium card
├── Minimal card
└── Props: variant="standard" | "featured" | "minimal"
```

#### 6. Industry Card Component
```typescript
// components/IndustryCard.tsx
- Image, title, description
- Overlay effects
- "Explore More" button
- Props: image, title, description, link

Features:
├── Image zoom on hover
├── Overlay gradient
├── Text overlay positioning
└── Smooth transitions
```

#### 7. Carousel Component
```typescript
// components/Carousel.tsx
- Featured insights carousel
- Auto-slide with manual controls
- Responsive item count
- Props: items, itemsPerView, autoScroll

Libraries: Embla Carousel (already in project)

Features:
├── Prev/Next buttons
├── Dot indicators
├── Auto-scroll option
├── Touch/keyboard navigation
└── Responsive breakpoints
```

#### 8. Form Component
```typescript
// components/ContactForm.tsx
- Form fields with validation
- Error handling
- Success confirmation
- reCAPTCHA integration
- Props: onSubmit, fields

Features:
├── Real-time validation
├── Error messages
├── Loading state
├── Success/error toasts
└── Accessibility labels
```

#### 9. Button Component
```typescript
// components/Button.tsx
- Primary, secondary, tertiary variants
- Size options (sm, md, lg)
- Loading state
- Icon support
- Props: variant, size, isLoading, icon, children

Variants:
├── "primary" - Gradient button
├── "secondary" - Outline button
├── "tertiary" - Text button
└── "ghost" - Minimal button
```

#### 10. Badge Component
```typescript
// components/Badge.tsx
- Category/label display
- Color variants
- Size options
- Props: label, variant, size

Colors:
├── blue - Default
├── orange - Highlight
├── green - Success
└── gray - Secondary
```

#### 11. Accordion Component
```typescript
// components/Accordion.tsx
- Collapsible content
- Multiple items or single open
- Smooth height animation
- Props: items, allowMultiple

Items format:
├── title: string
├── content: React.ReactNode
└── id: string
```

#### 12. Tabs Component
```typescript
// components/Tabs.tsx
- Tab navigation
- Content switching
- Active tab styling
- Props: tabs array, defaultTab

Tab format:
├── label: string
├── content: React.ReactNode
└── icon?: React.ReactNode
```

#### 13. Card Component
```typescript
// components/Card.tsx
- Generic card wrapper
- Padding, shadow, border options
- Hover effects
- Props: children, variant, hoverable

Variants:
├── "default" - White background
├── "featured" - Gradient background
├── "minimal" - Gray background
└── "bordered" - With border
```

#### 14. Section Component
```typescript
// components/Section.tsx
- Standard section container
- Padding management
- Background colors
- Props: children, background, padding

Helps maintain consistent spacing throughout site
```

#### 15. Grid Component
```typescript
// components/Grid.tsx
- Responsive grid layout
- Columns: 1/2/3/4
- Gap management
- Props: children, columns, gap

Auto-adjusts for breakpoints
```

---

## ANIMATIONS & INTERACTIONS

### Animation Libraries

**Already installed in your project:**
- `framer-motion` (^12.18.1) - Perfect for scroll-triggered and page animations
- `lucide-react` (^0.462.0) - Icons with animations

**Recommended additions:**
```json
{
  "embla-carousel-react": "^8.3.0", // For carousels (already installed)
  "react-intersection-observer": "^9.x.x", // For scroll triggers
  "react-use-measure": "^2.x.x" // For measuring elements
}
```

### Key Animations

#### 1. Entrance Animations

**Fade In + Slide Up**
```typescript
// Variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

// Usage in JSX
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeInUp}
>
  Content
</motion.div>
```

**Scale In (Pop)**
```typescript
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};
```

**Slide In from Left**
```typescript
const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};
```

#### 2. Scroll Triggered Animations

**Staggered Children Animation**
```typescript
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Usage
<motion.div variants={container} initial="hidden" whileInView="visible">
  {items.map((item) => (
    <motion.div key={item} variants={child}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

#### 3. Hover Effects

**Card Lift on Hover**
```typescript
const cardHover = {
  initial: { y: 0 },
  hover: { 
    y: -8,
    boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};
```

**Icon Rotation on Hover**
```typescript
<motion.div
  whileHover={{ rotate: 360 }}
  transition={{ duration: 0.6 }}
>
  <Icon />
</motion.div>
```

**Button Scale**
```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  Click Me
</motion.button>
```

#### 4. Counter Animation

**Animated Number Counter**
```typescript
import { useEffect, useRef } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

function Counter({ from = 0, to = 100, duration = 2 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, to, { duration });
    return () => animation.stop();
  }, [to, count]);

  return <motion.span>{rounded}</motion.span>;
}
```

#### 5. Parallax Effects

**Text Parallax on Scroll**
```typescript
<motion.h1
  style={{
    y: useTransform(scrollY, [0, 300], [0, 100])
  }}
>
  Parallax Heading
</motion.h1>
```

#### 6. Page Transitions

**Page Fade In/Out**
```typescript
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 }
};

// On every page route
<motion.div
  initial="initial"
  animate="in"
  exit="out"
  variants={pageVariants}
  transition={{ duration: 0.4 }}
>
  Page Content
</motion.div>
```

### Interaction Patterns

#### 1. Mega Menu Interaction
- **Hover on Desktop**: Menu appears with fade-in animation
- **Click on Mobile**: Menu toggles, content slides down
- **Keyboard**: Escape key closes menu, Tab navigates items
- **Outside Click**: Menu closes

#### 2. Carousel Interaction
- **Auto-scroll**: Carousel scrolls automatically every 5s
- **Pause on Hover**: Auto-scroll pauses when hovering
- **Manual Control**: Click next/prev buttons
- **Dot Navigation**: Click dots to jump to slide
- **Keyboard**: Arrow keys navigate (if using embla-carousel)
- **Touch**: Swipe on mobile devices

#### 3. Accordion Interaction
- **Click Header**: Content expands/collapses
- **Only One Open**: If configured, opening one closes others
- **Smooth Height**: Height animates from 0 to auto
- **Arrow Icon**: Rotates to indicate state
- **Focus State**: Keyboard accessible with Tab + Enter/Space

#### 4. Form Interaction
- **Field Focus**: Border color changes to blue, shadow appears
- **Error State**: Border turns red, error message appears below
- **Validation Icon**: Green checkmark for valid fields
- **Submit State**: Button shows spinner, becomes disabled
- **Success Toast**: Appears after submission

#### 5. Scroll Behavior
- **Sticky Header**: Header stays at top on scroll down
- **Hide Header on Down**: Optional behavior to hide header on scroll down
- **Scroll to Top**: Button appears after scrolling 300px down
- **Scroll Snap**: Sections can snap to viewport
- **Lazy Loading**: Images load on scroll into view

---

## MOBILE RESPONSIVENESS

### Responsive Breakpoints

```typescript
// Define in CSS or Tailwind config
const breakpoints = {
  mobile: '320px',    // xs
  smallMobile: '480px', // sm
  tablet: '768px',    // md
  desktop: '1024px',  // lg
  wide: '1280px',     // xl
  ultraWide: '1536px' // 2xl
};
```

### Mobile Navigation Strategy

#### Navigation on Mobile (<768px)
```
Header:
├── Logo (left, 100px width)
├── Hamburger Menu (right, 32px)
├── Height: 64px
└── Sticky: Yes

Hamburger Menu States:
├── Closed: Shows hamburger icon (3 horizontal lines)
├── Open: Shows X close icon
└── Animation: 300ms rotation

Mobile Menu Panel:
├── Slides from left
├── Width: 80-100% viewport width
├── Height: Full screen - 64px
├── Background: White
├── Z-index: 998 (below header)
├── Touch: Swipe to close (optional)
├── Overlay: Semi-transparent (optional)

Menu Items:
├── Collapsible sections (Services, Industries, etc.)
├── Accordion style
├── Full width items: 16px padding
├── Font size: 16px for better touch targets
├── Min tap target: 44px height
└── Spacing: 12px between items

Submenu Items:
├── Indented: 16px left margin
├── Smaller font: 14px
├── Gray color: #64748b
└── Icon: Chevron/arrow rotates on expand
```

#### Responsive Typography on Mobile
```
H1: 28px → 36px → 48px (mobile → tablet → desktop)
H2: 24px → 28px → 36px
H3: 18px → 20px → 24px
H4: 16px → 18px → 18px
Body: 14px → 14px → 16px
```

#### Responsive Spacing on Mobile
```
Section Padding: 16px (mobile), 24px (tablet), 32px (desktop)
Card Padding: 16px (mobile), 20px (tablet), 24px (desktop)
Grid Gap: 16px (mobile), 20px (tablet), 24px (desktop)
Margin Bottom: 32px (mobile), 48px (tablet), 64px (desktop)
```

### Layout Changes by Breakpoint

#### Hero Section Responsiveness
```
Desktop (>1024px):
├── 2 columns, 50/50 split
├── Text left, visual right
├── Height: 600px minimum
└── Headline: 48px

Tablet (768px-1024px):
├── Still 2 columns
├── Content gap reduced: 16px
├── Height: 500px
└── Headline: 36px

Mobile (<768px):
├── Single column, stacked
├── Text on top, visual below
├── Full width
├── Height: Auto (not fixed)
└── Headline: 28px
```

#### Service Cards Responsiveness
```
Desktop: 3 columns, 24px gap
Tablet: 2 columns, 20px gap
Mobile: 1 column, 16px gap

Card adjustments:
├── Desktop padding: 24px
├── Tablet padding: 20px
├── Mobile padding: 16px
├── Font sizes adjust accordingly
└── Icon size: 32px (mobile), 40px (tablet), 48px (desktop)
```

#### Form Responsiveness
```
Desktop: 2 columns (fields side by side)
Tablet: 2 columns (if space allows), else 1
Mobile: 1 column (all fields stacked)

Input sizing:
├── Desktop: Full width of column
├── Tablet: Full width of column
├── Mobile: Full width (min width: 100%)
└── Height: 40px minimum for touch targets
```

### Touch-Friendly Design on Mobile

```
Min Touch Target Size: 44px × 44px
Spacing Between Touch Targets: 8px minimum
Button Padding: 12px 16px (min 44px height)
Link/Icon Tap Area: 40-48px

Hover Effects (Desktop Only):
├── Don't use hover on mobile
├── Use active/pressed states instead
├── Rely on visual feedback from touch

Focus States (Keyboard Navigation):
├── Visible focus ring: 2px solid #3b82f6
├── Outline offset: 2px
├── Applies to all interactive elements
└── Essential for accessibility
```

### Mobile-First CSS Approach

```css
/* Mobile first - base styles for mobile */
.card {
  padding: 16px;
  grid-template-columns: 1fr;
  font-size: 14px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .card {
    padding: 20px;
    grid-template-columns: 1fr 1fr;
    font-size: 15px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .card {
    padding: 24px;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 16px;
  }
}
```

### Image Responsiveness

```typescript
// Use responsive image component
<picture>
  <source media="(max-width: 768px)" srcset="image-mobile.webp" />
  <source media="(max-width: 1024px)" srcset="image-tablet.webp" />
  <source media="(min-width: 1025px)" srcset="image-desktop.webp" />
  <img src="image-desktop.webp" alt="Description" />
</picture>

// Or use Vite's image optimization
import image from './image.webp?w=400;800;1200&as=picture'
```

### Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

---

## IMPLEMENTATION GUIDE

### Phase 1: Setup & Core Components

#### Step 1.1: Install Dependencies
```bash
cd AvantCore-Technology-website-main

# These are already installed, verify versions:
npm list framer-motion embla-carousel-react lucide-react

# If needed, update:
npm update framer-motion embla-carousel-react

# Add if missing:
npm install react-intersection-observer@9.10.0
npm install react-use-measure@2.1.1
npm install clsx@2.1.1
```

#### Step 1.2: Create Design System Constants
```typescript
// src/constants/design.ts
export const COLORS = {
  primary: {
    blue: '#1e3a8a',
    darkBlue: '#0f172a',
    lightBlue: '#3b82f6',
  },
  accent: {
    orange: '#f97316',
  },
  neutral: {
    white: '#ffffff',
    lightGray: '#f8fafc',
    mediumGray: '#e2e8f0',
    darkGray: '#475569',
    textGray: '#64748b',
  }
};

export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
};

export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '48px',
};
```

#### Step 1.3: Create Animation Variants
```typescript
// src/constants/animations.ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

// ... more variants
```

### Phase 2: Build Core Components

#### Step 2.1: Create Header Component
```typescript
// src/components/Header.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-1000 bg-white shadow-sm">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-8 h-18">
        {/* Logo */}
        <div className="w-35">Logo</div>
        
        {/* Primary Nav Items with Mega Menus */}
        <div className="flex gap-8">
          {/* Services Mega Menu */}
          {/* Industries Mega Menu */}
          {/* Products Dropdown */}
          {/* About Dropdown */}
          {/* Insights Mega Menu */}
        </div>

        {/* Secondary Items & CTA */}
        <div className="flex gap-4">
          <button>Contact</button>
          <button className="primary-button">Get in Touch</button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between px-4 h-16">
        <div className="w-30">Logo</div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          {/* Mobile menu items */}
        </div>
      )}
    </header>
  );
};

export default Header;
```

#### Step 2.2: Create Hero Section Component
```typescript
// src/components/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [-10, 10] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-blue-100"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <Button onClick={onPrimaryClick} variant="primary">
                {primaryButtonText}
              </Button>
              <Button onClick={onSecondaryClick} variant="secondary">
                {secondaryButtonText}
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Animated visual elements */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```

#### Step 2.3: Create Button Component
```typescript
// src/components/Button.tsx
import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 justify-center';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:brightness-110 shadow-lg',
    secondary: 'bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white',
    tertiary: 'text-blue-500 hover:text-orange-500 underline',
    ghost: 'text-gray-700 border border-gray-300 hover:bg-gray-100'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Spinner /> : icon}
      {children}
    </motion.button>
  );
};

export default Button;
```

### Phase 3: Build Page Sections

#### Step 3.1: Featured Insights Carousel
```typescript
// src/components/FeaturedInsights.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Carousel from './Carousel';

const FeaturedInsights = () => {
  const insights = [
    // Fetch from your data/CMS
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured <span className="text-orange-500">Insights</span>
        </motion.h2>

        <Carousel items={insights} itemsPerView={4} />
      </div>
    </section>
  );
};

export default FeaturedInsights;
```

#### Step 3.2: Statistics Section with Counter
```typescript
// src/components/StatisticsSection.tsx
import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatProps {
  number: number;
  label: string;
}

const StatCounter = ({ number, label }: StatProps) => {
  const { ref, inView } = useInView({ once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  React.useEffect(() => {
    if (inView) {
      animate(count, number, { duration: 2, ease: 'easeOut' });
    }
  }, [inView]);

  return (
    <div ref={ref} className="text-center">
      <motion.div className="text-5xl font-bold text-orange-500">
        {rounded}
      </motion.div>
      <p className="text-white text-lg mt-2">{label}</p>
    </div>
  );
};

const StatisticsSection = () => {
  const stats = [
    { number: 49, label: 'Years of Experience' },
    { number: 8500, label: 'Team Members' },
    { number: 16, label: 'Countries' },
    { number: 300, label: 'Active Clients' }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
```

### Phase 4: Integration & Optimization

#### Step 4.1: Update Tailwind Config
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1e3a8a',
          dark: '#0f172a',
          light: '#3b82f6',
        },
        accent: {
          orange: '#f97316',
        }
      },
      spacing: {
        18: '72px',
        19: '76px',
        20: '80px',
      },
      zIndex: {
        '1000': '1000',
        '999': '999',
        '998': '998',
      },
      boxShadow: {
        'lg-hover': '0 12px 24px rgba(0, 0, 0, 0.12)',
        'xl-hover': '0 16px 32px rgba(0, 0, 0, 0.15)',
      }
    }
  }
};
```

#### Step 4.2: Create Layout Components
```typescript
// src/components/Layout/Container.tsx
import React from 'react';

const Container = ({ children, className = '' }) => (
  <div className={`container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl ${className}`}>
    {children}
  </div>
);

export default Container;
```

---

## FILE STRUCTURE

### Recommended Project Organization

```
src/
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation/
│   │   │   ├── MegaMenu.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── NavLink.tsx
│   │   └── ScrollToTop.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   ├── Grid.tsx
│   │   ├── Container.tsx
│   │   ├── Accordion.tsx
│   │   ├── Tabs.tsx
│   │   ├── Modal.tsx
│   │   └── Toast.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedInsights.tsx
│   │   ├── StatisticsSection.tsx
│   │   ├── AwardsSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── PartnershipsSection.tsx
│   │   ├── CTASection.tsx
│   │   └── NewsletterSection.tsx
│   │
│   ├── home/
│   │   ├── About.tsx
│   │   ├── Leadership.tsx
│   │   ├── Values.tsx
│   │   └── TeamStats.tsx
│   │
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── DemoForm.tsx
│   │   └── NewsletterForm.tsx
│   │
│   └── Carousel.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Services/
│   │   ├── index.tsx
│   │   ├── [serviceId].tsx
│   │   └── components/
│   ├── Industries/
│   │   ├── index.tsx
│   │   ├── [industryId].tsx
│   │   └── components/
│   ├── Products/
│   │   ├── index.tsx
│   │   ├── [productId].tsx
│   │   └── components/
│   ├── About.tsx
│   ├── Insights/
│   │   ├── index.tsx
│   │   ├── [postId].tsx
│   │   └── components/
│   ├── Contact.tsx
│   ├── Careers.tsx
│   └── Legal/
│       ├── Privacy.tsx
│       ├── Terms.tsx
│       └── Cookies.tsx
│
├── constants/
│   ├── design.ts (Colors, spacing, etc.)
│   ├── animations.ts (Framer Motion variants)
│   ├── navigation.ts (Menu structure)
│   └── content.ts (Default content/copy)
│
├── hooks/
│   ├── useScrollToTop.ts
│   ├── useMobileMenu.ts
│   ├── useInView.ts
│   └── useMediaQuery.ts
│
├── utils/
│   ├── classNames.ts
│   ├── formatDate.ts
│   ├── formatters.ts
│   └── validators.ts
│
├── styles/
│   ├── global.css
│   ├── animations.css
│   └── utilities.css
│
├── types/
│   ├── common.ts
│   ├── services.ts
│   ├── industries.ts
│   └── content.ts
│
├── App.tsx (Already exists - update as needed)
├── main.tsx (Already exists)
└── vite-env.d.ts
```

---

## NEXT STEPS

### Implementation Checklist

- [ ] Phase 1: Setup & Core Components
  - [ ] Install dependencies
  - [ ] Create design system constants
  - [ ] Create animation variants
  
- [ ] Phase 2: Build Core Components
  - [ ] Header component with mega menus
  - [ ] Hero section
  - [ ] Button component (all variants)
  - [ ] Card components
  - [ ] Carousel component
  
- [ ] Phase 3: Build Page Sections
  - [ ] Featured Insights carousel
  - [ ] Statistics counter section
  - [ ] Awards section
  - [ ] Services overview
  - [ ] Industries section
  - [ ] Partnerships section
  - [ ] CTA sections
  
- [ ] Phase 4: Integration & Optimization
  - [ ] Update Tailwind config
  - [ ] Create layout components
  - [ ] Update existing pages
  - [ ] Mobile responsiveness testing
  - [ ] Performance optimization
  - [ ] Accessibility audit (WCAG 2.1 AA)
  
- [ ] Phase 5: Testing & Deployment
  - [ ] Cross-browser testing
  - [ ] Mobile testing (iOS/Android)
  - [ ] Performance testing (Lighthouse)
  - [ ] SEO optimization
  - [ ] Deploy to Firebase

---

## DESIGN SPECIFICATIONS SUMMARY

### Key Takeaways

1. **Professional Color Scheme**: Deep blue (#1e3a8a) with orange accents (#f97316)
2. **Modern Navigation**: Mega menus with organized categories
3. **Animated Interactions**: Smooth scroll-triggered and hover animations
4. **Responsive Design**: Mobile-first approach with proper breakpoints
5. **Component Reusability**: Well-structured, modular component library
6. **Trust Building**: Statistics, awards, partnerships prominently displayed
7. **Clear CTAs**: Primary actions visible and accessible throughout
8. **Professional Spacing**: Consistent use of spacing system
9. **Smooth Transitions**: 200-300ms animations for all interactions
10. **Accessibility**: Keyboard navigation, proper color contrast, semantic HTML

This specification provides everything needed for a developer to rebuild your website with modern UI/UX patterns inspired by Systems Limited, while maintaining your unique content and branding.

---

**Document End**

*Last Updated: June 9, 2026*
