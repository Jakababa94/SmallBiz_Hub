import express from 'express';
import { getTotalUsers, getTotalOrders, getTotalRevenue, getOrdersPerDay } from '../controllers/analyticsController.js';

const router = express.Router();

router.get('/total-users', getTotalUsers);
router.get('/total-orders', getTotalOrders);
router.get('/total-revenue', getTotalRevenue);
router.get('/orders-per-day', getOrdersPerDay);

export default router;
