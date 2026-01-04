# Market Revolution

A modern website with comprehensive admin panel built with React, TypeScript, Express, and PostgreSQL.

## 🏗️ Tech Stack

### Frontend
- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **Shadcn UI** + **Radix UI** for components
- **React Router DOM v6** for routing
- **TanStack Query** for server state management
- **React Hook Form** + **Zod** for forms and validation
- **Framer Motion** for animations
- **Lucide React** for icons

### Backend
- **Node.js** + **Express** + **TypeScript**
- **PostgreSQL** with **Prisma ORM**
- **JWT** for authentication
- **bcrypt** for password hashing

## 📁 Project Structure

```
market-revolution/
├── frontend/          # React frontend application
├── backend/           # Express API server
├── prisma/            # Prisma schema and migrations
└── package.json       # Root workspace configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- PostgreSQL database

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env` in both `frontend/` and `backend/` directories
   - Update the values with your configuration

3. **Set up the database:**
   ```bash
   cd backend
   npx prisma migrate dev
   npx prisma generate
   ```

4. **Start development servers:**
   ```bash
   npm run dev
   ```

   This will start:
   - Frontend dev server (usually on http://localhost:5173)
   - Backend API server (usually on http://localhost:3000)

## 📝 Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both frontend and backend for production
- `npm run install:all` - Install dependencies for all workspaces

### Frontend
- `cd frontend && npm run dev` - Start frontend dev server
- `cd frontend && npm run build` - Build for production
- `cd frontend && npm run preview` - Preview production build

### Backend
- `cd backend && npm run dev` - Start backend dev server with hot reload
- `cd backend && npm run build` - Build for production
- `cd backend && npm run start` - Start production server

## 🔐 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000/api
```

### Backend (.env)
```
DATABASE_URL="postgresql://user:password@localhost:5432/market_revolution"
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=7d
PORT=3000
NODE_ENV=development
```

## 🗄️ Database

The project uses Prisma ORM. To work with the database:

```bash
# Generate Prisma Client
npx prisma generate

# Create a new migration
npx prisma migrate dev --name migration_name

# Open Prisma Studio (database GUI)
npx prisma studio
```

## 📚 Documentation

- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

## 🧪 Testing

```bash
# Run frontend tests
cd frontend && npm test

# Run backend tests
cd backend && npm test
```

## 📄 License

MIT

# market-revolution
