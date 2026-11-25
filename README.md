# THADAM AI

THADAM AI helps people understand and reduce their carbon footprint with carbon assessments, AI-powered insights, smart-machine tracking, and rewards.

## Tech Stack

- **Web:** Next.js 15, React 19, and TypeScript
- **Database:** Prisma ORM with PostgreSQL
- **Authentication:** Firebase Authentication
- **AI:** Google Gemini
- **Testing:** Vitest and Testing Library

## Project Structure

```text
THADAM-AI/
├── prisma/
│   └── schema.prisma          # Database schema and Prisma models
├── public/
│   ├── assets/
│   │   └── logos/             # Public logo assets
│   └── ...                    # Static files, icons, and site metadata
├── src/
│   ├── app/                   # Next.js App Router pages and API routes
│   │   ├── api/               # Admin, auth, carbon, chat, AI, machines, rewards, and scan APIs
│   │   ├── blogs/             # Blog index, categories, and article pages
│   │   ├── dashboard/         # User dashboard and dashboard settings
│   │   ├── ...                # Product pages (carbon, machines, rewards, scan, etc.)
│   │   ├── layout.tsx         # Root layout, metadata, and shared UI
│   │   └── page.tsx           # Home page
│   ├── assets/                # Imported application assets
│   ├── components/
│   │   ├── auth/              # Authentication components
│   │   ├── backgrounds/       # Decorative background components
│   │   ├── errors/            # Error and configuration screens
│   │   ├── layout/            # Shared navigation and footer
│   │   ├── sections/          # Landing-page sections
│   │   └── ui/                # Reusable interface components
│   ├── constants/             # Shared constants
│   ├── data/                  # Application content and mock data
│   ├── lib/                   # Integrations, utilities, validation, and infrastructure
│   ├── providers/             # React context providers
│   ├── services/              # Authentication, carbon, AI, machine, and reward services
│   ├── styles/                # Global styles, components, and visual effects
│   └── types/                 # Shared TypeScript types
├── tests/                     # Vitest unit and component tests
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and project scripts
├── tsconfig.json              # TypeScript configuration
└── vitest.config.ts           # Vitest configuration
```

### Where to make changes

- Add a page or API endpoint under `src/app/`.
- Add reusable UI under `src/components/`.
- Put shared business logic in `src/services/` and shared infrastructure/helpers in `src/lib/`.
- Update database models in `prisma/schema.prisma`.
- Add or update tests in `tests/`.

## Getting Started

### Requirements

- Node.js and npm
- A PostgreSQL database
- Firebase project credentials

### Install and run

```bash
npm install
```

Create a `.env.local` file in the project root and configure the required environment variables:

```env
DATABASE_URL="your-database-connection-string"
DIRECT_URL="your-direct-database-connection-string"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-firebase-project-id"
NEXT_PUBLIC_FIREBASE_API_KEY="your-firebase-web-api-key"
JWT_SECRET="use-a-long-random-secret"
```

Optional integrations use `GOOGLE_AI_API_KEY` (or `GEMINI_API_KEY`) for Gemini, `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` for maps, and Firebase Admin or MQTT variables for their respective server-side features. Keep credentials out of source control.

Then generate the Prisma client, synchronize the schema, and start the development server:

```bash
npm run db:generate
npm run db:push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Common Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Generate Prisma client and build the application |
| `npm run start` | Start the production server |
| `npm run typecheck` | Check TypeScript types |
| `npm test` | Run the test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run db:generate` | Generate the Prisma client |
| `npm run db:push` | Apply the Prisma schema to the configured database |
| `npm run db:studio` | Open Prisma Studio |
