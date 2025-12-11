# CX Loyalty Website

A modern, responsive website built with React and Vite for showcasing the CX Loyalty event or conference.

## Features

- **Hero Section**: Eye-catching introduction with call-to-action
- **Event Overview**: Detailed information about the event
- **Why Attend**: Benefits and reasons to participate
- **Who Will You Meet**: Information about attendees and speakers
- **Topic Highlights**: Key topics and sessions
- **Target Industries**: Industries that will benefit from the event
- **Why Sponsor**: Sponsorship opportunities and benefits
- **Responsive Design**: Optimized for all devices using Tailwind CSS

## Tech Stack

- **React 19**: Latest React with modern features
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **ESLint**: Code linting and formatting

## Repository

This project is hosted on GitHub: [https://github.com/Amal-A-K/CX-Loyalty-Summit](https://github.com/Amal-A-K/CX-Loyalty-Summit)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Amal-A-K/CX-Loyalty-Summit.git
   cd cx-loyalty-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Deployment

This website is deployed on Vercel and can be accessed at: [https://cx-loyalty-summit-fawn.vercel.app/](https://cx-loyalty-summit-fawn.vercel.app/)

### Deploying to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration and build the project
3. The site will be deployed with the production build

## Project Structure

```
src/
├── components/
│   ├── EventOverview.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── TargetIndustries.jsx
│   ├── TopicHighlights.jsx
│   ├── WhoWillYouMeet.jsx
│   ├── WhyAttend.jsx
│   └── WhySponsor.jsx
├── assets/
├── App.jsx
├── index.css
└── main.jsx
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Commit your changes
6. Push to the branch
7. Create a Pull Request

## License

This project is private and proprietary.
