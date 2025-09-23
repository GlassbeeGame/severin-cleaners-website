# Severin Cleaners - Mobile-First Website

A modern, mobile-first website for Severin Cleaners built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### Mobile-First Design
- **Touch-friendly navigation** with 44px minimum touch targets
- **Responsive design** that works perfectly on all devices
- **Fast loading** optimized for mobile networks
- **Thumb-friendly** user interface and navigation
- **Large, readable fonts** (minimum 16px base)
- **Simplified mobile menus** with hamburger navigation
- **One-tap calling** functionality
- **Mobile-optimized forms** with minimal typing required

### Progressive Web App (PWA)
- **Installable** on mobile devices
- **Offline functionality** for key pages
- **App-like experience** with native feel
- **Service worker** for caching and performance

### Business Features
- **Service showcase** with detailed descriptions
- **Interactive image gallery** with before/after comparisons
- **Customer testimonials** with mobile-friendly carousel
- **Contact forms** optimized for mobile
- **Business information** prominently displayed
- **Service areas** clearly listed

## 🛠️ Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Progressive Web App** - Installable web app capabilities
- **Mobile-first responsive design**

## 📱 Mobile Optimizations

### Performance
- **Image optimization** with Next.js Image component
- **Lazy loading** for better performance
- **Minimized JavaScript bundles**
- **Optimized Core Web Vitals**
- **Service worker caching**

### User Experience
- **Touch gestures** for image gallery
- **Swipe navigation** for testimonials
- **Mobile-optimized contact forms**
- **One-tap phone calling**
- **Fast mobile checkout flows**

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd /Users/jammermurphy/Desktop/severin-cleaners-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with mobile-first design
│   ├── layout.tsx           # Root layout with PWA meta tags
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Mobile-first navigation
│   ├── Hero.tsx             # Hero section with CTAs
│   ├── Services.tsx         # Services showcase
│   ├── About.tsx            # About section
│   ├── ImageGallery.tsx     # Interactive before/after gallery
│   ├── Testimonials.tsx     # Customer reviews carousel
│   ├── Contact.tsx          # Contact forms and info
│   ├── Footer.tsx           # Footer with business info
│   └── PWAInstaller.tsx     # PWA installation prompt
public/
├── manifest.json            # PWA manifest
├── sw.js                    # Service worker
└── icon.svg                 # App icon
```

## 🎨 Design System

### Colors
- **Primary Blue**: #1e40af (brand color)
- **Accent Green**: #059669 (success/CTA color)
- **Neutral Gray**: #6b7280 (text color)
- **Background**: #ffffff (clean white)

### Typography
- **Base font size**: 16px (mobile-optimized)
- **Font family**: Geist Sans (system font fallback)
- **Line height**: 1.6 (readable on mobile)

### Spacing
- **Touch targets**: 44px minimum
- **Mobile padding**: 16px
- **Tablet padding**: 24px
- **Desktop padding**: 32px

## 📞 Business Information

- **Company**: Severin Cleaners
- **Phone**: (619) 750-0114
- **Email**: severincleaners@gmail.com
- **Location**: El Cajon, CA
- **Service Area**: San Diego and surrounding areas

### Services
1. **Junk Removal** - Starting at $150
2. **Detailing** - Starting at $75
3. **Pressure Washing** - Starting at $100

## 🔧 Customization

### Adding Real Images
Replace placeholder images in the ImageGallery component with actual before/after photos from Severin Cleaners.

### Updating Business Information
All business information is centralized in the components and can be easily updated.

### Styling Changes
The design system uses CSS custom properties in `globals.css` for easy color and spacing updates.

## 📱 Mobile Testing

Test the website on various devices:
- **iPhone** (Safari)
- **Android** (Chrome)
- **Tablet** (iPad/Android)
- **Desktop** (Chrome, Firefox, Safari)

## 🚀 Deployment

The website is ready for deployment to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any static hosting service**

## 📈 Performance

The website is optimized for:
- **Core Web Vitals** (LCP, FID, CLS)
- **Mobile performance**
- **SEO optimization**
- **Accessibility compliance**

## 🤝 Support

For questions or support, contact the development team or refer to the Next.js documentation.

---

**Built with ❤️ for Severin Cleaners - Professional cleaning services in El Cajon, CA**