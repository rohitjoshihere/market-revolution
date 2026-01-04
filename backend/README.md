# Market Revolution - Backend

Express + TypeScript + Prisma backend API for Market Revolution.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- PostgreSQL database

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/market_revolution"
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Database Setup

1. **Generate Prisma Client:**
   ```bash
   npm run prisma:generate
   ```

2. **Run migrations:**
   ```bash
   npm run prisma:migrate
   ```

3. **Open Prisma Studio (optional):**
   ```bash
   npm run prisma:studio
   ```

### Development

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── routes/         # API route definitions
├── controllers/    # Request handlers
├── middleware/     # Express middleware
├── services/       # Business logic
├── lib/           # Utility functions (Prisma client, etc.)
└── types/         # TypeScript type definitions
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Admin (Protected)
- `GET /api/admin/dashboard/stats` - Get dashboard statistics

## 🛠️ Tech Stack

- **Express** - Web framework
- **TypeScript** - Type safety
- **Prisma** - ORM for PostgreSQL
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Zod** - Schema validation
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **express-rate-limit** - Rate limiting

