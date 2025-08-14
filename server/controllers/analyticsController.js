import Order from '../models/Order.js';
import Payment from '../models/Payment.js';
import User from '../models/User.js';

// Get total number of users
export const getTotalUsers = async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ totalUsers: count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get total number of orders
export const getTotalOrders = async (req, res) => {
  try {
    const count = await Order.countDocuments();
    res.json({ totalOrders: count });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get total revenue from payments
export const getTotalRevenue = async (req, res) => {
  try {
    const result = await Payment.aggregate([
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);
    const totalRevenue = result[0]?.total || 0;
    res.json({ totalRevenue });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get orders per day (last 7 days)
export const getOrdersPerDay = async (req, res) => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);

    const orders = await Order.aggregate([
      { $match: { createdAt: { $gte: sevenDaysAgo } } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json({ ordersPerDay: orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};