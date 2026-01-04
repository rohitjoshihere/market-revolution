# Market Revolution - Setup Guide

Follow these steps to get your project up and running.

## 📋 Prerequisites

Before you begin, make sure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) - Comes with Node.js
- **PostgreSQL** - [Download](https://www.postgresql.org/download/)

## 🚀 Quick Start

### 1. Install Dependencies

From the project root, run:

```bash
npm run install:all
```

This will install dependencies for:
- Root workspace
- Frontend
- Backend

### 2. Set Up Database

1. **Create a PostgreSQL database:**
   ```sql
   CREATE DATABASE market_revolution;
   ```

2. **Configure Prisma:**
   - The Prisma schema is located at `prisma/schema.prisma`
   - Update the `DATABASE_URL` in `backend/.env` (see step 3)

3. **Run migrations:**
   ```bash
   cd backend
   npm run prisma:migrate
   npm run prisma:generate
   ```

### 3. Configure Environment Variables

#### Backend Environment Variables

Create `backend/.env` file:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/market_revolution"
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Important:** Replace:
- `username` and `password` with your PostgreSQL credentials
- `JWT_SECRET` with a strong random string (use a password generator)

#### Frontend Environment Variables

Create `frontend/.env` file:

```env
VITE_API_URL=http://localhost:3000/api
```

### 4. Start Development Servers

From the project root:

```bash
npm run dev
```

This will start:
- **Frontend** at `http://localhost:5173`
- **Backend API** at `http://localhost:3000`

### 5. Verify Installation

1. **Check Frontend:** Open `http://localhost:5173` in your browser
2. **Check Backend:** Open `http://localhost:3000/health` in your browser
   - You should see: `{"status":"ok","timestamp":"..."}`

## 🧪 Create Your First Admin User

Since there's no registration endpoint for admins yet, you can create one using Prisma Studio:

```bash
cd backend
npm run prisma:studio
```

Then manually create a user with `role: ADMIN` in the Prisma Studio interface.

Or use a database client to insert:

```sql
-- First, hash a password (you'll need to use bcrypt or an online tool)
-- For example, password "admin123" hashed with bcrypt (10 rounds):
-- $2b$10$rOzJ8K8qK8qK8qK8qK8qK8qK8qK8qK8qK8qK8qK8qK8qK8qK8qK

INSERT INTO users (id, email, password, name, role, "createdAt", "updatedAt")
VALUES (
  'clx1234567890',
  'admin@example.com',
  '$2b$10$rOzJ8K8qK8qK8qK8qK8qK8qK8qK8qK8qK8qK8qK8qK8qK8qK8qK',
  'Admin User',
  'ADMIN',
  NOW(),
  NOW()
);
```

**Note:** For production, create a proper admin registration/seeding script.

## 📁 Project Structure Overview

```
market-revolution/
├── frontend/              # React frontend
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable components
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/          # Utilities
│   │   ├── services/     # API services
│   │   └── types/        # TypeScript types
│   └── package.json
├── backend/              # Express backend
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── controllers/ # Request handlers
│   │   ├── middleware/   # Express middleware
│   │   ├── services/     # Business logic
│   │   └── lib/          # Utilities (Prisma client)
│   └── package.json
├── prisma/               # Database schema
│   └── schema.prisma
└── package.json          # Root workspace config
```

## 🔧 Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend
- `npm run build` - Build both for production
- `npm run install:all` - Install all dependencies

### Frontend
- `cd frontend && npm run dev` - Start dev server
- `cd frontend && npm run build` - Build for production
- `cd frontend && npm run preview` - Preview production build

### Backend
- `cd backend && npm run dev` - Start dev server with hot reload
- `cd backend && npm run build` - Build for production
- `cd backend && npm run start` - Start production server
- `cd backend && npm run prisma:generate` - Generate Prisma Client
- `cd backend && npm run prisma:migrate` - Run database migrations
- `cd backend && npm run prisma:studio` - Open Prisma Studio

## 🐛 Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running: `pg_isready`
- Check your `DATABASE_URL` format
- Ensure the database exists

### Port Already in Use
- Change `PORT` in `backend/.env`
- Change port in `frontend/vite.config.ts`

### Module Not Found Errors
- Run `npm run install:all` again
- Delete `node_modules` and reinstall

### Prisma Client Not Generated
- Run `cd backend && npm run prisma:generate`

## 📚 Next Steps

1. **Customize the UI:** Update components in `frontend/src/components/`
2. **Add Features:** Create new routes and controllers
3. **Database Models:** Add new models to `prisma/schema.prisma`
4. **Authentication:** Implement protected routes on frontend
5. **API Integration:** Connect frontend to backend APIs

## 🆘 Need Help?

- Check the README files in `frontend/` and `backend/` directories
- Review the code structure and comments
- Check Prisma documentation: https://www.prisma.io/docs

Happy coding! 🚀

