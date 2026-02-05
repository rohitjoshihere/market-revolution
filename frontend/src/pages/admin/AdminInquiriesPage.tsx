import { useState, useEffect } from 'react';
import { Mail, Phone, Calendar, Clock, Loader2, Trash2 } from 'lucide-react';
import { getInquiries, updateInquiryStatus, deleteInquiry } from '@/data/reportService';
import { Inquiry } from '@/data/reports';

const AdminInquiriesPage = () => {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchInquiries = async () => {
        setIsLoading(true);
        try {
            const data = await getInquiries();
            setInquiries(data);
        } catch (error) {
            console.error('Failed to fetch inquiries:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchInquiries();
    }, []);

    const handleStatusUpdate = async (id: string, status: Inquiry['status']) => {
        try {
            await updateInquiryStatus(id, status);
            fetchInquiries();
        } catch (error) {
            alert('Failed to update status');
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this inquiry?')) {
            try {
                await deleteInquiry(id);
                fetchInquiries();
            } catch (error) {
                alert('Failed to delete inquiry');
            }
        }
    };

    const getStatusColor = (status: Inquiry['status']) => {
        switch (status) {
            case 'new': return 'bg-blue-100 text-blue-800';
            case 'contacted': return 'bg-yellow-100 text-yellow-800';
            case 'closed': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-900">Lead Inquiries</h2>
                <div className="text-sm text-gray-500">
                    Total Inquiries: {inquiries.length}
                </div>
            </div>

            {isLoading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {inquiries.length === 0 ? (
                        <div className="bg-white p-12 rounded-xl border border-dashed border-gray-200 text-center">
                            <Mail className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-500 font-medium">No inquiries yet. They will appear here when users request report samples.</p>
                        </div>
                    ) : (
                        inquiries.map((inquiry) => (
                            <div key={inquiry.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="text-lg font-bold text-gray-900">{inquiry.name}</h3>
                                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(inquiry.status)}`}>
                                                    {inquiry.status}
                                                </span>
                                            </div>
                                            <p className="text-sm font-medium text-indigo-600 mb-1">Requested Sample for: {inquiry.reportName}</p>
                                            <div className="flex items-center text-xs text-gray-500 gap-4">
                                                <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {inquiry.date}</span>
                                                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {inquiry.id.split('-').pop()}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-6">
                                            <a href={`mailto:${inquiry.email}`} className="flex items-center text-sm text-gray-600 hover:text-indigo-600">
                                                <Mail className="w-4 h-4 mr-2" />
                                                {inquiry.email}
                                            </a>
                                            <a href={`tel:${inquiry.phone}`} className="flex items-center text-sm text-gray-600 hover:text-indigo-600">
                                                <Phone className="w-4 h-4 mr-2" />
                                                {inquiry.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {inquiry.status !== 'contacted' && (
                                            <button
                                                onClick={() => handleStatusUpdate(inquiry.id, 'contacted')}
                                                className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                                            >
                                                Mark Contacted
                                            </button>
                                        )}
                                        {inquiry.status !== 'closed' && (
                                            <button
                                                onClick={() => handleStatusUpdate(inquiry.id, 'closed')}
                                                className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-bold hover:bg-green-700 transition-colors"
                                            >
                                                Close Lead
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleDelete(inquiry.id)}
                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default AdminInquiriesPage;
