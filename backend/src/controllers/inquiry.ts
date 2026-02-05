import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';

export const getAllInquiries = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const inquiries = await prisma.inquiry.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                report: {
                    select: {
                        title: true,
                    }
                }
            }
        });
        res.json(inquiries);
    } catch (error) {
        next(error);
    }
};

export const createInquiry = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const inquiryData = req.body;
        const inquiry = await prisma.inquiry.create({
            data: inquiryData,
        });
        res.status(201).json(inquiry);
    } catch (error) {
        next(error);
    }
};

export const updateInquiryStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const inquiry = await prisma.inquiry.update({
            where: { id },
            data: { status },
        });
        res.json(inquiry);
    } catch (error) {
        next(error);
    }
};

export const deleteInquiry = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await prisma.inquiry.delete({
            where: { id },
        });
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
