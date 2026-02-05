import { apiFetch } from '@/lib/api';
import { Report, Inquiry } from './reports';

// Report Service
export const getReports = async (): Promise<Report[]> => {
    return apiFetch('/reports');
};

export const getReportById = async (id: string): Promise<Report> => {
    return apiFetch(`/reports/${id}`);
};

export const addReport = async (report: Partial<Report>) => {
    return apiFetch('/admin/reports', {
        method: 'POST',
        body: JSON.stringify(report),
    });
};

export const updateReport = async (report: Report) => {
    return apiFetch(`/admin/reports/${report.id}`, {
        method: 'PUT',
        body: JSON.stringify(report),
    });
};

export const deleteReport = async (id: string) => {
    return apiFetch(`/admin/reports/${id}`, {
        method: 'DELETE',
    });
};

// Inquiry Service
export const getInquiries = async (): Promise<Inquiry[]> => {
    return apiFetch('/admin/inquiries');
};

export const saveInquiry = async (inquiry: Partial<Inquiry>) => {
    return apiFetch('/inquiries', {
        method: 'POST',
        body: JSON.stringify(inquiry),
    });
};

export const updateInquiryStatus = async (id: string, status: Inquiry['status']) => {
    return apiFetch(`/admin/inquiries/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
    });
};

export const deleteInquiry = async (id: string) => {
    return apiFetch(`/admin/inquiries/${id}`, {
        method: 'DELETE',
    });
};
