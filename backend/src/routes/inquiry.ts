import { Router } from 'express';
import { createInquiry } from '../controllers/inquiry';

const router = Router();

router.post('/', createInquiry);

export default router;
