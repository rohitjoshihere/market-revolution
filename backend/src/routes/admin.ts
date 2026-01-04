import { Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { getDashboardStats } from '../controllers/adminController';

const router = Router();

// All admin routes require authentication
router.use(authenticateToken);

router.get('/dashboard/stats', getDashboardStats);

export default router;

