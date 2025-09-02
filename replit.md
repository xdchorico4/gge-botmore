# GGE-Bot - Good Game Empire Bot

## Overview
This is a comprehensive bot application for Good Game Empire, featuring a web-based dashboard for bot management and configuration. The application provides automated gameplay functionality through worker threads and includes a complete web interface for user management.

## Architecture
- **Backend**: Node.js with Express.js server
- **Frontend**: Static HTML/CSS/JavaScript with WebSocket communication
- **Database**: SQLite3 for user management
- **Browser Automation**: Playwright (Firefox) for game interaction
- **Real-time Communication**: WebSockets for live updates

## Key Features
- User authentication and management system
- Bot configuration and control dashboard
- Plugin system for extensible functionality
- Real-time WebSocket communication
- Game item data synchronization
- Internal worker for automated tasks
- Discord integration support

## Current Configuration
- **Main Server**: Port 5000 (HTTP)
- **WebSocket Server**: Port 5001
- **Database**: SQLite (`user.db`)
- **Environment**: Production-ready with environment variable support
- **Mode**: Web-only (internal worker disabled for hosting environment)

## Project Structure
- `main.js`: Main server application and API endpoints
- `ggebot.js`: Bot worker logic
- `config-env.js`: Environment variable configuration
- `website/`: Frontend assets and HTML pages
- `plugins/`: Plugin system modules
- `items/`: Game data cache
- `package.json`: Node.js dependencies

## Recent Changes
- Configured for Replit environment with proper port binding (5000)
- Set up environment variable support for hosting platforms
- Installed all required dependencies including Playwright
- Disabled internal worker mode for web hosting compatibility
- Configured WebSocket server on separate port (5001)

## Dependencies
- Express.js for web server
- Playwright for browser automation
- SQLite3 for database
- WebSocket (ws) for real-time communication
- Discord.js for Discord integration
- Various utility libraries

## Environment Variables
- `PORT`: Server port (defaults to 5000 in this environment)
- `GAME_URL`: Game WebSocket URL
- `GAME_SERVER`: Game server identifier
- `DISCORD_TOKEN`: Discord bot token
- `DISCORD_CLIENT_ID`: Discord application ID
- `NO_INTERNAL_WORKER`: Disable internal worker (true for hosting)

## Notes
- Application runs in web-only mode in hosted environments
- Internal worker disabled to avoid browser dependencies in production
- Font detection configured for Linux environment
- Game data automatically synced from official API