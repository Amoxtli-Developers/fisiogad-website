# Fisiogad Website

A modern, responsive one-page website for a physiotherapy company built with Next.js 14, TypeScript, and TailwindCSS.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Radix UI** for accessible UI components
- **Framer Motion** for scroll-based and appear-on-view animations
- **Lucide React** for beautiful icons
- **Swiper** for carousels and sliders

## Project Structure

```
fisiogad-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── ServicesSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── TestimonialsSection.tsx
│   │       └── ContactSection.tsx
│   ├── assets/
│   ├── utils/
│   │   ├── animations.ts
│   │   ├── hooks.ts
│   │   ├── animation-helpers.tsx
│   │   └── scroll-to-section.ts
│   └── data/
│       ├── services.ts
│       └── testimonials.ts
├── public/
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features of the Fisiogad Website

- **One-page Layout**: Smooth scrolling between sections
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Modern Animations**: Scroll-based animations using Framer Motion
- **Accessible Components**: Built with Radix UI for better accessibility
- **Carousels**: Testimonial slider using Swiper
- **Contact Form**: Simple booking/contact form

## Deployment

The website can be deployed on Vercel, Netlify, or any other hosting service that supports Next.js.

For production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## About Fisiogad

Fisiogad is a professional physiotherapy company that offers:

- Personalized physiotherapy treatments
- At-home services with professional equipment
- Treatments for sports injuries, daily activity injuries, and occasional pain
- Specialized care for every body part and articulation
- Custom treatment implementations
- Ongoing follow-up care and sessions# fisiogad-website
