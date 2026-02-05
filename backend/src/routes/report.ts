import { Router } from 'express';
import { getAllReports, getReportById } from '../controllers/report';

const router = Router();

router.get('/', getAllReports);
router.get('/:id', getReportById);

export default router;
