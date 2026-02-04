# 🌍 World Time - Weather Manager App

A beautiful React application that displays local times of popular cities around the world in real-time.

## Features

✨ **World Time Display**
- View current local times in 12 major cities worldwide
- Real-time updates every 60 seconds
- Day/night indicators (☀️ for day, 🌙 for night)

📱 **Responsive Design**
- Dark blue and white beautiful theme
- Grid-based responsive layout
- Smooth animations and transitions
- Mobile-friendly interface

🌐 **City Details**
- Click any city card to view detailed information
- Current local time with seconds
- Full date with day of week
- Timezone information (IANA format)
- Manual refresh button

ℹ️ **About Page**
- Information about the application
- Data source attribution (time.now API)
- Supported cities list
- Technology stack information

## Supported Cities

1. Tel Aviv 🇮🇱
2. London 🇬🇧
3. New York 🇺🇸
4. Tokyo 🇯🇵
5. Paris 🇫🇷
6. Sydney 🇦🇺
7. Dubai 🇦🇪
8. Singapore 🇸🇬
9. Hong Kong 🇭🇰
10. Bangkok 🇹🇭
11. Los Angeles 🇺🇸
12. Toronto 🇨🇦

## Tech Stack

- **React 19** with TypeScript
- **Vite** - Modern, blazing fast build tool
- **React Router v7** - Client-side routing
- **Custom CSS** - Dark blue and white theme with animations
- **No external UI frameworks** - Pure CSS styling

## Project Structure

```
src/
├── pages/
│   ├── Home.tsx          # Main page with cities grid
│   ├── CityDetails.tsx   # Detailed city information
│   └── About.tsx         # About page
├── components/
│   ├── Header.tsx        # Navigation header
│   └── LoadingSpinner.tsx # Animated loading spinner
├── services/
│   └── timeService.ts    # API integration & time logic
├── styles/
│   ├── Header.css
│   ├── Home.css
│   ├── CityDetails.css
│   ├── About.css
│   └── LoadingSpinner.css
├── App.tsx               # Main app router
├── App.css               # Global styles
├── main.tsx              # Entry point
└── index.css             # Root styles
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser at `http://localhost:5173` (or the port shown in terminal)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## API Integration

The application uses the **time.now Developer API** for accurate time and timezone data:
- API Reference: https://time.now/developer

### API Call Example:
```javascript
fetch('https://time.now/developer/api/timezone/Asia/Jerusalem')
```

Returns timezone data including:
- Current time (hour, minute, seconds)
- Date information
- Timezone abbreviation
- Day of week

## Features in Detail

### Auto-Refresh (60 seconds)
Times automatically refresh every 60 seconds to keep data current:
```javascript
useEffect(() => {
  const interval = setInterval(loadCities, 60000);
  return () => clearInterval(interval);
}, []);
```

### Error Handling
Comprehensive error handling with try-catch blocks:
- API fetch errors
- Invalid city names
- Network failures

### Loading State
Animated hourglass spinner while loading data:
- Smooth flip animation
- Sand flow effect
- Responsive sizing

### Responsive Design
- Mobile-first approach
- Grid adapts from 1 to 3+ columns based on screen size
- Touch-friendly interface
- Optimized for all screen sizes

## Design Highlights

🎨 **Color Scheme:**
- Primary Dark: `#0f172e`
- Secondary Dark: `#1a2847`
- Accent Blue: `#2563eb`
- Text White: `#ffffff`

✨ **Animations:**
- Smooth slide-up animations on page load
- Hover effects on city cards
- Button transform effects
- Loading spinner with flip and sand-flow animations

## Keyboard Navigation
- Tab through navigation links
- Enter to activate buttons and links
- Works perfectly with screen readers

## Browser Support

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

## About

Made with ❤️ using React, TypeScript, and Vite

---

**Gal Sapir's World Time Manager** - Check local times in major cities worldwide! 🌍
