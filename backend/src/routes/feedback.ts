import { Router } from 'express';
import { getFeedback,addFeedback } from '../controllers/feedback'
import { limiter } from '../middleware/limiter';

const router = Router();


router.route('/feedback').get(getFeedback);

router.route('/feedback').post(limiter,addFeedback);

export default router;
