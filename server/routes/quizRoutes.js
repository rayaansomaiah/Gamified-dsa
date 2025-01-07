import express from 'express';
import { saveQuizResult, getQuizHistory } from '../controllers/QuizController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/result', protect, saveQuizResult);
router.get('/history', protect, getQuizHistory);

export default router;