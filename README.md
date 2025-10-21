# 0G TERMINAL :: CYBERPUNK NEURAL SCRAPER

A cyberpunk-themed web scraping application with a retro-futuristic terminal interface. Built with Flask, this application features a visually stunning neon-lit UI that scrapes data from 0g.ai.

## Features

### Cyberpunk Aesthetic
- **Neon Color Scheme**: Cyan, magenta, purple, and green neon accents
- **Glitch Effects**: Dynamic text glitching animations on the main title
- **Scanline Overlay**: Authentic CRT monitor scanline effect
- **Grid Background**: Animated 3D grid background
- **Terminal Interface**: Retro-futuristic command terminal design
- **Pulsing Animations**: LED-like status indicators and neon glow effects

### Functionality
- Web scraping from 0g.ai
- RESTful API endpoint at `/api/scrape`
- Real-time timestamp display
- Connection status monitoring
- Interactive terminal interface
- Keyboard shortcuts (Enter to execute)
- Easter egg: Konami code activation

## Tech Stack

- **Backend**: Python, Flask
- **Scraping**: BeautifulSoup4, Requests
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Orbitron, Share Tech Mono (Google Fonts)
- **Deployment**: Vercel-ready

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 0g_test
```

2. Install dependencies:
```bash
pip install requests beautifulsoup4 flask
```

3. Run the application:
```bash
python faucet.py
```

4. Open your browser and navigate to:
```
http://localhost:5000
```

## Project Structure

```
0g_test/
├── faucet.py              # Main Flask application
├── faucet                 # Executable Python script
├── templates/
│   └── index.html        # Cyberpunk-styled homepage
├── static/
│   ├── css/
│   │   └── cyberpunk.css # Cyberpunk theme styles
│   ├── js/
│   │   └── main.js       # Interactive functionality
│   └── assets/           # Images, fonts, icons (future)
└── README.md             # This file
```

## API Endpoints

### GET /
Serves the cyberpunk-styled web interface

### GET /api/scrape
Scrapes data from 0g.ai and returns JSON response

**Response Format:**
```json
{
  "title": "Page Title",
  "url": "https://0g.ai",
  "timestamp": "2025-10-21 12:34:56"
}
```

**Error Response:**
```json
{
  "error": "Error message"
}
```

## Usage

1. Open the application in your browser
2. Click the **EXECUTE SCRAPE** button or press Enter
3. Watch the cyberpunk terminal display the scraped data
4. Marvel at the neon effects and glitch animations

## Customization

### Colors
Edit the CSS variables in `static/css/cyberpunk.css`:
```css
:root {
    --neon-cyan: #00ffff;
    --neon-magenta: #ff00ff;
    --neon-purple: #b000ff;
    --neon-green: #00ff41;
    /* ... */
}
```

### Scraping Target
Modify the URL in `faucet.py`:
```python
response = requests.get('https://your-target-url.com')
```

## Deployment to Vercel

1. Initialize a Git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub

3. Import the repository to Vercel:
   - Log in to [Vercel](https://vercel.com)
   - Import your repository
   - Vercel will automatically detect the Flask app
   - Deploy!

4. Access your deployed app at:
```
https://your-app.vercel.app
```

## Easter Eggs

Try the Konami Code on the main page:
```
↑ ↑ ↓ ↓ ← → ← → B A
```

## Design Elements

- **Typography**: Orbitron (headings), Share Tech Mono (body)
- **Color Palette**: Dark backgrounds (#0a0a0f) with neon accents
- **Animations**: Glitch effects, scanlines, pulsing indicators, grid scrolling
- **Effects**: Text shadows, box shadows, backdrop filters, clip-paths
- **Responsive**: Mobile-friendly design

## Legal & Ethics

**Important**: Always respect website terms of service and robots.txt when scraping. This tool is for educational purposes. Ensure you have permission to scrape any website before using this application.

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

Best experienced on desktop with modern browsers supporting CSS animations and effects.

## License

This project is open source. Feel free to modify and distribute.

## Credits

Inspired by cyberpunk aesthetics, retro-futuristic interfaces, and the neon-soaked streets of Night City.

---

**NEURAL SCRAPER v2.077** | SYSTEM ONLINE | CONNECTED
