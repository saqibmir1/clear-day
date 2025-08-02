<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Clear Day - Smoking Cessation Tracker

This is a web application project called "Clear Day" - a gamified smoking cessation tracker designed to help users maintain their smoke-free streak through visual progress tracking, achievements, and motivational features.

## Project Structure

- **Backend**: Node.js with Express server (`server.js`)
- **Frontend**: Vanilla HTML, CSS, and JavaScript (no frameworks)
- **Storage**: Local JSON file (`data.json`) for user data persistence
- **UI/UX**: Mobile-first responsive design with glassmorphism effects and smooth animations

## Key Features

- Real-time streak tracking (days, hours, minutes)
- Money saved and cigarettes avoided calculations
- Health progress visualization with animated progress bars
- Achievement system with milestone rewards
- Settings management for personalized calculations
- Motivational quotes and encouraging messaging
- Offline functionality with service worker
- Reset/relapse handling with supportive messaging

## Technical Guidelines

- Use modern ES6+ JavaScript features
- Maintain mobile-first responsive design principles
- Follow accessibility best practices
- Implement smooth animations and transitions
- Use CSS custom properties for consistent theming
- Handle errors gracefully with user-friendly messages
- Ensure offline functionality where possible

## API Endpoints

- `GET /api/data` - Returns current user data and calculated metrics
- `POST /api/start` - Starts or restarts the smoke-free journey
- `POST /api/update` - Updates user settings
- `POST /api/reset` - Resets the current streak

## Design Philosophy

- **Encouraging**: Focus on positive reinforcement and motivation
- **Clean**: Minimal, uncluttered interface
- **Gamified**: Achievement system and visual progress rewards
- **Supportive**: Understanding approach to relapses/resets
- **Accessible**: Works well on all devices and screen sizes
