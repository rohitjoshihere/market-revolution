import { Router } from 'express';
import { authenticateToken, requireAdmin } from '../middleware/auth';
import { getDashboardStats } from '../controllers/adminController';
import { createReport, updateReport, deleteReport, getAllReports } from '../controllers/report';
import { getAllInquiries, updateInquiryStatus, deleteInquiry } from '../controllers/inquiry';

const router = Router();

// All admin routes require authentication and admin role
router.use(authenticateToken);
router.use(requireAdmin);

router.get('/dashboard/stats', getDashboardStats);

// Report management
router.get('/reports', getAllReports);
router.post('/reports', createReport);
router.put('/reports/:id', updateReport);
router.delete('/reports/:id', deleteReport);

// Inquiry management
router.get('/inquiries', getAllInquiries);
router.patch('/inquiries/:id/status', updateInquiryStatus);
router.delete('/inquiries/:id', deleteInquiry);

export default router;

