import express from 'express';
import { sendSubscriptionEmail } from '../controllers/subscriptionController';

const router = express.Router();

router.post('/sendmail', sendSubscriptionEmail);

export default router;
