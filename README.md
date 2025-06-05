# Smart Pole Studio

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/shevelev000-7256s-projects/v0-smartpolestudiowebmain)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/HqqFcr7EVca)

## Overview

Профессиональная студия pole sport в центре Москвы. Сайт создан для привлечения новых учеников и удобной записи на занятия.

## Deployment

Your project is live at:

**[https://vercel.com/shevelev000-7256s-projects/v0-smartpolestudiowebmain](https://vercel.com/shevelev000-7256s-projects/v0-smartpolestudiowebmain)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/HqqFcr7EVca](https://v0.dev/chat/projects/HqqFcr7EVca)**

## Local Development

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Docker (optional)

### Getting Started

1. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Docker

### Build and run with Docker

1. Build the Docker image:
\`\`\`bash
npm run docker:build
# or
docker build -t smartpole-studio .
\`\`\`

2. Run the container:
\`\`\`bash
npm run docker:run
# or
docker run -p 3000:3000 smartpole-studio
\`\`\`

### Using Docker Compose

For production:
\`\`\`bash
docker-compose up --build
\`\`\`

For development:
\`\`\`bash
docker-compose --profile dev up --build
\`\`\`

### Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://smartpole.ru
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
NEXT_PUBLIC_YANDEX_METRICA_ID=your-metrica-id
\`\`\`

## Features

- 🎯 **SEO Optimized** - Structured data, meta tags, sitemap
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Fast Performance** - Optimized images and code splitting
- 🔍 **Search Engine Ready** - Google & Yandex optimization
- 🐳 **Docker Support** - Easy deployment and scaling
- 📊 **Analytics Ready** - Google Analytics & Yandex Metrica support

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel / Docker
- **Language**: TypeScript

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Production Deployment

### Vercel (Recommended)
The project is automatically deployed to Vercel when changes are pushed to the main branch.

### Docker Deployment
1. Build the production image:
\`\`\`bash
docker build -t smartpole-studio .
\`\`\`

2. Run in production:
\`\`\`bash
docker run -p 3000:3000 -e NODE_ENV=production smartpole-studio
\`\`\`

### Manual Deployment
1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. Start the production server:
\`\`\`bash
npm start
\`\`\`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to Smart Pole Studio.
