# Portfolio Customization Guide

## 🎯 Quick Start Customization Checklist

Follow this guide to personalize your portfolio with your information.

## 1. Personal Information

### Hero Section (`components/Hero.tsx`)

Replace these placeholders:

- Line 32: `Your Name` → Your actual name
- Line 42: Update your title/role if different from "Full Stack MERN Developer"
- Line 54-56: Update the description with your personal pitch
- Lines 82-93: Update GitHub and LinkedIn URLs with your actual profiles

### Footer (`components/Footer.tsx`)

Replace these placeholders:

- Lines 9-12: Update all social media links
  - GitHub: `https://github.com/yourusername` → your GitHub URL
  - LinkedIn: `https://linkedin.com/in/yourusername` → your LinkedIn URL
  - Twitter: `https://twitter.com/yourusername` → your Twitter URL
  - Email: `mailto:your.email@example.com` → your email
- Line 20: Update the brand description if needed
- Line 54: Update `Your Name` with your actual name

## 2. About Section (`components/About.tsx`)

Update these sections:

- Lines 49-58: Rewrite the "About Me" text with your personal story
- Lines 60-72: Update the statistics:
  - Years of experience
  - Number of projects completed
  - Number of happy clients

## 3. Skills Section (`components/Skills.tsx`)

Customize your skills:

- Lines 7-84: Modify the skills array:
  - Add new skills you have
  - Remove skills you don't use
  - Adjust skill levels ("Advanced" or "Intermediate")
  - Reorganize categories as needed

## 4. Projects Section (`components/Projects.tsx`)

**This is the most important section to customize!**

Replace the example projects (lines 11-74) with your actual projects:

```typescript
{
  title: "Your Project Name",
  description: "Detailed description of your project",
  image: "🎨", // Choose an emoji or replace with actual image
  tags: ["Tech1", "Tech2", "Tech3"], // Technologies used
  github: "https://github.com/yourusername/your-project",
  demo: "https://your-project-demo.com",
  highlights: ["Feature 1", "Feature 2", "Feature 3"],
}
```

- Update all 6 project entries with your real projects
- If you have fewer projects, remove some entries
- If you have more, add additional entries following the same format

## 5. Contact Section (`components/Contact.tsx`)

Update contact information:

- Line 40: Email → `your.email@example.com`
- Line 46: Phone → `+1 (555) 123-4567`
- Line 52: Location → `Your City, Country`
- Lines 111-115: Update social media links

### Connect Contact Form (Optional)

To make the contact form functional:

1. **Option 1: Email Service (e.g., EmailJS)**

   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Follow their integration guide
   - Update the `handleSubmit` function (line 20)

2. **Option 2: Backend API**

   - Create an API endpoint in `app/api/contact/route.ts`
   - Use nodemailer or similar to send emails
   - Update the form submission logic

3. **Option 3: Form Service (e.g., Formspree)**
   - Sign up at [Formspree](https://formspree.io/)
   - Replace form action with Formspree endpoint

## 6. Metadata & SEO (`app/layout.tsx`)

Update SEO information (lines 14-18):

- `title`: "Your Name - Full Stack MERN Developer"
- `description`: Your personal description
- `keywords`: Add relevant keywords

## 7. Navigation (`components/Navbar.tsx`)

Update the logo/brand:

- Line 36: Customize the logo text if desired

## 8. Colors & Theme

### Change Primary Color

Edit `app/globals.css`:

- Lines 7-41: Modify HSL color values
- The `--primary` variable controls the main accent color

Example for blue theme:

```css
--primary: 217 91% 60%; /* Blue */
```

Example for green theme:

```css
--primary: 142 76% 36%; /* Green */
```

## 9. Fonts

Current fonts used:

- Geist Sans (primary)
- Geist Mono (monospace)

To change fonts, edit `app/layout.tsx`:

1. Import different Google Fonts
2. Update the font variables

## 10. Images (Optional)

To add a profile picture:

1. Add your image to the `public` folder
2. In `components/About.tsx` (line 76-82), replace the icon with:

```tsx
<Image
  src="/your-photo.jpg"
  alt="Your Name"
  width={320}
  height={320}
  className="rounded-2xl"
/>
```

## 11. Social Media Links Summary

Update these in multiple files:

- **Hero.tsx**: Lines 82-93
- **Footer.tsx**: Lines 9-12, 48-60
- **Contact.tsx**: Lines 111-115

Make sure they're consistent across all files!

## 12. Download CV Button

To make the "Download CV" button work:

1. Add your CV PDF to the `public` folder as `cv.pdf`
2. In `components/Hero.tsx` (line 73):
   - Change `href="#contact"` to `href="/cv.pdf"`
   - Add `download` attribute

## 🚀 Testing Your Changes

After customization:

1. Save all files
2. Check the browser at `http://localhost:3000`
3. Test all links and buttons
4. Verify responsive design on mobile view
5. Test smooth scrolling navigation

## 📝 Final Checklist

Before deploying:

- [ ] Updated all personal information
- [ ] Replaced all placeholder URLs
- [ ] Added real projects with descriptions
- [ ] Updated contact information
- [ ] Tested all external links
- [ ] Checked mobile responsiveness
- [ ] Verified contact form (if integrated)
- [ ] Updated metadata and SEO
- [ ] Added real images (if applicable)
- [ ] Tested in different browsers

## 🎨 Color Scheme Examples

### Professional Blue

```css
--primary: 217 91% 60%;
```

### Modern Purple

```css
--primary: 262 83% 58%;
```

### Fresh Green

```css
--primary: 142 76% 36%;
```

### Bold Orange

```css
--primary: 25 95% 53%;
```

---

Need help? Check the README.md for more detailed information!
