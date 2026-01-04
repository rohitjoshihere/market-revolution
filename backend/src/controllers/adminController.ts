import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { prisma } from '../lib/prisma';

export const getDashboardStats = async (req: AuthRequest, res: Response) => {
  try {
    // Get statistics
    const [totalUsers, totalAdmins] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({
        where: { role: 'ADMIN' },
      }),
    ]);

    res.json({
      success: true,
      data: {
        stats: {
          totalUsers,
          totalAdmins,
          totalRegularUsers: totalUsers - totalAdmins,
        },
      },
    });
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({
      success: false,
      error: { message: 'Failed to fetch dashboard statistics' },
    });
  }
};

