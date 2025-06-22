# HydroShark UI - Technical Handover Documentation

## 📋 Project Overview

**HydroShark UI** is a modern e-commerce web application for India's first caffeine-free energy drink brand. Built with Next.js 14, featuring 3D product visualization, responsive design, and integrated payment systems.

### Key Technologies

- **Framework**: Next.js 14.1.4 (App Router)
- **Styling**: Tailwind CSS + Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **State**: Zustand
- **Payment**: Razorpay
- **API**: Axios with JWT authentication

### Business Features

- E-commerce platform with cart/checkout
- 3D interactive product models (Lemon/Mango flavors)
- User authentication and profiles
- Order management system
- Athlete showcase and events
- Mobile-responsive design

---

## 🏗️ Architecture Overview

```
Frontend (Next.js) → API Layer (Axios) → Backend Services
     ↓
State Management (Zustand) → UI Components → 3D Models
```

### Project Structure

```
hydroshark_ui/
├── app/                    # Next.js App Router pages
│   ├── products/drinks/    # Product catalog
│   ├── checkout/           # Purchase flow
│   ├── user/              # User dashboard
│   └── [other pages]      # About, Athletes, Events
├── components/            # Reusable UI components
│   ├── AuthComponents/    # Login/Signup
│   ├── UserComponents/    # Profile/Orders
│   └── [UI components]    # Navbar, Cart, Modals
├── utils/                 # Utilities & configuration
│   ├── store.js          # Zustand state management
│   ├── instance.js       # Axios API configuration
│   └── consts.js         # Constants & product data
└── public/               # Static assets & 3D models
```

---

## 🔧 Development Setup

### Quick Start

```bash
# Install dependencies
npm install

# Environment setup
cp backend_env.txt .env.local
# Edit .env.local with your API endpoints

# Start development server (port 7001)
npm run dev
```

### Key Environment Variables

```bash
NEXT_PUBLIC_API=https://your-backend-api.com
NEXT_PUBLIC_API_URL=https://your-cdn-url.com
RAZORPAY_KEY_ID=your_razorpay_key
```

---

## 🎯 Key Components

### Navigation & Layout

- **`app/layout.js`**: Root layout with global modals
- **`components/Navbar.jsx`**: Responsive navigation with dropdown menus
- **`components/MobileSidebar.jsx`**: Mobile navigation drawer

### E-commerce Features

- **`components/CartSidebar.jsx`**: Shopping cart interface
- **`app/checkout/`**: Payment flow with Razorpay integration
- **`components/ProductCTA.jsx`**: Add to cart functionality

### 3D Product Visualization

- **`components/CanModel.jsx`**: Main 3D product renderer
- **`components/LemonModel.jsx`**: Lemon flavor model
- **`components/MangoModel.jsx`**: Mango flavor model

### User Management

- **`components/AuthComponents/`**: Login/Signup modals
- **`components/UserComponents/`**: Profile and order management
- **`app/user/`**: User dashboard pages

---

## 📊 State Management (Zustand)

### Core State Structure

```javascript
// utils/store.js
{
  user: null,                    // User authentication data
  cart: [],                     // Shopping cart items
  sidebar: { show: false },     // Mobile sidebar state
  cartSidebar: { show: false }, // Cart sidebar state

  // Modal states
  showAuthModal: { show: false, message: "" },
  showProductModal: { id: "", show: false },
  showLoading: { show: false },
  // ... other modal states
}
```

### Usage Pattern

```javascript
import { useStore } from '@/utils/store';

const Component = () => {
  const { user, cart, setUser, addToCart } = useStore();
  // Component logic
};
```

---

## 🌐 API Integration

### Configuration (`utils/instance.js`)

```javascript
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

// Auto-attach JWT tokens for authenticated requests
// Handle 401 responses and token refresh
```

### Key API Patterns

```javascript
// utils/helper.js
export const getUser = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const response = await instance.get('/api/user/');
    return response.data;
  }
};
```

---

## 🎨 Styling & Animations

### Tailwind Configuration

- Custom animations for marquee effects
- Responsive breakpoints (mobile-first)
- Custom color scheme and typography

### Framer Motion Usage

- Page transitions (`components/Transition.jsx`)
- Scroll-based reveals (`components/RevealOnScroll.jsx`)
- Interactive hover effects

---

## 🚀 Adding New Features

### 1. New Product Category

```bash
# Create route structure
mkdir -p app/products/new-category/[id]
touch app/products/new-category/{layout,page}.jsx
touch app/products/new-category/[id]/page.jsx

# Update navigation
# Edit components/Navbar.jsx to add menu item

# Update product data
# Edit utils/consts.js to add product information
```

### 2. New Component

```javascript
// components/NewComponent.jsx
'use client';
import { useStore } from '@/utils/store';

const NewComponent = ({ props }) => {
  const { stateVar, setStateVar } = useStore();

  return <div className='tailwind-classes'>{/* Component content */}</div>;
};

export default NewComponent;
```

### 3. New API Endpoint

```javascript
// utils/helper.js
export const newApiCall = async (data) => {
  try {
    const response = await instance.post('/api/new-endpoint/', data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
```

---

## 📦 Deployment

### Docker Deployment

```dockerfile
FROM node:18.17.0
WORKDIR /mnt/HydroShark/dev/hydroshark_ui
COPY package*.json ./
RUN npm install && npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Build Commands

```bash
npm run build    # Production build
npm start       # Start production server
```

---

## 🐛 Common Issues & Solutions

### 3D Models Not Loading

- Check file paths in `public/model_lemon/` and `public/model_mango/`
- Verify WebGL browser support
- Check Three.js console errors

### API Connection Issues

- Verify environment variables are set correctly
- Check network connectivity and CORS settings
- Validate JWT token authentication

### Build Failures

```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Mobile Responsive Issues

- Test with browser dev tools responsive mode
- Check Tailwind CSS responsive classes
- Verify touch interactions for 3D models

---

## ⚡ Performance Optimizations

### Implemented

- Next.js automatic image optimization
- Code splitting with dynamic imports
- GLTF model compression for 3D assets
- Lazy loading for non-critical components

### Recommendations

- Add React.memo for expensive components
- Implement service worker for caching
- Consider TypeScript for better DX
- Add comprehensive testing suite

---

## 🔒 Security Best Practices

### Current Implementation

- JWT token authentication
- Environment variable protection
- Input validation on forms
- HTTPS enforcement

### Recommendations

- Add CSRF protection
- Implement rate limiting
- Add input sanitization
- Regular security audits

---

## 📈 Future Enhancements

### Technical

- **TypeScript Migration**: Add type safety
- **Testing Suite**: Unit, integration, and E2E tests
- **PWA Features**: Offline functionality
- **Performance Monitoring**: Real-time metrics

### Business Features

- **User Reviews**: Product rating system
- **Wishlist**: Save favorite products
- **Subscription Orders**: Recurring purchases
- **Social Sharing**: Product social media integration
- **Multi-language**: Internationalization support

### Analytics & Optimization

- **A/B Testing**: UI/UX experiments
- **Personalization**: User-specific recommendations
- **Advanced Analytics**: User behavior tracking
- **SEO Optimization**: Enhanced search visibility

---

## 📞 Support & Maintenance

### Development Guidelines

1. Follow existing code patterns and structure
2. Update this documentation when adding features
3. Test responsive design on multiple devices
4. Validate API integrations thoroughly
5. Maintain consistent component naming

### Key Files to Monitor

- `utils/consts.js` - Product data and configuration
- `utils/store.js` - Global state management
- `app/layout.js` - Global layout and metadata
- `components/Navbar.jsx` - Navigation structure

### Deployment Checklist

- [ ] Environment variables configured
- [ ] API endpoints accessible
- [ ] 3D models loading correctly
- [ ] Payment integration working
- [ ] Mobile responsiveness verified
- [ ] Performance metrics acceptable

---

_For detailed technical questions, refer to the code comments and component documentation within the project._
