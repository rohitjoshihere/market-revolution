import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import {
    FileText,
    Calendar,
    TrendingUp,
    ChevronRight,
    Download,
    Share2,
    ShieldCheck,
    Globe,
    BarChart3,
    Clock,
    Layers,
    ArrowRight,
    Search,
    BookOpen,
    Layout
} from 'lucide-react';
import NewsletterSection from '@/components/public/NewsletterSection';
import { allReports } from '@/data/reports';

declare global {
    interface Window {
        Razorpay: any;
    }
}

const ReportDetailPage = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('summary');

    const reportData = allReports.find(r => r.id === id);

    const loadRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePayment = async () => {
        if (!reportData) return;
        const res = await loadRazorpay();

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const options = {
            key: "rzp_test_YOUR_KEY_HERE",
            amount: (reportData.priceAmount * 100).toString(),
            currency: "USD",
            name: "Market Revolution",
            description: reportData.title,
            image: "https://example.com/your_logo",
            handler: function (response: any) {
                alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: "John Doe",
                email: "john@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Market Revolution HQ",
            },
            theme: {
                color: "#283F3B",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

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

    const tabs = [
        { id: 'summary', label: 'Report Summary' },
        { id: 'toc', label: 'Table of Contents' },
        { id: 'segmentation', label: 'Segmentation' },
        { id: 'methodology', label: 'Methodology' },
    ];

    return (
        <PageLayout>
            {/* Top Search Bar / Breadcrumb Area */}
            <div className="bg-white border-b border-[#F3F2F1] sticky top-0 z-40">
                <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="relative w-full max-w-md group">
                        <input
                            type="text"
                            placeholder="Search reports..."
                            className="w-full pl-10 pr-4 py-2 bg-[#F3F2F1]/50 border border-transparent rounded-lg focus:bg-white focus:border-primary focus:outline-none transition-all"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary" />
                    </div>
                    <div className="flex items-center space-x-6 text-sm font-medium text-gray-600">
                        <Link to="/reports" className="hover:text-primary transition-colors">Reports</Link>
                        <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
                        <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
                        <Link to="/insights" className="hover:text-primary transition-colors">Insights</Link>
                    </div>
                </div>
            </div>

            <div className="bg-[#F9FAFB] min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
                        {/* Report Cover */}
                        <div className="relative w-full max-w-[200px] aspect-[3/4] bg-[#283F3B] rounded-lg shadow-2xl overflow-hidden flex-shrink-0 group">
                            <div className="absolute top-0 left-0 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-br-md z-10">PDF</div>
                            <div className="p-4 flex flex-col h-full justify-center items-center text-center text-white/90">
                                <BookOpen className="w-12 h-12 mb-4 text-primary-light" />
                                <div className="text-xs font-bold leading-tight uppercase tracking-tighter opacity-80">
                                    Market Analysis Report
                                </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/40 group-hover:h-full transition-all duration-500"></div>
                        </div>

                        {/* Title & Info */}
                        <div className="flex-1">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#283F3B] mb-4 leading-tight">
                                {reportData.title}
                            </h1>
                            <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-4xl font-medium">
                                Size, Share & Trends Analysis Report By Component (Software, Hardware, Services), By Diagnosis Type (Cardiology, Oncology, Pathology, Radiology, Chest And Lung, Neurology), By Region, And Segment Forecasts
                            </p>

                            {/* Tabs & Desktop Actions */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-gray-200 mt-8">
                                <div className="flex space-x-1 sm:space-x-8 overflow-x-auto no-scrollbar">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`pb-4 text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap relative ${activeTab === tab.id
                                                    ? 'text-primary'
                                                    : 'text-gray-400 hover:text-[#283F3B]'
                                                }`}
                                        >
                                            {tab.label}
                                            {activeTab === tab.id && (
                                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full shadow-[0_0_10px_rgba(40,184,171,0.5)]"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                                <button className="mb-4 sm:mb-0 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold shadow-lg shadow-orange-500/20 transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center">
                                    <Download className="w-5 h-5 mr-2" />
                                    Download FREE Sample
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Main Content Area */}
                        <div className="lg:col-span-3">
                            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#F3F2F1]">
                                {activeTab === 'summary' && (
                                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h2 className="text-2xl font-bold text-[#283F3B]">
                                            {reportData.category} Market Summary
                                        </h2>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {reportData.fullDescription || reportData.description}
                                        </p>

                                        {/* Trends & Insights */}
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-bold text-[#283F3B] flex items-center">
                                                <TrendingUp className="w-6 h-6 mr-3 text-primary" />
                                                Key Market Trends & Insights
                                            </h3>
                                            <ul className="space-y-4 ml-6">
                                                {reportData.highlights?.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start text-gray-700">
                                                        <div className="mt-2 mr-4 w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                                        <span className="leading-relaxed">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Market Size & Forecast (Visual placeholder) */}
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
                                    </div>
                                )}

                                {activeTab === 'toc' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h2 className="text-2xl font-bold text-[#283F3B] mb-8">Table of Contents</h2>
                                        <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                                            {reportData.tableOfContents?.map((item, idx) => (
                                                <div key={idx} className="flex justify-between items-center p-5 hover:bg-gray-50 transition-colors">
                                                    <span className="font-semibold text-gray-700 capitalize">{item.section}</span>
                                                    <span className="text-gray-400 text-sm font-mono tracking-tighter">PAGE {item.page}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'segmentation' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h2 className="text-2xl font-bold text-[#283F3B] mb-6">Market Segmentation</h2>
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
                                    </div>
                                )}

                                {activeTab === 'methodology' && (
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <h2 className="text-3xl font-bold text-[#283F3B] mb-8">Methodology</h2>
                                        <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                            {reportData.methodology || 'Our research methodology involves a proprietary 360-degree research process, covering primary and secondary research as well as detailed analyst reviews.'}
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
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1 space-y-8">
                            {/* Report Details Widget */}
                            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm overflow-hidden group">
                                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                                    <h3 className="text-xl font-extrabold text-[#283F3B]">Report Details</h3>
                                    <FileText className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
                                </div>
                                <div className="space-y-6 mb-8 text-sm">
                                    <div className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></div>
                                        <div className="flex-1">
                                            <span className="text-gray-400 font-bold uppercase text-[10px]">Report ID</span>
                                            <div className="text-[#283F3B] font-bold">GVR-4-68038-871-8</div>
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
                                    onClick={handlePayment}
                                    className="w-full py-4 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-2xl font-extrabold transition-all transform active:scale-95 shadow-lg shadow-primary/5 flex items-center justify-center uppercase tracking-widest text-xs"
                                >
                                    <TrendingUp className="w-4 h-4 mr-2" />
                                    Buy This Report
                                </button>
                            </div>

                            {/* Jump to Content Widget */}
                            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                                <h3 className="text-xl font-extrabold text-[#283F3B] mb-6 border-b border-gray-100 pb-4">Jump to Content</h3>
                                <div className="space-y-4">
                                    <button onClick={() => setActiveTab('summary')} className={`flex items-start text-left text-sm group ${activeTab === 'summary' ? 'text-primary font-bold' : 'text-gray-600 hover:text-primary'}`}>
                                        <ChevronRight className={`w-4 h-4 mr-2 mt-0.5 transition-transform ${activeTab === 'summary' ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                                        <span>Market Summary</span>
                                    </button>
                                    <button className="flex items-start text-left text-sm group text-gray-600 hover:text-primary transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2 mt-0.5 group-hover:translate-x-1 transition-transform" />
                                        <span>Case Study: Automated Detection</span>
                                    </button>
                                    <button className="flex items-start text-left text-sm group text-gray-600 hover:text-primary transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2 mt-0.5 group-hover:translate-x-1 transition-transform" />
                                        <span>Market Concentration & Characteristics</span>
                                    </button>
                                    <button onClick={() => setActiveTab('toc')} className="flex items-start text-left text-sm group text-gray-600 hover:text-primary transition-colors">
                                        <ChevronRight className="w-4 h-4 mr-2 mt-0.5 group-hover:translate-x-1 transition-transform" />
                                        <span>Component Insights</span>
                                    </button>
                                </div>
                            </div>

                            {/* Tailored Report Widget */}
                            <div className="bg-[#283F3B] rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-extrabold mb-4">Need a Tailored Report?</h3>
                                    <p className="text-white/60 text-sm mb-8 leading-relaxed">
                                        Customize this report to your needs — add regions, segments, or data points, with 20% free customization.
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="w-full py-4 bg-primary/20 hover:bg-primary/40 border border-primary/30 rounded-2xl flex items-center justify-center font-bold transition-all backdrop-blur-sm"
                                    >
                                        Customize This Report
                                    </Link>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary opacity-20 rounded-full filter blur-[40px] group-hover:scale-150 transition-transform duration-700"></div>
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
                        {allReports.filter(r => r.category === reportData.category && r.id !== reportData.id).slice(0, 3).map((related) => (
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
        </PageLayout>
    );
};

export default ReportDetailPage;
