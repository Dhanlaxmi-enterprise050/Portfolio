# PRASANJEET Portfolio V2

A premium, Apple-inspired personal portfolio website built with Next.js, TailwindCSS, Framer Motion, and GSAP.

## 🚀 Features

- **Hero Section**: Animated entrance with parallax background and magnetic button effect
- **About Me**: Glassmorphism card with animated skill badges
- **Projects**: Premium card grid with hover effects and smooth transitions
- **Experience Timeline**: Vertical timeline with scroll-triggered animations
- **Contact Form**: Clean minimal form structure (frontend only)
- **Fully Responsive**: Optimized for all screen sizes (360px to widescreen)
- **Smooth Animations**: Premium, Apple-like interactions throughout

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization Guide

### Changing Text Content

#### Hero Section (`components/Hero.tsx`)
- **Name**: Line 47 - Change "PRASANJEET" to your name
- **Subtitle**: Line 54 - Update "Frontend Developer • Builder • Student"
- **Tagline**: Line 61 - Modify "Crafting smooth, fast, premium digital experiences."

#### About Section (`components/About.tsx`)
- **Bio Text**: Lines 30-40 - Update the paragraph content
- **Skills**: Lines 5-15 - Modify the `skills` array

#### Projects (`components/Projects.tsx`)
- **Projects Data**: Lines 5-58 - Update the `projects` array with your projects
  - Change `title`, `description`, `tech`, `image`, `liveUrl`, `codeUrl`

#### Experience (`components/Experience.tsx`)
- **Experience Data**: Lines 5-30 - Update the `experiences` array
  - Modify `title`, `company`, `period`, `description`

#### Contact (`components/Contact.tsx`)
- **Social Links**: Lines 5-50 - Update the `socialLinks` array
  - Change `name`, `url`, and `icon` (SVG) for each social platform
  - Update email in the Email link (line 48)

### Changing Colors

#### Primary Accent Color
The blue accent color is defined in `tailwind.config.js`:
- **Main Blue**: `#007AFF` (accent-blue)
- **Light Blue**: `#5AC8FA` (accent-blue-light)
- **Dark Blue**: `#0051D5` (accent-blue-dark)

To change the accent color:
1. Open `tailwind.config.js`
2. Modify the `accent` color values (lines 8-12)
3. Update any hardcoded color values in components if needed

#### Background Colors
- Main background: `#000000` (black) - defined in `app/globals.css` line 18
- Glassmorphism: `rgba(255, 255, 255, 0.05)` - defined in `app/globals.css` line 45

### Adjusting Animations

#### Animation Speed
- **Hero Fade-in**: `components/Hero.tsx` - Modify `duration` values in `motion` components (lines 48, 55, 62, 70)
- **Scroll Animations**: All components use Framer Motion's `useInView` hook - adjust `margin` prop to trigger earlier/later

#### Parallax Effects
- **Particles**: `components/Hero.tsx` lines 20-40 - Adjust particle count (line 33) and animation duration
- **Magnetic Button**: `components/Hero.tsx` lines 42-65 - Modify `x * 0.3` and `y * 0.3` for stronger/weaker effect

#### Hover Effects
- **Project Cards**: `components/Projects.tsx` - Hover scale is on line 80 (`group-hover:scale-110`)
- **Social Icons**: `components/Contact.tsx` - Hover lift is on line 108 (`hover:-translate-y-1`)

### Component Structure

Each section is a separate component in the `components/` directory:
- `Hero.tsx` - Hero section
- `About.tsx` - About me section
- `Projects.tsx` - Projects grid
- `Experience.tsx` - Timeline
- `Contact.tsx` - Contact form and social links
- `Footer.tsx` - Footer

All components are imported and used in `app/page.tsx`.

## 🎯 Performance Optimizations

- **Image Optimization**: Using Next.js `Image` component with proper sizing
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Scroll-triggered animations only load when in view
- **Smooth Scrolling**: CSS-based smooth scroll with fallbacks

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+
- **Widescreen**: 1440px+

All components use Tailwind's responsive utilities (`sm:`, `md:`, `lg:`) for breakpoint-specific styling.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## 💡 UI/UX Improvement Suggestions

1. **Add Loading States**: Implement skeleton loaders for images
2. **Dark/Light Mode**: Add theme toggle functionality
3. **Accessibility**: Add ARIA labels and keyboard navigation improvements
4. **Performance**: Implement image lazy loading and optimize bundle size
5. **SEO**: Add meta tags, Open Graph, and structured data
6. **Analytics**: Integrate Google Analytics or similar
7. **Form Handling**: Add form submission logic (Formspree, EmailJS, or backend API)
8. **Animations**: Add more micro-interactions for enhanced engagement
9. **Content**: Add blog section or case studies
10. **Testimonials**: Add client/colleague testimonials section

## 📝 Notes

- Form submission is not implemented (frontend structure only)
- All project images use placeholder URLs - replace with your actual project images
- Social media links are placeholder URLs - update with your actual profiles
- Email link in Contact section needs your actual email address

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ by PRASANJEET

