import PageLayout from '@/components/layout/PageLayout';
import { TrendingUp, BarChart3, Zap, Lightbulb } from 'lucide-react';

const ServicesPage = () => {
    const keyFeatures = [
        'Market sizing and segmentation intelligence',
        'Forecast factors and trend analysis',
        'Granular segment and geography prioritization',
        'Regional and country-level analysis',
        'Mature vs. emerging market opportunities',
    ];

    const capabilities = [
        {
            title: 'Comprehensive Market Sizing',
            description:
                'We analyze the market across key segments and provide regional and country-level insights to highlight the mature markets and emerging opportunities.',
        },
        {
            title: 'Segmentation Intelligence',
            description:
                'Deep dive into market segments by product type, technology, application, and end-user to identify high-growth opportunities.',
        },
        {
            title: 'Granular Geographic Analysis',
            description:
                'Our approach enables organizations to prioritize the most attractive segments and geographies for investment and expansion.',
        },
        {
            title: 'Future Market Forecasts',
            description:
                'Clear understanding of how markets are structured today and how they will evolve tomorrow with detailed projections.',
        },
    ];

    const whyChooseBenefits = [
        {
            title: 'Data-Driven Insights',
            description: 'Based on primary research and validated market data',
        },
        {
            title: 'Expert Analysis',
            description: 'Delivered by industry specialists with deep domain expertise',
        },
        {
            title: 'Actionable Recommendations',
            description: 'Strategic insights you can immediately implement',
        },
    ];

    return (
        <PageLayout>
            {/* Hero Section */}
            <div
                style={{
                    background: 'linear-gradient(135deg, #F3F2F1 0%, #FFFFFF 100%)',
                }}
                className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
            >
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#283F3B] mb-4 sm:mb-6">
                        Our Services
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
                        Comprehensive market research and intelligence services tailored to your business needs
                    </p>
                </div>
            </div>

            {/* Market & Industry Insights Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24">
                <div className="max-w-7xl mx-auto">
                    {/* Icon and Title */}
                    <div className="flex flex-col items-start space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                        <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6'>
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#283F3B]">
                                Market & Industry Insights
                            </h2>
                        </div>
                        <div>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
                                Understand market forces, trends, and future opportunities. Our Market & Industry
                                Insights service delivers a comprehensive, data-driven view of industry dynamics,
                                helping businesses anticipate change, reduce risk, and identify sustainable growth
                                opportunities.
                            </p>
                        </div>
                    </div>
                    <hr />
                    {/* Key Features Subsection */}
                    <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#283F3B] mb-4 sm:mb-6">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {keyFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3 bg-[#F9FAFB] p-3 rounded-[8px]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z" stroke="#4CB8AB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M7.5 9.99998L9.16667 11.6666L12.5 8.33331" stroke="#4CB8AB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Capabilities Subsection */}
                    <div className="mt-12 mb-12">
                        <h3 className="text-2xl font-bold text-[#283F3B] mb-6">Our Capabilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {capabilities.map((capability, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 border border-[#4CB8AB] hover:shadow-lg transition-shadow"
                                >
                                    <h4 className="text-xl font-bold text-[#283F3B] mb-3">{capability.title}</h4>
                                    <p className="text-gray-700 leading-relaxed">{capability.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Market & Industry Insights? Subsection */}
                    <div
                        style={{
                            background: 'linear-gradient(135deg, rgba(76, 184, 171, 0.1) 0%, rgba(242, 135, 58, 0.1) 100%)',
                            border: '1px solid rgba(76, 184, 171, 0.2)',
                            borderRadius: '16px',
                        }}
                        className="my-8 sm:my-12 bg-secondary rounded-xl p-6 sm:p-8 md:p-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#283F3B] mb-6 sm:mb-8 text-center">
                            Why Choose Market & Industry Insights?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            {whyChooseBenefits.map((benefit, index) => (
                                <div key={index} className="flex space-x-3 sm:space-x-4">
                                    <div className="flex-shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CB8AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 12L11 14L15 10" stroke="#4CB8AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h4 className="text-lg sm:text-xl font-bold text-[#283F3B] mb-2 sm:mb-3">{benefit.title}</h4>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr />
                </div>
            </section>

            {/* Product & Pricing Analysis Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-16">
                <div className="max-w-7xl mx-auto">
                    {/* Icon and Title */}
                    <div className="flex flex-col items-start space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                        <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6'>
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#283F3B]">
                                Product & Pricing Analysis
                            </h2>
                        </div>
                        <div>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
                                Our Product & Pricing Analysis service delivers a comprehensive evaluation of medical devices and healthcare products across global and regional markets. We provide detailed device volume and procedural volume assessments, enabling stakeholders to clearly understand market size, utilization trends, and demand dynamics.
                            </p>
                        </div>
                    </div>
                    <hr />
                    {/* Key Features Subsection */}
                    <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#283F3B] mb-4 sm:mb-6">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Device volume and procedural volume assessments',
                                'Replacement cycles and adoption patterns',
                                'Reimbursement and procurement dynamics',
                                'Country-level installed base and sales data',
                                'In-depth pricing analysis by country',
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3 bg-[#F9FAFB] p-3 rounded-[8px]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z" stroke="#4CB8AB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.5 9.99998L9.16667 11.6666L12.5 8.33331" stroke="#4CB8AB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Capabilities Subsection */}
                    <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#283F3B] mb-4 sm:mb-6">Our Capabilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {[
                                {
                                    title: 'Device Volume Analysis',
                                    description:
                                        'We analyze device volumes at the country level, capturing installed base, annual sales, replacement cycles, and adoption patterns across hospitals, clinics, laboratories, and other end-user segments.',
                                },
                                {
                                    title: 'Procedural Volume Insights',
                                    description:
                                        'Estimate procedural volumes offering insights into the number of procedures performed annually by indication, technology, and care setting—critical for demand forecasting and capacity planning.',
                                },
                                {
                                    title: 'Comprehensive Pricing Intelligence',
                                    description:
                                        'In-depth pricing analysis accounting for MSP/ASP, price variations by product type, public vs. private healthcare differences, reimbursement impact, tender pricing, and cross-country price differentials.',
                                },
                                {
                                    title: 'Strategic Price Positioning',
                                    description:
                                        'Identify price corridors, premium vs. value segments, and support decisions related to market entry, pricing optimization, and revenue forecasting.',
                                },
                            ].map((capability, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-5 sm:p-6 border border-[#4CB8AB] hover:shadow-lg transition-shadow"
                                >
                                    <h4 className="text-lg sm:text-xl font-bold text-[#283F3B] mb-2 sm:mb-3">{capability.title}</h4>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{capability.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Product & Pricing Analysis? Subsection */}
                    <div
                        style={{
                            background: 'linear-gradient(135deg, rgba(76, 184, 171, 0.1) 0%, rgba(242, 135, 58, 0.1) 100%)',
                            border: '1px solid rgba(76, 184, 171, 0.2)',
                            borderRadius: '16px',
                        }}
                        className="my-8 sm:my-12 bg-secondary rounded-xl p-6 sm:p-8 md:p-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#283F3B] mb-6 sm:mb-8 text-center">
                            Why Choose Product & Pricing Analysis?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            {whyChooseBenefits.map((benefit, index) => (
                                <div key={index} className="flex space-x-3 sm:space-x-4">
                                    <div className="flex-shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CB8AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 12L11 14L15 10" stroke="#4CB8AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h4 className="text-lg sm:text-xl font-bold text-[#283F3B] mb-2 sm:mb-3">{benefit.title}</h4>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr />
                </div>
            </section>

            {/* Competitive Intelligence Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-16">
                <div className="max-w-7xl mx-auto">
                    {/* Icon and Title */}
                    <div className="flex flex-col items-start space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                        <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6'>
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#283F3B]">
                                Competitive Intelligence
                            </h2>
                        </div>
                        <div>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
                                Our Competitive Intelligence service provides a structured and in-depth understanding of the competitive landscape of major, regional, and local players. We deliver comprehensive company profiles and competitive positioning analysis to help you stay ahead.
                            </p>
                        </div>
                    </div>
                    <hr />
                    {/* Key Features Subsection */}
                    <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#283F3B] mb-4 sm:mb-6">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Comprehensive company profiles and positioning',
                                'Global, regional, and country-level market share analysis',
                                'M&A, partnership, and strategic development tracking',
                                'Product portfolios and geographic presence',
                                'Revenue and volume-based competitive benchmarking',
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3 bg-[#F9FAFB] p-3 rounded-[8px]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z" stroke="#4CB8AB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.5 9.99998L9.16667 11.6666L12.5 8.33331" stroke="#4CB8AB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Capabilities Subsection */}
                    <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#283F3B] mb-4 sm:mb-6">Our Capabilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            {[
                                {
                                    title: 'Company Profiles & Market Share',
                                    description:
                                        'Comprehensive company profiles covering product portfolios, geographic presence, strategic focus, financial performance, and growth strategies. Market share analysis at global, regional, and country levels by product type and segment.',
                                },
                                {
                                    title: 'Competitive Benchmarking',
                                    description:
                                        'SWOT analysis, competitive positioning assessment, and comparative benchmarking against key competitors to identify competitive advantages and weaknesses.',
                                },
                                {
                                    title: 'Strategic Developments',
                                    description:
                                        'Analysis of mergers, acquisitions, partnerships, collaborations, new product launches, and pipeline developments that reshape the competitive landscape.',
                                },
                                {
                                    title: 'Market Entry & Channel Strategy',
                                    description:
                                        'Regional expansion strategies, market entry assessment, distributor and channel partner analysis, and regulatory impact evaluation on competitive positioning.',
                                },
                            ].map((capability, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-5 sm:p-6 border border-[#4CB8AB] hover:shadow-lg transition-shadow"
                                >
                                    <h4 className="text-lg sm:text-xl font-bold text-[#283F3B] mb-2 sm:mb-3">{capability.title}</h4>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{capability.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Competitive Intelligence? Subsection */}
                    <div
                        style={{
                            background: 'linear-gradient(135deg, rgba(76, 184, 171, 0.1) 0%, rgba(242, 135, 58, 0.1) 100%)',
                            border: '1px solid rgba(76, 184, 171, 0.2)',
                            borderRadius: '16px',
                        }}
                        className="my-8 sm:my-12 bg-secondary rounded-xl p-6 sm:p-8 md:p-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#283F3B] mb-6 sm:mb-8 text-center">
                            Why Choose Competitive Intelligence?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            {whyChooseBenefits.map((benefit, index) => (
                                <div key={index} className="flex space-x-3 sm:space-x-4">
                                    <div className="flex-shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CB8AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 12L11 14L15 10" stroke="#4CB8AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h4 className="text-lg sm:text-xl font-bold text-[#283F3B] mb-2 sm:mb-3">{benefit.title}</h4>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr />
                </div>
            </section>

            {/* Technology & Innovation Analysis Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-16">
                <div className="max-w-7xl mx-auto">
                    {/* Icon and Title */}
                    <div className="flex flex-col items-start space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                        <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6'>
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#283F3B]">
                                Technology & Innovation Analysis
                            </h2>
                        </div>
                        <div>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
                                Evaluates the evolving technological landscape shaping healthcare and medical device markets. We help clients understand current technologies, emerging innovations, and future adoption trends that influence clinical outcomes, cost efficiency, and competitive differentiation.
                            </p>
                        </div>
                    </div>
                    <hr />
                    {/* Key Features Subsection */}
                    <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#283F3B] mb-4 sm:mb-6">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'Current technology assessment and evaluation',
                                'Future adoption trend forecasting',
                                'Competitive differentiation opportunities',
                                'Emerging innovation identification and analysis',
                                'Clinical outcome and efficiency impact analysis',
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3 bg-[#F9FAFB] p-3 rounded-[8px]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z" stroke="#4CB8AB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.5 9.99998L9.16667 11.6666L12.5 8.33331" stroke="#4CB8AB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-gray-700 leading-relaxed">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Capabilities Subsection */}
                    <div className="mt-12 mb-12">
                        <h3 className="text-2xl font-bold text-[#283F3B] mb-6">Our Capabilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'Technology Landscape Assessment',
                                    description:
                                        'Comprehensive evaluation of current technologies, their maturity, adoption rates, and clinical applications across different market segments and geographies.',
                                },
                                {
                                    title: 'Innovation Pipeline Analysis',
                                    description:
                                        'Identification and evaluation of emerging technologies, innovations in development, patent landscape analysis, and predicted commercialization timelines.',
                                },
                                {
                                    title: 'Clinical & Economic Impact',
                                    description:
                                        'Assessment of how technological advances influence clinical outcomes, cost efficiency, reimbursement dynamics, and competitive positioning in the market.',
                                },
                                {
                                    title: 'Adoption Trend Forecasting',
                                    description:
                                        'Analysis of technology adoption curves, key adoption drivers and barriers, influencers in adoption decisions, and future market implications of technological change.',
                                },
                            ].map((capability, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 border border-[#4CB8AB] hover:shadow-lg transition-shadow"
                                >
                                    <h4 className="text-xl font-bold text-[#283F3B] mb-3">{capability.title}</h4>
                                    <p className="text-gray-700 leading-relaxed">{capability.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Technology & Innovation Analysis? Subsection */}
                    <div
                        style={{
                            background: 'linear-gradient(135deg, rgba(76, 184, 171, 0.1) 0%, rgba(242, 135, 58, 0.1) 100%)',
                            border: '1px solid rgba(76, 184, 171, 0.2)',
                            borderRadius: '16px',
                        }}
                        className="my-12 bg-secondary rounded-xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-[#283F3B] mb-8 text-center">
                            Why Choose Technology & Innovation Analysis?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {whyChooseBenefits.map((benefit, index) => (
                                <div key={index} className="flex space-x-4">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4CB8AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 12L11 14L15 10" stroke="#4CB8AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='flex flex-col'>
                                        <h4 className="text-xl font-bold text-[#283F3B] mb-3">{benefit.title}</h4>
                                        <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr />
                </div>
            </section>
        </PageLayout>
    );
};

export default ServicesPage;

