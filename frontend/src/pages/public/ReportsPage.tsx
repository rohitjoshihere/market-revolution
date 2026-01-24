import { useState, useMemo } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import {
  Calendar,
  Search,
  Plus,
  ArrowRight,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterSection from '@/components/public/NewsletterSection';
import { allReports } from '@/data/reports';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const ReportsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const reportsPerPage = 3;

  const categories = [
    { name: 'Energy & Power', count: 6 },
    { name: 'Healthcare', count: 7 },
    { name: 'Technology', count: 8 },
    { name: 'Advanced Materials', count: 6 },
    { name: 'Bulk Chemicals', count: 9 },
    { name: 'Specialty & Chemicals', count: 5 },
    { name: 'Semiconductors & Electronics', count: 5 },
    { name: 'Consumer Goods', count: 9 },
  ];

  const filteredReports = useMemo(() => {
    return allReports.filter(report => {
      const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? report.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

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

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Sidebar - Reports by Industry */}
          <aside className="w-full lg:w-1/4">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl border border-[#F3F2F1] shadow-sm overflow-hidden">
                <div className="bg-[#F3F2F1]/50 px-6 py-4 border-b border-[#F3F2F1] flex items-center justify-between">
                  <h2 className="text-lg font-bold text-[#283F3B] flex items-center">
                    <Filter className="w-5 h-5 mr-2 text-primary" />
                    Industries
                  </h2>
                  {selectedCategory && (
                    <button
                      onClick={() => { setSelectedCategory(null); setCurrentPage(1); }}
                      className="text-xs text-primary font-bold hover:underline"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="divide-y divide-[#F3F2F1]">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedCategory(selectedCategory === cat.name ? null : cat.name);
                        setCurrentPage(1);
                      }}
                      className={`w-full flex items-center justify-between px-6 py-4 transition-colors group ${selectedCategory === cat.name ? 'bg-primary/5' : 'hover:bg-[#F3F2F1]/30'}`}
                    >
                      <div className={`flex items-center transition-colors ${selectedCategory === cat.name ? 'text-primary' : 'text-gray-600 group-hover:text-[#283F3B]'}`}>
                        <Plus className={`w-4 h-4 mr-3 transition-colors ${selectedCategory === cat.name ? 'text-primary scale-125' : 'text-primary/60 group-hover:text-primary'}`} />
                        <span className="font-medium">{cat.name}</span>
                      </div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full transition-all ${selectedCategory === cat.name ? 'bg-primary text-white' : 'text-gray-400 bg-[#F3F2F1] group-hover:bg-primary/10 group-hover:text-primary'}`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Widget */}
              <div className="mt-8 relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  placeholder="Search reports..."
                  className="w-full px-6 py-4 bg-white border border-[#F3F2F1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all pr-12"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
              </div>

              <div className="mt-8 p-6 bg-[#283F3B] rounded-3xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-2">Need a custom report?</h3>
                  <p className="text-white/70 text-sm mb-4">Our analysts can tailor research to your specific business needs.</p>
                  <Link to="/contact" className="inline-flex items-center text-primary-light font-bold hover:underline">
                    Request Customization
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary opacity-20 rounded-full filter blur-[20px] group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
          </aside>

          {/* Main Content - Reports & Publication */}
          <main className="w-full lg:w-3/4">
            <div className="flex items-center justify-between mb-8 border-b border-[#F3F2F1] pb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#283F3B]">
                {selectedCategory ? `${selectedCategory} Reports` : 'Reports & Publication'}
                <span className="text-sm font-normal text-gray-400 ml-3">({filteredReports.length} total)</span>
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Sort by:</span>
                <select className="bg-transparent font-medium text-[#283F3B] focus:outline-none">
                  <option>Latest</option>
                  <option>Popular</option>
                </select>
              </div>
            </div>

            {currentReports.length > 0 ? (
              <div className="space-y-12">
                {currentReports.map((report, idx) => (
                  <article key={report.id} className="group relative">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded">
                          {report.category}
                        </span>
                      </div>

                      <Link to={`/reports/${report.id}`}>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#283F3B] hover:text-primary transition-colors leading-tight">
                          {report.title}
                        </h3>
                      </Link>

                      <p className="text-gray-600 leading-relaxed text-base">
                        {report.description}
                        <Link to={`/reports/${report.id}`} className="text-primary font-bold hover:underline ml-1 inline-flex items-center">
                          Read More »
                        </Link>
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {report.date}
                          </div>
                          <div className="flex items-center">
                            <Plus className="w-4 h-4 mr-2" />
                            Single User License
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => handlePayment(report.title)}
                            className="px-6 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95"
                          >
                            Buy Now
                          </button>
                          <Link
                            to={`/reports/${report.id}`}
                            className="px-6 py-2.5 border-2 border-[#283F3B]/10 text-[#283F3B] rounded-xl font-bold hover:bg-[#F3F2F1] transition-all"
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                    {idx !== currentReports.length - 1 && (
                      <div className="mt-12 border-b border-dashed border-gray-200"></div>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F3F2F1] mb-6">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-[#283F3B] mb-2">No reports found</h3>
                <p className="text-gray-500">Try adjusting your search or category filters.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F3F2F1] text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed border border-[#F3F2F1] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-full font-bold transition-all ${currentPage === i + 1 ? 'bg-[#283F3B] text-white shadow-lg' : 'hover:bg-[#F3F2F1] text-gray-600 border border-[#F3F2F1]'}`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F3F2F1] text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed border border-[#F3F2F1] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
      <NewsletterSection />
    </PageLayout>
  );
};

export default ReportsPage;
