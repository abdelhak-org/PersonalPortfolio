# Portfolio Website - MERN Stack Developer

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode Ready**: Built with shadcn/ui theming system
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Next.js 14 App Router
- **Type Safe**: Written in TypeScript for better code quality
- **Smooth Scrolling**: Beautiful navigation with smooth scroll behavior

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with CTA buttons
2. **About Section**: Professional background and expertise highlights
3. **Skills Section**: Comprehensive list of technical skills organized by category
4. **Projects Section**: Showcase of featured projects with descriptions and links
5. **Contact Section**: Contact form and information for reaching out

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 🏃 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`components/Hero.tsx`):
   - Update your name
   - Modify the introduction text
   - Change social media links

2. **About Section** (`components/About.tsx`):
   - Update your bio and description
   - Modify the statistics (years of experience, projects, clients)

3. **Skills Section** (`components/Skills.tsx`):
   - Add or remove skills
   - Adjust skill levels (Advanced/Intermediate)

4. **Projects Section** (`components/Projects.tsx`):
   - Replace with your actual projects
   - Add project descriptions
   - Update GitHub and demo links

5. **Contact Section** (`components/Contact.tsx`):
   - Update your email, phone, and location
   - Modify social media links

6. **Footer** (`components/Footer.tsx`):
   - Update social media links
   - Add your name and copyright

## 📦 Build for Production

```bash
npm run build
```

## Contact Form Configuration

The contact form uses the `/api/contact` server route and Resend. Configure these environment variables in production:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=abdelhak.org@gmail.com
CONTACT_FROM="Portfolio Contact <onboarding@resend.dev>"
```

Use a verified Resend sender/domain for `CONTACT_FROM` in production.

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org/docs)

---

Made with ❤️ using Next.js, TypeScript, Tailwind CSS, and shadcn/ui
