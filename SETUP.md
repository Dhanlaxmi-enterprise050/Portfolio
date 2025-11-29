# Quick Setup Guide

## 🚀 Getting Started

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Before You Deploy

### Essential Customizations:

1. **Update Personal Information**
   - Name: `components/Hero.tsx` (line 47)
   - Bio: `components/About.tsx` (lines 30-40)
   - Skills: `components/About.tsx` (lines 5-15)

2. **Add Your Projects**
   - Edit `components/Projects.tsx` (lines 5-58)
   - Replace placeholder images with your project screenshots
   - Update URLs for live demos and source code

3. **Update Experience**
   - Edit `components/Experience.tsx` (lines 5-30)
   - Add your work history and achievements

4. **Configure Contact**
   - Update social media links in `components/Contact.tsx` (lines 5-50)
   - Change email address (line 48)

5. **Customize Colors** (Optional)
   - Edit `tailwind.config.js` to change accent colors
   - Modify `app/globals.css` for background colors

## 🎨 Design Customization

### Change Accent Color
1. Open `tailwind.config.js`
2. Find the `accent` color section (lines 8-12)
3. Replace hex codes with your preferred color

### Adjust Animations
- Animation speeds: Modify `duration` values in motion components
- Parallax intensity: Adjust multipliers in `components/Hero.tsx`
- Hover effects: Tweak transform values in hover classes

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

### Other Platforms
- Netlify: Connect GitHub repo
- AWS Amplify: Connect repository
- Self-hosted: Use `npm run build` and serve with Node.js

## ✅ Checklist

- [ ] Updated personal information
- [ ] Added your projects
- [ ] Updated experience/achievements
- [ ] Configured social media links
- [ ] Updated email address
- [ ] Replaced placeholder images
- [ ] Tested on mobile devices
- [ ] Tested on desktop
- [ ] Verified all links work
- [ ] Built production version (`npm run build`)

## 🐛 Troubleshooting

### Images not loading?
- Check `next.config.js` for image domain configuration
- Ensure image URLs are accessible
- Use Next.js Image component for optimization

### Animations not working?
- Ensure Framer Motion and GSAP are installed
- Check browser console for errors
- Verify components are using 'use client' directive

### Styling issues?
- Clear `.next` folder and rebuild
- Check TailwindCSS configuration
- Verify PostCSS is configured correctly

## 📚 Need Help?

Refer to the main `README.md` for detailed documentation on:
- Component structure
- Animation customization
- Responsive breakpoints
- Performance optimizations

