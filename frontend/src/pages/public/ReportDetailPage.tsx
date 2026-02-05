import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import {
    FileText,
    Calendar,
    TrendingUp,
    ChevronRight,
    Download,
    ShieldCheck,
    Globe,
    BarChart3,
    Clock,
    ArrowRight,
    BookOpen,
    Layout,
    Loader2
} from 'lucide-react';
import NewsletterSection from '@/components/public/NewsletterSection';
import InquiryModal from '@/components/public/InquiryModal';
import { getReports, getReportById } from '@/data/reportService';
import { Report } from '@/data/reports';

const ReportDetailPage = () => {
    const { id } = useParams();
    const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
    const [reportData, setReportData] = useState<Report | null>(null);
    const [allReportsList, setAllReportsList] = useState<Report[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                if (id) {
                    const data = await getReportById(id);
                    setReportData(data);

                    // Also fetch all for "Related Research"
                    const allData = await getReports();
                    setAllReportsList(allData);
                }
            } catch (error) {
                console.error('Failed to fetch report detail:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const sections = [
        { id: 'summary', label: 'Report Summary' },
        { id: 'toc', label: 'Table of Contents' },
        { id: 'segmentation', label: 'Segmentation' },
        { id: 'methodology', label: 'Methodology' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const renderRichText = (html?: string | null) => {
        if (!html) return null;
        return <div className="prose prose-indigo max-w-none" dangerouslySetInnerHTML={{ __html: html }} />;
    };

    if (isLoading) {
        return (
            <PageLayout>
                <div className="flex flex-col items-center justify-center py-40">
                    <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                    <p className="text-gray-500 font-medium tracking-wide">Analysing market data...</p>
                </div>
            </PageLayout>
        );
    }

    if (!reportData) {
        return (
            <PageLayout>
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl font-bold text-[#283F3B] mb-4">Report Not Found</h1>
                    <p className="text-gray-600 mb-8">The report you are looking for does not exist or has been moved.</p>
                    <Link to="/reports" className="px-8 py-3 bg-primary text-white rounded-lg font-bold">
                        Back to Reports
                    </Link>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            <div className="bg-[#F9FAFB] min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
                        <div className="flex-1">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#283F3B] mb-4 leading-tight">
                                {reportData.title}
                            </h1>
                            <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-4xl font-medium">
                                {reportData.description}
                            </p>

                            {/* Header Actions */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-8">
                                <div className="flex flex-wrap gap-4 text-gray-500 text-sm font-semibold">
                                    <div className="flex items-center bg-white px-3 py-1 rounded-full border border-gray-200">
                                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                                        <span>Published: {reportData.date}</span>
                                    </div>
                                    <div className="flex items-center bg-white px-3 py-1 rounded-full border border-gray-200">
                                        <BookOpen className="w-4 h-4 mr-2 text-primary" />
                                        <span>{reportData.pages || 150} Pages</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsInquiryModalOpen(true)}
                                    className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold shadow-lg shadow-orange-500/20 transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    Download FREE Sample
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Vertical Tabs & Content Area */}
                        <div className="lg:col-span-9 flex flex-col md:flex-row gap-8">
                            {/* Vertical Navigation Sidebar */}
                            <nav className="w-full md:w-64 flex-shrink-0 space-y-2 sticky top-24 h-fit">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className="w-full flex items-center px-6 py-4 rounded-2xl font-bold transition-all duration-300 group bg-white text-gray-500 hover:bg-gray-50 hover:text-[#283F3B] border border-gray-100 hover:translate-x-2"
                                    >
                                        <ChevronRight className="w-4 h-4 mr-3 text-primary transition-transform group-hover:translate-x-1" />
                                        <span className="text-sm tracking-tight">{section.label}</span>
                                    </button>
                                ))}

                                <div className="mt-8 p-6 bg-white rounded-2xl border border-dashed border-gray-200 hidden md:block">
                                    <p className="text-xs text-gray-400 font-medium leading-relaxed">
                                        Need specific data points? Our analysts can help you with customized segmentation.
                                    </p>
                                </div>
                            </nav>

                            {/* One Continuous Page Content Panel */}
                            <div className="flex-1 space-y-12 mb-20">
                                {/* Summary Section */}
                                <div id="summary" className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#F3F2F1] space-y-10">
                                    <h2 className="text-2xl font-bold text-[#283F3B]">
                                        {reportData.category} Market Summary
                                    </h2>
                                    {reportData.summaryContent ? (
                                        renderRichText(reportData.summaryContent)
                                    ) : (
                                        <>
                                            <p className="text-lg text-gray-600 leading-relaxed">
                                                {reportData.fullDescription || reportData.description}
                                            </p>
                                            <div className="p-8 bg-[#F9FAFB] rounded-2xl border border-gray-100 space-y-4">
                                                <h3 className="text-lg font-bold text-[#283F3B]">Market Size & Forecast</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                    <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm">
                                                        <BarChart3 className="w-8 h-8 text-primary" />
                                                        <div>
                                                            <div className="text-xs text-gray-400 font-bold uppercase">2025 Market Size</div>
                                                            <div className="text-xl font-bold text-[#283F3B]">$1.97 Billion</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border-2 border-primary/20">
                                                        <TrendingUp className="w-8 h-8 text-primary" />
                                                        <div>
                                                            <div className="text-xs text-gray-400 font-bold uppercase">2033 Projected</div>
                                                            <div className="text-xl font-bold text-primary">$9.68 Billion</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-500 italic mt-4">
                                                    * Market is expected to register a CAGR of 21.74% from 2026 to 2033.
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* TOC Section */}
                                <div id="toc" className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#F3F2F1]">
                                    <h2 className="text-2xl font-bold text-[#283F3B] mb-8">Table of Contents</h2>
                                    {renderRichText(reportData.tocContent) || (
                                        <div className="p-6 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-center">
                                            <p className="text-gray-500 text-sm font-medium">Standard table of contents included in full report.</p>
                                        </div>
                                    )}
                                </div>

                                {/* Segmentation Section */}
                                <div id="segmentation" className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#F3F2F1]">
                                    <h2 className="text-2xl font-bold text-[#283F3B] mb-6">Market Segmentation</h2>
                                    {renderRichText(reportData.segmentationContent) || (
                                        <>
                                            <p className="text-gray-600 leading-relaxed mb-8">
                                                The global market is segmented based on component, type, application, and geography. Each segment is analyzed in depth to provide a clear picture of high-growth areas.
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                                    <h4 className="font-bold text-[#283F3B] mb-4 flex items-center">
                                                        <Layout className="w-4 h-4 mr-2 text-primary" />
                                                        By Component
                                                    </h4>
                                                    <ul className="space-y-2 text-sm text-gray-600 font-medium">
                                                        <li>• Hardware</li>
                                                        <li>• Software</li>
                                                        <li>• Services</li>
                                                    </ul>
                                                </div>
                                                <div className="p-6 bg-[#283F3B]/5 rounded-2xl border border-[#283F3B]/10">
                                                    <h4 className="font-bold text-[#283F3B] mb-4 flex items-center">
                                                        <Globe className="w-4 h-4 mr-2 text-[#283F3B]" />
                                                        By Region
                                                    </h4>
                                                    <ul className="space-y-2 text-sm text-gray-600 font-medium">
                                                        <li>• North America</li>
                                                        <li>• Europe</li>
                                                        <li>• Asia Pacific</li>
                                                        <li>• Latin America & MEA</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Methodology Section */}
                                <div id="methodology" className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#F3F2F1]">
                                    <h2 className="text-3xl font-bold text-[#283F3B] mb-8">Methodology</h2>
                                    {renderRichText(reportData.methodology) || (
                                        <>
                                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                                Our research methodology involves a proprietary 360-degree research process, covering primary and secondary research as well as detailed analyst reviews.
                                            </p>
                                            <div className="flex items-center space-x-12">
                                                <div className="text-center">
                                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <ShieldCheck className="w-8 h-8 text-primary" />
                                                    </div>
                                                    <div className="text-sm font-bold text-[#283F3B]">Verified Data</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="w-16 h-16 bg-[#283F3B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                        <Clock className="w-8 h-8 text-[#283F3B]" />
                                                    </div>
                                                    <div className="text-sm font-bold text-[#283F3B]">Updated Daily</div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Widget Area */}
                        <aside className="lg:col-span-3 space-y-8">
                            {/* Report Details Widget */}
                            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm overflow-hidden group sticky top-24">
                                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                                    <h3 className="text-xl font-extrabold text-[#283F3B]">Report Details</h3>
                                    <FileText className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                                </div>
                                <div className="space-y-6 mb-8 text-sm">
                                    <div className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></div>
                                        <div className="flex-1">
                                            <span className="text-gray-400 font-bold uppercase text-[10px]">Report ID</span>
                                            <div className="text-[#283F3B] font-bold">GVR-4-68038-{reportData.id.slice(-4)}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></div>
                                        <div className="flex-1">
                                            <span className="text-gray-400 font-bold uppercase text-[10px]">No. of Pages</span>
                                            <div className="text-[#283F3B] font-bold">{reportData.pages || 150}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></div>
                                        <div className="flex-1">
                                            <span className="text-gray-400 font-bold uppercase text-[10px]">Format</span>
                                            <div className="text-[#283F3B] font-bold">PDF, Databook</div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsInquiryModalOpen(true)}
                                    className="w-full py-4 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-2xl font-extrabold transition-all transform active:scale-95 shadow-lg shadow-primary/5 flex items-center justify-center uppercase tracking-widest text-xs"
                                >
                                    <TrendingUp className="w-4 h-4 mr-2" />
                                    Buy This Report
                                </button>

                                <div className="mt-8 pt-8 border-t border-gray-100">
                                    <div className="bg-[#283F3B] rounded-2xl p-6 text-white text-center">
                                        <h4 className="font-bold mb-2">Tailored Research</h4>
                                        <p className="text-xs text-white/60 mb-4">Request 20% free customization for your data needs.</p>
                                        <button
                                            onClick={() => setIsInquiryModalOpen(true)}
                                            className="inline-block text-xs font-bold text-primary-light hover:underline"
                                        >
                                            Customize Now →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            {/* Related Research */}
            <section className="bg-white border-t border-gray-100 py-20 lg:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#283F3B] mb-4">Related Research</h2>
                            <div className="h-1.5 w-20 bg-primary rounded-full"></div>
                        </div>
                        <Link to="/reports" className="hidden sm:flex items-center text-primary font-bold hover:underline group">
                            Explore All Reports
                            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {allReportsList.filter(r => r.category === reportData.category && r.id !== reportData.id).slice(0, 3).map((related) => (
                            <div key={related.id} className="bg-[#F9FAFB] rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                                <div className="flex items-center space-x-2 mb-6 text-primary font-bold text-xs uppercase tracking-widest">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    <span>Market Analysis</span>
                                </div>
                                <h4 className="text-xl font-bold text-[#283F3B] mb-6 group-hover:text-primary transition-colors line-clamp-2">
                                    {related.title}
                                </h4>
                                <div className="flex justify-between items-center text-sm font-bold pt-6 border-t border-gray-200/50">
                                    <span className="flex items-center text-gray-400">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {related.date}
                                    </span>
                                    <Link to={`/reports/${related.id}`} className="text-[#283F3B] hover:text-primary transition-colors flex items-center">
                                        View
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <NewsletterSection />

            <InquiryModal
                isOpen={isInquiryModalOpen}
                onClose={() => setIsInquiryModalOpen(false)}
                reportId={reportData.id}
                reportName={reportData.title}
            />
        </PageLayout>
    );
};

export default ReportDetailPage;
