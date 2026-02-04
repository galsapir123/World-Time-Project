# 🌍 World Time Weather Manager - Quick Start Guide

## Gal Sapir's Beautiful World Time Application

### ⚡ Quick Start

1. **Start the development server:**
```bash
npm run dev
```

2. **Open in browser:**
```
http://localhost:5174
```

3. **Explore the app:**
   - 🏠 Home page: View 12 cities with real-time local times
   - 🌐 Click any city: See detailed time information
   - ℹ️ About page: Learn about the app and data source

---

## 📱 App Features

### Home Page
- **Grid of 12 cities** - Shows real-time local times
- **Day/Night indicators** - Sun (☀️) for day, Moon (🌙) for night
- **Live updates** - Automatically refreshes every 60 seconds
- **Clickable cards** - Click any city for detailed view

### City Details Page
- **Full time display** - Hour:minute:second format
- **Complete date** - Day of week, date, month, year
- **Timezone info** - IANA timezone format (e.g., Asia/Jerusalem)
- **Manual refresh** - 🔄 Refresh button to update immediately
- **Easy navigation** - Back button to return home

### About Page
- **App information** - What the application does
- **Supported cities** - Complete list of all 12 cities
- **Technology stack** - React, TypeScript, Vite, React Router
- **Data source** - time.now Developer API attribution

---

## 🌍 Supported Cities

| City | Timezone | Region |
|------|----------|--------|
| Tel Aviv | Asia/Jerusalem | 🇮🇱 Israel |
| London | Europe/London | 🇬🇧 UK |
| New York | America/New_York | 🇺🇸 USA |
| Tokyo | Asia/Tokyo | 🇯🇵 Japan |
| Paris | Europe/Paris | 🇫🇷 France |
| Sydney | Australia/Sydney | 🇦🇺 Australia |
| Dubai | Asia/Dubai | 🇦🇪 UAE |
| Singapore | Asia/Singapore | 🇸🇬 Singapore |
| Hong Kong | Asia/Hong_Kong | 🇭🇰 Hong Kong |
| Bangkok | Asia/Bangkok | 🇹🇭 Thailand |
| Los Angeles | America/Los_Angeles | 🇺🇸 USA |
| Toronto | America/Toronto | 🇨🇦 Canada |

---

## 🎨 Design Highlights

### Color Scheme
- **Primary Dark Blue:** `#0f172e`
- **Secondary Dark Blue:** `#1a2847`
- **Accent Blue:** `#2563eb` (Light Blue)
- **Text White:** `#ffffff`
- **Text Light:** `#e0e7ff`

### Visual Effects
- ✨ Smooth slide-up animations when cards appear
- 🔄 Beautiful hover effects with elevation
- 💫 Pulsing day/night emoji indicators
- 📍 Animated hourglass spinner during loading
- 🌊 Gradient backgrounds for depth

### Responsive Breakpoints
- **Desktop:** 3+ columns grid
- **Tablet:** 2 columns grid
- **Mobile:** 1 column grid

---

## 🔧 Available Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

---

## 📡 API Information

**Service:** time.now Developer API
**Endpoint:** `https://time.now/developer/api/timezone/:timezone`

### Example Request
```javascript
fetch('https://time.now/developer/api/timezone/Asia/Jerusalem')
  .then(res => res.json())
  .then(data => {
    console.log(data.hour, ':', data.minute, ':', data.seconds);
    console.log('Timezone:', data.timezone);
  });
```

### Response Data
- `datetime` - Full ISO datetime
- `timezone` - IANA timezone name
- `day_of_week` - Day name (Monday, Tuesday, etc.)
- `day_of_month` - Day number (1-31)
- `month` - Month number (1-12)
- `year` - Full year (2026)
- `hour` - Hour (0-23)
- `minute` - Minute (0-59)
- `seconds` - Seconds (0-59)
- `abbreviation` - Timezone abbreviation (EST, IST, etc.)

---

## 📂 Project Structure

```
Project React/
├── src/
│   ├── pages/
│   │   ├── Home.tsx ............. Cities grid
│   │   ├── CityDetails.tsx ....... City info
│   │   └── About.tsx ............. About page
│   ├── components/
│   │   ├── Header.tsx ............ Navigation
│   │   └── LoadingSpinner.tsx .... Loading animation
│   ├── services/
│   │   └── timeService.ts ........ API logic
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Home.css
│   │   ├── CityDetails.css
│   │   ├── About.css
│   │   └── LoadingSpinner.css
│   ├── App.tsx ................... Main component
│   ├── main.tsx .................. Entry point
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.js
└── README.md
```

---

## ✅ Requirements Checklist

- ✓ React 19 with TypeScript
- ✓ Vite as build tool
- ✓ React Router for navigation
- ✓ Fetch API with async/await & try-catch
- ✓ useState & useEffect hooks
- ✓ CSS Grid/Flex (no Bootstrap/Tailwind)
- ✓ Loading screen with hourglass animation
- ✓ Error handling & messages
- ✓ 60-second auto-refresh
- ✓ Day/night indicators
- ✓ Manual refresh button
- ✓ No external time libraries
- ✓ No UI frameworks
- ✓ Dark blue & white creative design
- ✓ 10+ cities (12 implemented)
- ✓ Beautiful animations

---

## 🚀 Performance Features

- **Lazy Loading:** Components load only when needed
- **Efficient Updates:** Only refresh data, not entire DOM
- **Clean CSS:** No bloated libraries, pure CSS
- **Optimized Grid:** Auto-responsive grid layout
- **Fast Build:** Vite provides instant HMR

---

## 🐛 Troubleshooting

### Port 5173/5174 Already in Use
The app will automatically try the next port if 5173 is busy. Check terminal for the actual port.

### Time Data Not Loading
- Check internet connection
- Verify API is accessible at https://time.now/developer
- Check browser console for error messages

### Styling Not Applying
- Clear browser cache (Ctrl+Shift+Delete)
- Ensure CSS files are in `src/styles/` directory
- Check console for CSS import errors

---

## 📝 Notes

- Times update automatically every 60 seconds
- Click any city card to see detailed time info
- Use browser back button or back button in app to navigate
- All data comes from time.now Developer API
- No personal data is collected or stored

---

## 🎉 Enjoy!

Your World Time Weather Manager is ready to use! 

**Made with ❤️ using React, TypeScript, and Vite by Gal Sapir**

---

For more information, see `README.md` or `PROJECT_README.md`
