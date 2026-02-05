import { useState, useMemo, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import {
  Calendar,
  Search,
  Plus,
  ArrowRight,
  Filter,
  ChevronLeft,
  ChevronRight,
  Loader2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterSection from '@/components/public/NewsletterSection';
import { getReports } from '@/data/reportService';
import { Report } from '@/data/reports';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const ReportsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [allReportsList, setAllReportsList] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const reportsPerPage = 6;

  useEffect(() => {
    const fetchReports = async () => {
      setIsLoading(true);
      try {
        const data = await getReports();
        setAllReportsList(data);
      } catch (error) {
        console.error('Failed to fetch reports:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReports();
  }, []);

  const dynamicCategories = useMemo(() => {
    const counts: Record<string, number> = {};
    allReportsList.forEach(report => {
      counts[report.category] = (counts[report.category] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [allReportsList]);

  const filteredReports = useMemo(() => {
    return allReportsList.filter(report => {
      const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? report.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [allReportsList, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);
  const currentReports = filteredReports.slice((currentPage - 1) * reportsPerPage, currentPage * reportsPerPage);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (reportTitle: string) => {
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const options = {
      key: "rzp_test_YOUR_KEY_HERE",
      amount: "249900",
      currency: "USD",
      name: "Market Revolution",
      description: reportTitle,
      handler: function (response: any) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
      },
      theme: { color: "#283F3B" },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <PageLayout>
      {/* Header / Hero Section */}
      <div className="bg-[#283F3B] py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full filter blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Industry Insights & <span className="text-primary-light">Market Reports</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              Access deep-dive research across global industry sectors to empower your strategic decision-making with data-driven insights.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFB] min-h-screen py-10 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-1 space-y-10">
              {/* Search Widget */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-[#283F3B] mb-6 flex items-center">
                  <Search className="w-5 h-5 mr-3 text-primary" />
                  Search Reports
                </h3>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm font-medium"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                </div>
              </div>

              {/* Categories Sidebar */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-bold text-[#283F3B]">Categories</h3>
                  <Filter className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-bold transition-all ${!selectedCategory ? 'bg-primary text-white shadow-lg shadow-primary/20 translate-x-2' : 'text-gray-500 hover:bg-gray-50 hover:text-[#283F3B]'}`}
                  >
                    <span>All Industries</span>
                  </button>
                  {dynamicCategories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-bold transition-all ${selectedCategory === cat.name ? 'bg-primary text-white shadow-lg shadow-primary/20 translate-x-2' : 'text-gray-500 hover:bg-gray-50 hover:text-[#283F3B]'}`}
                    >
                      <span className="text-left leading-tight">{cat.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${selectedCategory === cat.name ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400 font-bold'}`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Reports Listing */}
            <main className="lg:col-span-3 space-y-10">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                  <p className="text-gray-500 font-medium">Loading premium market reports...</p>
                </div>
              ) : filteredReports.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-10 h-10 text-gray-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#283F3B] mb-2">No Reports Found</h3>
                  <p className="text-gray-500">Try adjusting your search or category filters.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                      Showing <span className="text-[#283F3B]">{filteredReports.length}</span> Results
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    {currentReports.map((report) => (
                      <div key={report.id} className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-[#F3F2F1] hover:shadow-2xl hover:border-primary/10 transition-all duration-500 group relative flex flex-col md:flex-row gap-10">
                        {/* Report Icon/Cover Placeholder */}
                        <div className="w-full md:w-32 h-44 bg-[#283F3B] rounded-2xl flex-shrink-0 flex items-center justify-center p-6 text-center shadow-lg transform group-hover:-rotate-3 transition-transform">
                          <div className="space-y-2">
                            <Plus className="w-8 h-8 text-primary mx-auto" />
                            <span className="text-[10px] font-bold text-white/50 uppercase tracking-tighter block">Market Insights</span>
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 space-y-6">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-full">
                              {report.category}
                            </span>
                            <span className="flex items-center text-gray-400 text-xs font-bold uppercase tracking-widest">
                              <Calendar className="w-4 h-4 mr-2" />
                              {report.date}
                            </span>
                          </div>

                          <Link
                            to={`/reports/${report.id}`}
                            className="block group-hover:text-primary transition-colors"
                          >
                            <h2 className="text-2xl font-extrabold text-[#283F3B] leading-tight mb-4">
                              {report.title}
                            </h2>
                          </Link>

                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-medium">
                            {report.description}
                          </p>

                          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-gray-50">
                            <div className="flex items-baseline space-x-2">
                              <span className="text-xs font-bold text-gray-400 uppercase">Single Lite User:</span>
                              <span className="text-2xl font-black text-primary">{report.priceLabel}</span>
                            </div>
                            <div className="flex items-center space-x-4">
                              <Link
                                to={`/reports/${report.id}`}
                                className="px-6 py-3 text-sm font-bold text-[#283F3B] hover:text-primary transition-colors flex items-center group/btn"
                              >
                                View Details
                                <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                              </Link>
                              <button
                                onClick={() => handlePayment(report.title)}
                                className="px-8 py-3 bg-[#283F3B] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#283F3B]/10 hover:bg-primary transition-all active:scale-95"
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center space-x-3 pt-12">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="p-4 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-primary disabled:opacity-30 transition-all font-bold"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`w-14 h-14 rounded-2xl text-sm font-bold transition-all ${currentPage === i + 1 ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-110' : 'bg-white text-gray-500 border border-gray-100 hover:border-primary/30'}`}
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="p-4 bg-white border border-gray-100 rounded-2xl text-gray-400 hover:text-primary disabled:opacity-30 transition-all font-bold"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </main>
          </div>
        </div>
      </div>

      <NewsletterSection />
    </PageLayout>
  );
};

export default ReportsPage;
