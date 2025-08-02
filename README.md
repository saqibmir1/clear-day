# Clear Day 🌤️

A beautiful, mobile-responsive smoking cessation tracker with gamified progress tracking to help users maintain their smoke-free journey.

![Clear Day Banner](https://via.placeholder.com/800x300/667eea/ffffff?text=Clear+Day+-+Your+Journey+to+Freedom)

## ✨ Features

### 🎯 Core Functionality
- **Real-time Streak Tracking**: Days, hours, and minutes since your last cigarette
- **Financial Savings**: Calculate money saved based on your smoking habits
- **Health Progress**: Visual progress bars showing recovery milestones
- **Achievement System**: Unlock badges for reaching important milestones
- **Motivational Quotes**: Daily inspiration to keep you motivated

### 🎨 User Experience
- **Mobile-First Design**: Optimized for smartphones and tablets
- **Glassmorphism UI**: Modern, attractive interface with blur effects
- **Smooth Animations**: Engaging transitions and progress animations
- **Offline Support**: Works without internet connection after first load
- **No Login Required**: Simple, local storage approach

### ⚙️ Customization
- **Personal Settings**: Configure cigarettes per day and cost
- **Flexible Reset**: Understanding approach to relapses
- **Real-time Updates**: Live countdown and progress tracking

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clearday
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
clearday/
├── server.js              # Express server and API routes
├── package.json           # Project dependencies and scripts
├── data.json             # User data storage (auto-created)
├── public/               # Frontend files
│   ├── index.html        # Main HTML file
│   ├── css/
│   │   └── style.css     # Responsive styles with animations
│   ├── js/
│   │   └── app.js        # Frontend JavaScript logic
│   └── sw.js             # Service worker for offline support
└── .github/
    └── copilot-instructions.md
```

## 🔧 API Endpoints

| Method | Endpoint     | Description                    |
|--------|-------------|--------------------------------|
| GET    | `/api/data` | Get current streak data        |
| POST   | `/api/start`| Start/restart the journey      |
| POST   | `/api/update`| Update user settings          |
| POST   | `/api/reset`| Reset the current streak       |

## 🎮 Achievement System

Users unlock achievements as they progress:

- 🌅 **First Day Free** (1 day)
- 💪 **Three Days Strong** (3 days)
- ⭐ **One Week Wonder** (7 days)
- 🏆 **Two Week Champion** (14 days)
- 👑 **Monthly Master** (30 days)
- 💎 **Quarterly Queen/King** (90 days)
- 🦸 **Half-Year Hero** (180 days)
- 🎉 **Annual Achiever** (365 days)

## 📱 Mobile Experience

Clear Day is designed with mobile users in mind:

- Touch-friendly interface
- Optimized for small screens
- Fast loading times
- Responsive design that works on all devices
- Offline functionality for on-the-go access

## 🛠️ Development

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server
- `npm test` - Run tests (placeholder)

### Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Storage**: Local JSON file
- **Styling**: CSS with custom properties and animations
- **PWA**: Service Worker for offline support

### Customization

The app is highly customizable. Key areas for modification:

1. **Health Metrics**: Adjust calculation formulas in `server.js`
2. **Achievements**: Modify milestone criteria and rewards
3. **Styling**: Update CSS custom properties for theming
4. **Quotes**: Add/modify motivational quotes in `app.js`

## 🎨 Design Philosophy

Clear Day follows these design principles:

- **Encouraging**: Focus on positive reinforcement
- **Simple**: Clean, uncluttered interface
- **Gamified**: Progress feels rewarding and fun
- **Supportive**: Understanding approach to setbacks
- **Accessible**: Works for everyone, everywhere

## 🔒 Privacy

- No user accounts or personal data collection
- All data stored locally on the server
- No tracking or analytics
- No external API calls for user data

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by the journey of those working to quit smoking
- Built with love and encouragement for a healthier future
- Special thanks to the open-source community

---

**Remember**: Every journey begins with a single step. You've got this! 💪✨
