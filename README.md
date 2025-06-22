# HydroShark UI 🚀

> India's First Caffeine-Free Energy Drink - Official Web Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.1.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.165.0-000000?style=flat-square&logo=three.js)](https://threejs.org/)

## 🌟 Project Overview

HydroShark UI is a modern, responsive e-commerce web application built for India's first caffeine-free energy drink brand. The platform features immersive 3D product visualization, seamless shopping experience, and comprehensive brand storytelling.

### ✨ Key Features

- 🎨 **Immersive 3D Product Visualization** - Interactive WebGL-based product models
- 🛒 **Complete E-commerce Platform** - Cart, checkout, and payment integration
- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- 🎭 **Smooth Animations** - Framer Motion powered interactions
- 💳 **Secure Payments** - Razorpay integration for seamless transactions
- 👤 **User Dashboard** - Profile management and order tracking
- 🏃‍♂️ **Athlete Showcase** - Brand ambassador profiles and stories
- 📅 **Events & Media** - Latest news and event coverage

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hydroshark_ui.git
cd hydroshark_ui

# Install dependencies
npm install

# Set up environment variables
cp backend_env.txt .env.local
# Edit .env.local with your configuration

# Start development server
npm run dev
```

Visit [http://localhost:7001](http://localhost:7001) to see the application.

## 🛠️ Tech Stack

### Core Framework

- **Next.js 14.1.4** - React framework with App Router
- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript (optional)

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Popular icons library
- **Normalize.css** - CSS reset for cross-browser consistency

### 3D Graphics

- **Three.js** - JavaScript 3D library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### State Management

- **Zustand** - Lightweight state management solution
- **React Hook Form** - Performant forms with easy validation

### Backend Integration

- **Axios** - Promise-based HTTP client
- **Razorpay** - Payment gateway integration

### Additional Features

- **Swiper** - Modern touch slider
- **EmailJS** - Email service integration
- **React Spinners** - Loading indicators
- **React Confetti** - Celebration effects

## 📁 Project Structure

```
hydroshark_ui/
├── 📂 app/                    # Next.js App Router pages
│   ├── 📂 about/             # About page
│   ├── 📂 athletes/          # Athlete showcase
│   ├── 📂 checkout/          # Checkout flow
│   ├── 📂 products/          # Product catalog
│   │   ├── 📂 drinks/        # Drinks category
│   │   └── 📂 gymwear/       # Merchandise
│   ├── 📂 user/              # User dashboard
│   ├── 📄 layout.js          # Root layout
│   ├── 📄 page.js            # Homepage
│   └── 📄 globals.css        # Global styles
│
├── 📂 components/             # Reusable UI components
│   ├── 📂 AuthComponents/    # Authentication
│   ├── 📂 Events/            # Event components
│   ├── 📂 UserComponents/    # User profile
│   ├── 📄 Navbar.jsx         # Navigation
│   ├── 📄 Footer.jsx         # Footer
│   ├── 📄 CanModel.jsx       # 3D product models
│   └── 📄 [More components]  # Various UI components
│
├── 📂 public/                # Static assets
│   ├── 📂 model_lemon/       # 3D model files
│   ├── 📂 model_mango/       # 3D model files
│   └── 📷 [Images]           # Product images & assets
│
├── 📂 utils/                 # Utility functions
│   ├── 📄 consts.js          # Constants & configuration
│   ├── 📄 helper.js          # Helper functions
│   ├── 📄 instance.js        # Axios configuration
│   └── 📄 store.js           # Zustand store
│
├── 📄 package.json           # Dependencies
├── 📄 next.config.mjs        # Next.js configuration
├── 📄 tailwind.config.js     # Tailwind configuration
└── 📄 Dockerfile            # Container configuration
```

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server on port 7001
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Additional commands
npm run analyze      # Analyze bundle size (if configured)
npm run type-check   # Type checking (if TypeScript)
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# API Configuration
NEXT_PUBLIC_API=https://your-backend-api.com
NEXT_PUBLIC_API_URL=https://your-cdn-url.com

# Payment Integration
NEXT_PUBLIC_RAZORPAY_KEY=your_razorpay_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_FB_PIXEL_ID=your_facebook_pixel_id
```

### Custom Port Configuration

The application runs on port 7001 by default. To change:

```bash
# In package.json
"scripts": {
  "dev": "next dev -p YOUR_PORT"
}
```

## 🎨 Key Components

### 3D Product Visualization

- **CanModel.jsx** - Main 3D product renderer
- **LemonModel.jsx** - Lemon flavor specific model
- **MangoModel.jsx** - Mango flavor specific model

### E-commerce Features

- **CartSidebar.jsx** - Shopping cart interface
- **ProductCTA.jsx** - Product call-to-action
- **CheckoutFlow** - Complete purchase process

### User Experience

- **Navbar.jsx** - Responsive navigation
- **AuthModal.jsx** - Login/signup modal
- **UserDashboard** - Profile and order management

## 🔄 State Management

The application uses Zustand for state management:

```javascript
// Example usage
import { useStore } from '@/utils/store';

const Component = () => {
  const { user, cart, setUser } = useStore();

  // Component logic
};
```

### Global State Structure

- `user` - User authentication and profile data
- `cart` - Shopping cart items and quantities
- `sidebar` - Navigation sidebar state
- `modals` - Various modal states (auth, product, etc.)

## 🎭 Animations & Interactions

### Tailwind Animations

- **Marquee Effects** - Product feature highlights
- **Smooth Transitions** - Page and component transitions
- **3D Transforms** - Interactive product rotation

### Framer Motion

- **Page Transitions** - Smooth page navigation
- **Component Animations** - Interactive elements
- **Scroll Animations** - Reveal on scroll effects

## 📱 Responsive Design

### Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach

All components are designed mobile-first with progressive enhancement for larger screens.

## 🔐 Security Features

- **JWT Authentication** - Secure user sessions
- **Environment Variables** - Sensitive data protection
- **HTTPS Enforcement** - Secure data transmission
- **Input Validation** - XSS and injection prevention

## 📊 Performance Optimizations

### Built-in Optimizations

- **Next.js Image Optimization** - Automatic image optimization
- **Code Splitting** - Automatic route-based splitting
- **Static Generation** - Pre-rendered pages where possible

### Custom Optimizations

- **Lazy Loading** - Non-critical components
- **3D Model Optimization** - Compressed GLTF files
- **Bundle Analysis** - Regular size monitoring

## 🧪 Testing (Recommended Setup)

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# Run tests
npm run test
```

### Testing Strategy

- **Unit Tests** - Individual component testing
- **Integration Tests** - Component interaction testing
- **E2E Tests** - Complete user flow testing

## 📦 Docker Deployment

### Development

```bash
# Build image
docker build -t hydroshark-ui .

# Run container
docker run -p 3000:3000 hydroshark-ui
```

### Production

```bash
# Build for production
docker build -t hydroshark-ui:prod .

# Run with environment variables
docker run -p 3000:3000 --env-file .env.local hydroshark-ui:prod
```

## 🚀 Deployment Options

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### AWS/Digital Ocean

- Use provided Dockerfile
- Set up CI/CD pipeline
- Configure environment variables

### Traditional Hosting

```bash
npm run build
npm run start
```

## 🔧 Customization Guide

### Adding New Products

1. Update `utils/consts.js` with product data
2. Add product images to `public/` directory
3. Create product page in `app/products/[category]/[id]/`

### Customizing Themes

1. Modify `tailwind.config.js` for colors and spacing
2. Update `app/globals.css` for global styles
3. Adjust component-specific styles

### Adding New Features

1. Create component in `components/` directory
2. Add to relevant pages
3. Update state management if needed
4. Add navigation links

## 🐛 Troubleshooting

### Common Issues

**Build Errors**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**3D Models Not Loading**

- Check file paths in `public/model_*` directories
- Verify WebGL browser support
- Check console for Three.js errors

**API Connection Issues**

- Verify environment variables
- Check network connectivity
- Validate API endpoints

## 📖 Documentation

- **[Handover Documentation](./HANDOVER_DOCUMENTATION.md)** - Detailed technical documentation
- **[Component Library](./docs/components.md)** - Component documentation
- **[API Reference](./docs/api.md)** - API integration guide

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Add comments for complex logic
- Update documentation for new features
- Test thoroughly before committing

## 📄 License

This project is proprietary software. All rights reserved.

## 🌟 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Three.js Community** - For 3D graphics capabilities
- **React Ecosystem** - For the component libraries

---

## 📞 Support

For technical support or questions:

- **Email**: support@hydroshark.in
- **Documentation**: [Link to docs]
- **Issues**: [Link to issue tracker]

---

**Built with ❤️ for HydroShark - India's First Caffeine-Free Energy Drink**
