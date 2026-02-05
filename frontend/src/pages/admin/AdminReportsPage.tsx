import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Save, Loader2 } from 'lucide-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getReports, deleteReport, updateReport, addReport } from '@/data/reportService';
import { Report } from '@/data/reports';

const AdminReportsPage = () => {
    const [reports, setReports] = useState<Report[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingReport, setEditingReport] = useState<Report | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Form State
    const [formData, setFormData] = useState<Partial<Report>>({
        id: '',
        title: '',
        category: 'Healthcare',
        description: '',
        fullDescription: '',
        date: '',
        priceAmount: 0,
        priceLabel: '',
        pages: 0,
        highlights: [],
        tableOfContents: [],
        methodology: '',
        summaryContent: '',
        tocContent: '',
        segmentationContent: '',
        highlightsContent: ''
    });

    const fetchReports = async () => {
        setIsLoading(true);
        try {
            const data = await getReports();
            setReports(data);
        } catch (error) {
            console.error('Failed to fetch reports:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []);

    const handleOpenModal = (report?: Report) => {
        if (report) {
            setEditingReport(report);
            setFormData(report);
        } else {
            setEditingReport(null);
            setFormData({
                title: '',
                category: 'Healthcare',
                description: '',
                fullDescription: '',
                date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric' }),
                priceAmount: 2499,
                priceLabel: '$2,499',
                pages: 150,
                highlights: [],
                tableOfContents: [],
                methodology: '',
                summaryContent: '',
                tocContent: '',
                segmentationContent: '',
                highlightsContent: ''
            });
        }
        setIsModalOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this report?')) {
            try {
                await deleteReport(id);
                fetchReports();
            } catch (error) {
                alert('Failed to delete report');
            }
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            if (editingReport) {
                await updateReport(formData as Report);
            } else {
                await addReport(formData);
            }
            fetchReports();
            setIsModalOpen(false);
        } catch (error) {
            alert('Failed to save report');
        } finally {
            setIsSaving(false);
        }
    };

    const quillModules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'clean']
        ],
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-900">Manage Reports</h2>
                <button
                    onClick={() => handleOpenModal()}
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Add New Report
                </button>
            </div>

            {isLoading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {reports.map((report) => (
                                <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900 line-clamp-1">{report.title}</div>
                                        <div className="text-xs text-gray-500">{report.id}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                            {report.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{report.priceLabel}</td>
                                    <td className="px-6 py-4 text-right space-x-3">
                                        <button
                                            onClick={() => handleOpenModal(report)}
                                            className="text-indigo-600 hover:text-indigo-900 transition-colors"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(report.id)}
                                            className="text-red-600 hover:text-red-900 transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Report Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto shadow-2xl">
                        <div className="sticky top-0 bg-white px-8 py-6 border-b border-gray-200 flex justify-between items-center z-10">
                            <h3 className="text-xl font-bold text-gray-900">
                                {editingReport ? 'Edit Report' : 'Create New Report'}
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-8 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Report Title</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                                        placeholder="Global AI in Diagnostics Market Analysis..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                    >
                                        <option>Healthcare</option>
                                        <option>Technology</option>
                                        <option>Energy & Power</option>
                                        <option>Advanced Materials</option>
                                        <option>Bulk Chemicals</option>
                                        <option>Specialty & Chemicals</option>
                                        <option>Semiconductors & Electronics</option>
                                        <option>Consumer Goods</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Price Label</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.priceLabel}
                                        onChange={(e) => setFormData({ ...formData, priceLabel: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                        placeholder="$2,499"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Short Description (for Listing Page)</label>
                                    <textarea
                                        rows={2}
                                        required
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                                        placeholder="Brief summary..."
                                    />
                                </div>

                                {/* Rich Text Fields */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Market Summary (Tab 1 Content)</label>
                                    <div className="bg-white">
                                        <ReactQuill
                                            theme="snow"
                                            value={formData.summaryContent || ''}
                                            onChange={(val) => setFormData({ ...formData, summaryContent: val })}
                                            modules={quillModules}
                                            className="h-64 mb-12"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Table of Contents (Tab 2 Content)</label>
                                    <div className="bg-white">
                                        <ReactQuill
                                            theme="snow"
                                            value={formData.tocContent || ''}
                                            onChange={(val) => setFormData({ ...formData, tocContent: val })}
                                            modules={quillModules}
                                            className="h-64 mb-12"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Segmentation (Tab 3 Content)</label>
                                    <div className="bg-white">
                                        <ReactQuill
                                            theme="snow"
                                            value={formData.segmentationContent || ''}
                                            onChange={(val) => setFormData({ ...formData, segmentationContent: val })}
                                            modules={quillModules}
                                            className="h-64 mb-12"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Methodology (Tab 4 Content)</label>
                                    <div className="bg-white">
                                        <ReactQuill
                                            theme="snow"
                                            value={formData.methodology || ''}
                                            onChange={(val) => setFormData({ ...formData, methodology: val })}
                                            modules={quillModules}
                                            className="h-64 mb-12"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end pt-6 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-2 text-gray-700 hover:text-gray-900 mr-4 font-bold"
                                    disabled={isSaving}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-8 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 flex items-center shadow-lg shadow-indigo-200 disabled:opacity-50"
                                    disabled={isSaving}
                                >
                                    {isSaving ? (
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    ) : (
                                        <Save className="w-4 h-4 mr-2" />
                                    )}
                                    {isSaving ? 'Saving...' : 'Save Report'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminReportsPage;
