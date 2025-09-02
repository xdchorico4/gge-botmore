# Overview

GGE-BOT is a Discord bot and web application designed for the game Good Game Empire. The bot provides game statistics, rankings, and automated gameplay features through Discord slash commands and a web interface. It connects to the game's WebSocket API to monitor game events and can perform automated actions like attacking fortresses, managing resources, and tracking alliance activities.

The application consists of multiple components: a Discord bot for user interaction, a web server for bot management, WebSocket connections to the game servers, and various plugins for automated gameplay features. It's designed to run 24/7 on hosting platforms and includes comprehensive deployment configurations for services like Railway and Render.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Express.js Web Server**: Provides a web interface for managing bot instances and configurations
- **Static File Serving**: Serves HTML, CSS, and JavaScript files for the web dashboard
- **Cookie-based Authentication**: Uses cookie-parser for session management
- **Body Parser**: Handles form submissions and API requests

## Backend Architecture
- **Node.js Worker Threads**: Uses worker threads to isolate bot instances and prevent crashes from affecting the main application
- **WebSocket Client**: Connects to Good Game Empire's game servers using the `ws` library
- **Discord.js Integration**: Implements Discord bot functionality with slash commands
- **Plugin System**: Modular architecture allowing different gameplay automation features
- **Event-Driven Architecture**: Uses EventEmitter for handling game events and responses

## Data Storage Solutions
- **SQLite Database**: Local database using sqlite3 for storing user data, logs, and bot configurations
- **JSON Configuration Files**: Stores game data, items, buildings, units, and other static game information
- **File-based Logging**: Message buffering system for tracking bot activities and errors

## Authentication and Authorization
- **Discord OAuth**: Uses Discord bot tokens and client IDs for authentication
- **Game Authentication**: Handles Good Game Empire login credentials and session management
- **Role-based Access**: Different permission levels for bot management and usage

## External Dependencies
- **Good Game Empire WebSocket API**: Primary game server connection for real-time data
- **Discord API**: For bot commands and user interaction
- **Playwright**: Web automation for browser-based game interactions and CAPTCHA handling
- **Sharp**: Image processing library for generating battle layouts and graphics
- **PureImage**: Canvas-like image generation for creating game visualizations

The architecture supports both development and production environments with automatic configuration detection. It includes comprehensive error handling, automatic reconnection logic, and deployment-ready configurations for cloud hosting platforms.