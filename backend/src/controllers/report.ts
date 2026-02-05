import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';

const parseReport = (report: any) => {
    return {
        ...report,
        highlights: report.highlights ? JSON.parse(report.highlights) : [],
        tableOfContents: report.tableOfContents ? JSON.parse(report.tableOfContents) : [],
    };
};

export const getAllReports = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const reports = await prisma.report.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json(reports.map(parseReport));
    } catch (error) {
        next(error);
    }
};

export const getReportById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const report = await prisma.report.findUnique({
            where: { id },
        });
        if (!report) {
            return res.status(404).json({ message: 'Report not found' });
        }
        res.json(parseReport(report));
    } catch (error) {
        next(error);
    }
};

export const createReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { highlights, tableOfContents, ...rest } = req.body;
        const reportData = {
            ...rest,
            highlights: highlights ? JSON.stringify(highlights) : null,
            tableOfContents: tableOfContents ? JSON.stringify(tableOfContents) : null,
        };
        const report = await prisma.report.create({
            data: reportData,
        });
        res.status(201).json(parseReport(report));
    } catch (error) {
        next(error);
    }
};

export const updateReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { highlights, tableOfContents, ...rest } = req.body;
        const reportData = {
            ...rest,
            highlights: highlights ? JSON.stringify(highlights) : undefined,
            tableOfContents: tableOfContents ? JSON.stringify(tableOfContents) : undefined,
        };
        const report = await prisma.report.update({
            where: { id },
            data: reportData,
        });
        res.json(parseReport(report));
    } catch (error) {
        next(error);
    }
};

export const deleteReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        await prisma.report.delete({
            where: { id },
        });
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
