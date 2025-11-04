# Jaden Mc Rowdie - Professional Portfolio

A modern, responsive portfolio website showcasing the professional profile, projects, and skills of Jaden Mc Rowdie - an aspiring Business Systems Analyst and IT Professional with a Bachelor of IT in Business Systems.

**Live Site**: https://lovable.dev/projects/a4b2e8e9-1830-4c07-b0e1-95da92f42c10

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Project Structure](#project-structure)
- [Key Sections](#key-sections)
- [Components Overview](#components-overview)
- [Installation & Setup](#installation--setup)
- [Deployment](#deployment)
- [Contact](#contact)

---

## 🎯 About

This portfolio website serves as a comprehensive digital presence for Jaden Mc Rowdie, highlighting his:

- **Professional Background**: Recent Bachelor of IT in Business Systems graduate
- **Technical Expertise**: Skills in AI/ML, web development, business analysis, and data systems
- **Project Portfolio**: Featured projects demonstrating real-world applications in mental wellness AI, predictive analytics, and chatbot development
- **Career Objective**: Seeking opportunities as a Business Systems Analyst or IT Professional

The website is designed with a modern, clean aesthetic that emphasizes professionalism while maintaining excellent user experience across all devices.

---

## ✨ Features

### Responsive Design
- Fully responsive layout optimized for desktop, tablet, and mobile devices
- Modern UI with smooth animations and transitions
- Dark/light mode compatible design system

### Interactive Elements
- Smooth scroll navigation between sections
- Hover effects on cards and buttons
- Animated hero section with gradient overlay
- Interactive contact form with validation

### Professional Presentation
- Clear section hierarchy with proper semantic HTML
- Professional typography and spacing
- Consistent color scheme using CSS custom properties
- Optimized images with proper alt text for accessibility

### SEO Optimized
- Semantic HTML structure
- Meta tags and proper document structure
- Descriptive content throughout

---

## 🛠 Technical Stack

This project is built using modern web technologies:

- **React 18.3.1** - UI library for building component-based interfaces
- **TypeScript** - Type-safe JavaScript for better code quality
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **shadcn/ui** - High-quality, accessible UI component library
- **React Router DOM 6.30.1** - Client-side routing
- **Lucide React** - Beautiful, consistent icon library
- **TanStack Query** - Data fetching and state management
- **React Hook Form** - Form handling and validation

### Additional Libraries
- `class-variance-authority` - Component variant management
- `tailwind-merge` & `clsx` - Utility for merging Tailwind classes
- `tailwindcss-animate` - Animation utilities
- `sonner` & custom toaster - Toast notifications

---

## 📁 Project Structure

```
├── public/
│   ├── Jaden_Mc_Rowdie_CV.pdf    # Downloadable resume
│   └── robots.txt                 # SEO configuration
├── src/
│   ├── assets/                    # Images and static assets
│   │   ├── hero-bg.jpg           # Hero section background
│   │   ├── project-1.jpg         # Mood Map project image
│   │   ├── project-2.jpg         # Algora Chatbot image
│   │   └── project-3.jpg         # ThriveSense project image
│   ├── components/                # React components
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── About.tsx             # About section
│   │   ├── Contact.tsx           # Contact form section
│   │   ├── Footer.tsx            # Footer with social links
│   │   ├── Hero.tsx              # Landing hero section
│   │   ├── Projects.tsx          # Projects showcase
│   │   ├── ResumeLinks.tsx       # Resume download section
│   │   └── Skills.tsx            # Skills display
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility functions
│   ├── pages/                     # Page components
│   │   ├── Index.tsx             # Main landing page
│   │   └── NotFound.tsx          # 404 page
│   ├── App.tsx                    # Root component
│   ├── main.tsx                   # Application entry point
│   └── index.css                  # Global styles & design tokens
├── tailwind.config.ts             # Tailwind configuration
├── vite.config.ts                 # Vite configuration
└── package.json                   # Dependencies
```

---

## 📄 Key Sections

### 1. Hero Section
- **Full-screen landing** with gradient overlay on background image
- **Name and title** prominently displayed
- **Professional tagline**: "Bachelor of IT in Business Systems Graduate"
- **Call-to-action button** that smoothly scrolls to projects
- Eye-catching animation on load

### 2. About Section
- **Professional introduction** and background
- **Academic credentials** highlighted
- **Career objective** in a styled callout box
- **Key interests**: AI/ML applications, data analytics, business systems optimization
- **Professional values**: Fresh perspectives, strong work ethic, continuous learning

### 3. Skills Section
- **Visual grid layout** displaying technical competencies:
  - HTML & CSS
  - JavaScript
  - Java (Basic)
  - SQL
  - Microsoft Office
  - Business Analysis
  - AI/ML Concepts
- **Icon-based presentation** for quick recognition
- **Hover effects** for interactivity

### 4. Projects Section
Three featured projects with comprehensive details:

#### **Mood Map**
- Machine learning solution for predictive analytics
- Technologies: Python, TensorFlow
- Features: Automated data processing, visualization dashboards
- Links: GitHub repository, demo video, documentation

#### **ThriveSense Mental Wellness Assistant**
- AI-powered mental wellness support system
- Features: Personalized guidance, sentiment analysis, adaptive responses
- Machine learning integration
- Links: GitHub repository, demo video, documentation

#### **Algora Chatbot**
- Comprehensive business intelligence system
- SQL database integration with interactive reporting
- Streamlined decision-making processes
- Links: GitHub repository, live website, documentation

Each project card includes:
- High-quality project image
- Detailed description
- GitHub repository link
- Live demo/website link
- Documentation link
- Hover animations

### 5. Resume Links Section
- **Download CV button** - Direct PDF download
- **LinkedIn profile link** - Professional networking
- **GitHub profile link** - Code repository access
- Clean, card-based layout

### 6. Contact Section
Two-column layout featuring:

**Left Column - Contact Form:**
- Name input field
- Email input field with validation
- Message textarea
- Form validation with error handling
- Success toast notification on submission

**Right Column - Contact Information:**
- Email: jadenmcrowdie@gmail.com
- LinkedIn profile link
- GitHub profile link
- Quick response time promise (24-48 hours)

### 7. Footer
- Professional branding
- Social media links (Email, LinkedIn, GitHub)
- Copyright notice
- Consistent styling with primary color theme

---

## 🧩 Components Overview

### Core Page Components

#### **Hero.tsx**
- Full-screen hero section with background image
- Gradient overlay for text readability
- Smooth scroll functionality to projects
- Responsive typography scaling

#### **About.tsx**
- Professional introduction
- Career objective callout
- Card-based layout for content organization

#### **Skills.tsx**
- Grid layout for skills display
- Icon integration from Lucide React
- Hover animations for interactivity
- Responsive grid (2 cols mobile → 4 cols desktop)

#### **Projects.tsx**
- Dynamic project card generation from array
- Image optimization with hover zoom effect
- Multiple CTAs per project (GitHub, Demo, Documentation)
- Responsive grid layout
- Shadow and transform animations

#### **ResumeLinks.tsx**
- Centralized access to professional profiles
- Download functionality for CV
- External link handling

#### **Contact.tsx**
- Form state management with React hooks
- Email validation
- Toast notifications for feedback
- Two-column responsive layout

#### **Footer.tsx**
- Branding and social links
- Copyright information
- Consistent color theming

### UI Component Library (shadcn/ui)
The project includes a comprehensive set of pre-built, customizable UI components:
- **Forms**: Input, Textarea, Label, Button, Checkbox, Radio, Select
- **Feedback**: Toast, Alert, Dialog, AlertDialog
- **Navigation**: Tabs, Accordion, NavigationMenu, Breadcrumb
- **Data Display**: Card, Table, Badge, Avatar
- **Overlays**: Popover, ContextMenu, DropdownMenu, Sheet
- And many more...

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is busy).

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment

### Deploy with Lovable

The easiest way to deploy this portfolio:

1. Open [Lovable](https://lovable.dev/projects/a4b2e8e9-1830-4c07-b0e1-95da92f42c10)
2. Click **Share → Publish**
3. Your site will be live at a Lovable subdomain

### Custom Domain

To connect a custom domain:
1. Navigate to **Project > Settings > Domains** in Lovable
2. Click **Connect Domain**
3. Follow the DNS configuration instructions

**Note**: A paid Lovable plan is required for custom domains.

### Alternative Hosting

Since this is a standard Vite + React application, you can deploy to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

---

## 📝 Customization

### Design System

The project uses CSS custom properties for theming, defined in `src/index.css`:

```css
:root {
  --primary: [HSL values]
  --secondary: [HSL values]
  --accent: [HSL values]
  /* ... and more */
}
```

### Tailwind Configuration

Extended theme configuration in `tailwind.config.ts` includes:
- Custom colors mapped to CSS variables
- Border radius utilities
- Animation keyframes
- Custom container settings

### Adding Projects

Edit `src/components/Projects.tsx` and add to the `projects` array:

```typescript
{
  title: "Project Name",
  description: "Project description",
  image: projectImage,
  github: "GitHub URL",
  demo: "Demo URL",
  documentation: "Documentation URL",
  demoLabel: "View Demo" // or "View Website"
}
```

---

## 🔧 Development Workflows

### GitHub Integration

This project supports bidirectional sync with GitHub:
- Changes in Lovable automatically push to GitHub
- Commits to GitHub automatically sync to Lovable
- Supports branch switching (experimental feature)

### Code Editing

- **In Lovable**: Use the AI-powered editor for rapid development
- **Locally**: Clone the repo and use your preferred IDE
- **Visual Edits**: Use Lovable's Visual Edits feature for quick styling changes

---

## 📞 Contact Information

**Jaden Mc Rowdie**
- 📧 Email: jadenmcrowdie@gmail.com
- 💼 LinkedIn: [linkedin.com/in/jaden-mc-rowdie-953888238](https://www.linkedin.com/in/jaden-mc-rowdie-953888238/)
- 💻 GitHub: [github.com/JadenMcRowdie](https://github.com/JadenMcRowdie)

---

## 📄 License

All rights reserved © 2025 Jaden Mc Rowdie

---

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev)
- UI Components by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Portfolio URL**: https://lovable.dev/projects/a4b2e8e9-1830-4c07-b0e1-95da92f42c10