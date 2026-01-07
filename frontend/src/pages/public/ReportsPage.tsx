import PageLayout from '@/components/layout/PageLayout';
import NewsletterSection from '@/components/public/NewsletterSection';
import { FileText, Calendar, TrendingUp } from 'lucide-react';

const ReportsPage = () => {
  const reports = [
    {
      type: 'Market Analysis',
      title: 'Q4 2024 Market Analysis',
      description: 'Comprehensive market trends and competitive landscape analysis',
      date: 'December 2024',
    },
    {
      type: 'Growth Metrics',
      title: 'Industry Growth Report',
      description: 'Year-over-year growth metrics and industry benchmarks',
      date: 'November 2024',
    },
    {
      type: 'Consumer Research',
      title: 'Consumer Insights Study',
      description: 'Deep dive into consumer behavior and market preferences',
      date: 'October 2024',
    },
    {
      type: 'Strategy Guide',
      title: 'Digital Transformation Guide',
      description: 'Strategy for implementing digital solutions in your business',
      date: 'September 2024',
    },
  ];

  const whyReadBenefits = [
    {
      icon: TrendingUp,
      title: 'Data-Driven Insights',
      description: 'Evidence-based analysis using the latest market data',
    },
    {
      icon: TrendingUp,
      title: 'Actionable Strategies',
      description: 'Practical recommendations you can implement immediately',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Edge',
      description: 'Stay ahead of industry trends and market changes',
    },
  ];

  return (
    <PageLayout>
      {/* Header Section */}
      <div
      style={{
        background: 'linear-gradient(135deg, #F3F2F1 0%, #FFFFFF 100%)',
      }}
      className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#283F3B] mb-4 sm:mb-6">
              Healthcare
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              Access our latest market research and business insights
            </p>
          </div>
        </div>
      </div>

      {/* Reports Listing Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-white rounded-[16px] border-2 border-[#F3F2F1] hover:shadow-lg transition-shadow p-5 sm:p-6 relative"
              >
                {/* Report Type Tag */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium">
                    {report.type}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-3 sm:mb-4">
                  <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-primary/60" />
                </div>

                {/* Report Title */}
                <h3 className="text-base sm:text-lg font-semibold text-[#283F3B] mb-2 sm:mb-3 pr-16 sm:pr-20">
                  {report.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {report.description}
                </p>

                {/* Date */}
                <div className="flex items-center space-x-2 text-gray-500 mb-4 sm:mb-6">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">{report.date}</span>
                </div>

                {/* Button */}
                <button className="w-full px-4 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
                  Buy Report
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Read Our Reports? Section */}
      <section className="bg-[#F3F2F1] py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#283F3B] text-center mb-8 sm:mb-12">
              Why Read Our Reports?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {whyReadBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex flex-col items-center space-y-3 sm:space-y-4 text-center">
                      <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
                    <h3 className="text-lg sm:text-xl font-semibold text-[#283F3B] mb-2 sm:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-4">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Need Custom Reports? Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#283F3B]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Need Custom Reports?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed px-4">
              Our team can create customized reports tailored to your specific business needs
            </p>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center">
              Request Custom Report
            </button>
          </div>
        </div>
      </section>
      <NewsletterSection/>

    </PageLayout>
  );
};

export default ReportsPage;

