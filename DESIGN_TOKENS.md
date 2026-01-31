# 🎨 Design Tokens Reference

Tài liệu tham khảo đầy đủ về Design System của blog Notion-style.

## 🌈 Color Palette

### Primary Colors

```css
/* Light Theme */
--color-bg-primary: #ffffff
--color-bg-secondary: #f7f6f3
--color-sidebar: #fbfbfa

/* Dark Theme */
--color-bg-primary: #191919
--color-bg-secondary: #202020
--color-sidebar: #252525
```

### Text Colors

```css
/* Light Theme */
--color-text-primary: #37352f
--color-text-secondary: rgba(55, 53, 47, 0.65)
--color-text-tertiary: rgba(55, 53, 47, 0.45)
--color-text-link: #2383e2
--color-text-link-hover: #0b6bcb

/* Dark Theme */
--color-text-primary: rgba(255, 255, 255, 0.9)
--color-text-secondary: rgba(255, 255, 255, 0.6)
--color-text-tertiary: rgba(255, 255, 255, 0.4)
--color-text-link: #529cca
--color-text-link-hover: #73b3d1
```

### Accent Colors

```css
--color-accent-blue: #2383e2     /* Default accent */
--color-accent-purple: #9065b0   /* Tags, categories */
--color-accent-pink: #e03e8e     /* Code, highlights */
--color-accent-orange: #d9730d   /* Warnings */
--color-accent-green: #0f7b6c    /* Success, confirmations */
```

### Functional Colors

```css
/* Hover & Active States */
--color-bg-hover: rgba(0, 0, 0, 0.03)      /* Light */
--color-bg-hover: rgba(255, 255, 255, 0.055) /* Dark */

--color-bg-active: rgba(0, 0, 0, 0.05)     /* Light */
--color-bg-active: rgba(255, 255, 255, 0.08) /* Dark */

/* Borders & Dividers */
--color-border: rgba(0, 0, 0, 0.09)        /* Light */
--color-border: rgba(255, 255, 255, 0.13)  /* Dark */

--color-divider: rgba(0, 0, 0, 0.06)       /* Light */
--color-divider: rgba(255, 255, 255, 0.08) /* Dark */
```

## 📏 Spacing Scale

```css
--space-xs: 4px      /* Tiny gaps, padding */
--space-sm: 8px      /* Small spacing */
--space-md: 16px     /* Default spacing */
--space-lg: 24px     /* Section spacing */
--space-xl: 32px     /* Large spacing */
--space-2xl: 48px    /* Extra large spacing */
--space-3xl: 64px    /* Huge spacing */
```

### Usage Examples
- `xs (4px)`: Icon gaps, tight padding
- `sm (8px)`: List item gaps, small margins
- `md (16px)`: Standard padding, card gaps
- `lg (24px)`: Section margins, large padding
- `xl (32px)`: Page padding, content margins
- `2xl (48px)`: Section dividers
- `3xl (64px)`: Page top/bottom margins

## 🔤 Typography

### Font Families

```css
--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             Helvetica, "Apple Color Emoji", Arial, sans-serif, 
             "Segoe UI Emoji", "Segoe UI Symbol";
             
--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", 
              Times, serif;
              
--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, 
             Consolas, "Liberation Mono", monospace;
```

### Font Sizes

```css
--text-xs: 12px      /* Small labels, metadata */
--text-sm: 14px      /* Body text (compact) */
--text-base: 16px    /* Default body text */
--text-lg: 18px      /* Large body, intros */
--text-xl: 20px      /* Small headings */
--text-2xl: 24px     /* H3 */
--text-3xl: 30px     /* H2 */
--text-4xl: 40px     /* H1 */
--text-5xl: 48px     /* Page titles */
```

### Line Heights

```css
--leading-tight: 1.2    /* Headings */
--leading-normal: 1.5   /* Default text */
--leading-relaxed: 1.6  /* Body paragraphs */
--leading-loose: 1.8    /* Long-form content */
```

### Font Weights

- **400**: Normal text
- **500**: Medium (nav items, labels)
- **600**: Semi-bold (headings, emphasis)
- **700**: Bold (page titles)

### Typography Scale Usage

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Page Title | 5xl (48px) | 700 | tight (1.2) |
| H1 | 4xl (40px) | 700 | tight (1.2) |
| H2 | 3xl (30px) | 600 | tight (1.2) |
| H3 | 2xl (24px) | 600 | normal (1.5) |
| Body | base (16px) | 400 | relaxed (1.6) |
| Caption | sm (14px) | 400 | normal (1.5) |
| Label | xs (12px) | 500 | normal (1.5) |

## 🔘 Border Radius

```css
--radius-sm: 3px     /* Tags, small buttons */
--radius-md: 6px     /* Buttons, inputs */
--radius-lg: 8px     /* Cards */
--radius-xl: 12px    /* Large cards, modals */
```

## 🎭 Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04)
--shadow-md: 0 2px 8px rgba(0, 0, 0, 0.08)
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12)
--shadow-sidebar: 1px 0 0 rgba(0, 0, 0, 0.09)
```

### Usage
- `sm`: Subtle hover effects
- `md`: Cards, dropdowns
- `lg`: Modals, overlays
- `sidebar`: Sidebar right border

## ⚡ Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Usage
- `fast`: Hover states, color changes
- `base`: General transitions
- `slow`: Complex animations

### Easing Curve
`cubic-bezier(0.4, 0, 0.2, 1)` - Smooth, natural motion

## 📐 Layout Constants

```css
--sidebar-width: 240px      /* Desktop sidebar */
--topbar-height: 45px       /* Top navigation bar */
--content-max-width: 900px  /* Max content width */
```

## 🎯 Component-Specific Tokens

### Blog Card
- Border: `1px solid var(--color-border)`
- Padding: `var(--space-lg)`
- Border radius: `var(--radius-lg)`
- Hover: `translateY(-2px)` + `shadow-md`

### Tag
- Padding: `4px 8px`
- Border radius: `var(--radius-sm)`
- Font size: `var(--text-xs)`
- Font weight: `500`

### Callout
- Padding: `var(--space-md)`
- Border radius: `var(--radius-md)`
- Border left: `3px solid [accent-color]`
- Background: `var(--color-bg-secondary)`

### Navigation Item
- Padding: `var(--space-xs) var(--space-sm)`
- Border radius: `var(--radius-sm)`
- Font size: `var(--text-sm)`
- Hover: `var(--color-bg-hover)`

## 🎨 Color Usage Guidelines

### When to use each accent color:

**Blue (#2383e2)**
- Primary actions
- Links
- Active states
- Default accent

**Purple (#9065b0)**
- Categories
- Tags (alternative)
- Creative content

**Pink (#e03e8e)**
- Code highlights
- Important notes
- Special emphasis

**Orange (#d9730d)**
- Warnings
- Alerts
- Attention-grabbing

**Green (#0f7b6c)**
- Success messages
- Confirmations
- Positive actions

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) { ... }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { ... }

/* Desktop */
@media (min-width: 1025px) { ... }
```

## 🔍 Z-Index Scale

```css
.sidebar: z-index: 1000
.modal: z-index: 2000
.toast: z-index: 3000
```

## 💡 Best Practices

1. **Always use variables** - Never hardcode values
2. **Consistent spacing** - Use spacing scale
3. **Color hierarchy** - Primary > Secondary > Tertiary
4. **Transitions** - Apply to state changes
5. **Accessibility** - Maintain contrast ratios

## 📊 Contrast Ratios

All color combinations meet WCAG AA standards:
- Primary text on white: > 7:1
- Secondary text on white: > 4.5:1
- Links: > 4.5:1

---

**Reference này để đảm bảo consistency trong toàn bộ design!**
