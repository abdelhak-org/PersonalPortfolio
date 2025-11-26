# Project Structure

This document explains the organization of your portfolio project.

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata and fonts
│   ├── page.tsx                 # Main page (assembles all sections)
│   └── globals.css              # Global styles and Tailwind configuration
│
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx          # Button component
│   │   ├── card.tsx            # Card component
│   │   ├── badge.tsx           # Badge component
│   │   ├── input.tsx           # Input component
│   │   └── textarea.tsx        # Textarea component
│   │
│   ├── Navbar.tsx              # Navigation bar with mobile menu
│   ├── Hero.tsx                # Hero/landing section
│   ├── About.tsx               # About me section
│   ├── Skills.tsx              # Skills and technologies section
│   ├── Projects.tsx            # Projects showcase section
│   ├── Contact.tsx             # Contact form and info section
│   └── Footer.tsx              # Footer with links and socials
│
├── lib/                         # Utility functions
│   └── utils.ts                # Helper functions (cn for classnames)
│
├── public/                      # Static assets
│   ├── next.svg                # Next.js logo
│   └── vercel.svg              # Vercel logo
│
├── node_modules/                # Dependencies (not in git)
│
├── .next/                       # Build output (not in git)
│
├── components.json              # shadcn/ui configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── eslint.config.mjs           # ESLint configuration
├── package.json                # Project dependencies and scripts
├── .gitignore                  # Git ignore file
│
├── README.md                   # Project overview and setup
├── CUSTOMIZATION.md            # Detailed customization guide
└── DEPLOYMENT.md               # Deployment instructions
```

## 📁 Detailed Breakdown

### `/app` Directory

Contains the Next.js App Router files:

- **layout.tsx**: Root layout that wraps all pages. Includes metadata, fonts, and global HTML structure.
- **page.tsx**: The main homepage that imports and assembles all section components.
- **globals.css**: Global styles including Tailwind directives and CSS variables for theming.

### `/components` Directory

All React components organized by purpose:

#### Main Components:

- **Navbar.tsx**: Sticky navigation with smooth scroll links and mobile menu
- **Hero.tsx**: Landing section with animated introduction and CTAs
- **About.tsx**: Personal introduction with highlights and statistics
- **Skills.tsx**: Technical skills organized by category with visual badges
- **Projects.tsx**: Portfolio projects with descriptions and links
- **Contact.tsx**: Contact form and contact information cards
- **Footer.tsx**: Footer with quick links and social media

#### `/components/ui` Directory:

Pre-built shadcn/ui components with consistent styling:

- **button.tsx**: Customizable button with variants
- **card.tsx**: Card container with header, content, and footer sections
- **badge.tsx**: Small badge for tags and labels
- **input.tsx**: Styled input field
- **textarea.tsx**: Styled textarea for longer text input

### `/lib` Directory

Utility functions:

- **utils.ts**: Contains the `cn()` function for merging Tailwind classes with clsx and tailwind-merge

### Configuration Files

#### tailwind.config.ts

- Tailwind CSS configuration
- Custom colors and theme tokens
- Content paths for purging unused styles
- Custom animations and keyframes

#### tsconfig.json

- TypeScript compiler options
- Path aliases (e.g., `@/components`)
- Include/exclude patterns

#### next.config.ts

- Next.js configuration
- Build settings
- Image optimization settings

#### components.json

- shadcn/ui configuration
- Component installation settings
- Theme preferences

## 🎨 Styling System

### Color System

All colors are defined as CSS variables in `globals.css`:

- `--background`: Main background color
- `--foreground`: Main text color
- `--primary`: Primary accent color
- `--secondary`: Secondary accent color
- `--muted`: Muted backgrounds and text
- `--border`: Border color
- And more...

### Responsive Design

The portfolio uses Tailwind's responsive prefixes:

- Default: Mobile-first (0px+)
- `sm:`: Small devices (640px+)
- `md:`: Medium devices (768px+)
- `lg:`: Large devices (1024px+)
- `xl:`: Extra large (1280px+)

### Dark Mode

Dark mode is configured and ready to use:

- CSS variables defined for both light and dark themes
- Toggle can be added using `next-themes` package
- Classes: `.dark` prefix for dark mode styles

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## 📦 Key Dependencies

### Core:

- **next**: React framework with SSR/SSG
- **react**: UI library
- **typescript**: Type safety

### Styling:

- **tailwindcss**: Utility-first CSS framework
- **tailwindcss-animate**: Animation utilities
- **lucide-react**: Icon library

### UI Components:

- **@radix-ui**: Accessible UI primitives
- **class-variance-authority**: Component variants
- **clsx**: Conditional classnames
- **tailwind-merge**: Merge Tailwind classes

## 🎯 Component Data Flow

```
page.tsx (Main Page)
    ├── Navbar (Navigation)
    ├── Hero (Introduction)
    ├── About (Personal Info)
    ├── Skills (Technologies)
    ├── Projects (Portfolio)
    ├── Contact (Form & Info)
    └── Footer (Links)
```

All components are client-side ("use client") for interactivity.

## 🚀 Performance Features

1. **Next.js Optimizations**:

   - Automatic code splitting
   - Image optimization
   - Font optimization (Geist fonts)

2. **Tailwind CSS**:

   - Purges unused styles
   - Minimal CSS bundle

3. **Component Architecture**:
   - Modular and reusable
   - Easy to maintain
   - Type-safe with TypeScript

## 🔐 Best Practices Implemented

- ✅ TypeScript for type safety
- ✅ Semantic HTML structure
- ✅ Accessible components (via Radix UI)
- ✅ SEO-friendly metadata
- ✅ Mobile-first responsive design
- ✅ Optimized images (Next.js Image)
- ✅ Smooth scrolling navigation
- ✅ Clean component architecture
- ✅ Consistent code style (ESLint)

## 📝 Adding New Features

### Add a New Section:

1. Create component in `/components`
2. Import in `app/page.tsx`
3. Add to navigation in `Navbar.tsx`

### Add a New shadcn/ui Component:

```bash
npx shadcn@latest add [component-name]
```

### Modify Theme Colors:

Edit CSS variables in `app/globals.css`

---

Need help? Check:

- **README.md** for setup
- **CUSTOMIZATION.md** for personalizing
- **DEPLOYMENT.md** for going live
