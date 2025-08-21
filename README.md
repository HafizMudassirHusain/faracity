# SoftWeb - Interactive Tech Company Website

A modern, interactive website for a corporate AI/Tech company featuring cutting-edge visual effects and glassmorphism design.

## ✨ Features

### 🎨 Interactive Background
- **Particle Cursor Effects**: Smooth glowing particles that follow mouse movement with magnetic flow
- **Hexagon Glow Grid**: Subtle, animated hexagon grid with blue, cyan, and purple tones
- **Performance Optimized**: Responsive and lightweight for desktop and mobile
- **High DPI Support**: Crisp visuals on all screen resolutions

### 🪟 Glassmorphism Components
- **HeroCard**: Large, prominent cards for hero sections
- **ServiceCard**: Specialized cards for service displays
- **TestimonialCard**: Cards optimized for testimonials
- **CTAButton**: Interactive buttons with multiple variants
- **GlassmorphismCard**: Base component for custom glassmorphism effects

### 🚀 Performance Features
- Intersection Observer for lazy loading
- Throttled particle generation
- Mobile-optimized touch handling
- Canvas-based rendering for smooth animations

## 🛠️ Components

### InteractiveBackground
The main wrapper component that provides the interactive canvas background.

```jsx
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  return (
    <InteractiveBackground>
      {/* Your content here */}
    </InteractiveBackground>
  );
}
```

### Glassmorphism Components
Ready-to-use glassmorphism components with different styles:

```jsx
import { HeroCard, ServiceCard, CTAButton } from "@/components/GlassmorphismCard";

// Hero section card
<HeroCard>
  <h1>Your Hero Content</h1>
</HeroCard>

// Service card
<ServiceCard>
  <h3>Service Title</h3>
  <p>Service description</p>
</ServiceCard>

// Call-to-action button
<CTAButton variant="primary" onClick={handleClick}>
  Get Started
</CTAButton>
```

## 🎯 Customization

### Particle Effects
Modify particle behavior in `InteractiveBackground.jsx`:
- Colors: Update the `colors` array in the `animate` function
- Particle count: Adjust `particleInterval` and particle generation loop
- Particle properties: Modify the `Particle` class

### Hexagon Grid
Customize the hexagon grid in the `HexagonGrid` class:
- Grid size: Change the `size` variable
- Glow intensity: Adjust `alpha` and `shadowBlur` values
- Animation speed: Modify the time multiplier in the `glow` calculation

### Glassmorphism Styles
Customize glassmorphism effects in `GlassmorphismCard.jsx`:
- Background opacity: Modify `bg-white/10` classes
- Border colors: Update border classes
- Shadow effects: Adjust shadow utilities
- Backdrop blur: Modify `backdrop-blur-md` classes

## 📱 Responsive Design

The components are fully responsive and include:
- Mobile-optimized touch handling
- Reduced particle effects on mobile devices
- Adaptive grid sizing
- Responsive typography and spacing

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Secondary**: Cyan (#06B6D4)
- **Accent**: Purple (#9333EA)
- **Background**: Dark gradients (#0A0A0A to #1A1A1A)

### Typography
- **Headings**: Bold, large text with gradient accents
- **Body**: Clean, readable text in light gray
- **Buttons**: Semi-transparent with hover effects

### Effects
- **Glassmorphism**: Backdrop blur with semi-transparent backgrounds
- **Gradients**: Subtle color transitions
- **Shadows**: Soft, colored shadows for depth
- **Animations**: Smooth transitions and hover effects

## 🔧 Technical Details

### Canvas Rendering
- Uses HTML5 Canvas for smooth animations
- Optimized rendering with requestAnimationFrame
- High DPI support for retina displays

### Performance Optimizations
- Throttled particle generation
- Conditional rendering based on visibility
- Mobile device detection and optimization
- Efficient canvas clearing and redrawing

### Browser Support
- Modern browsers with Canvas support
- Touch devices with gesture handling
- Responsive design for all screen sizes

## 📄 License

This project is licensed under the MIT License.
