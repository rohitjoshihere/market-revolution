import { Zap, BookOpen, Users, Check, ArrowRight } from 'lucide-react';

const HowWeWorkSection = () => {
    return (
        <>
            <section

                style={{
                    background: "linear-gradient(180deg, #F3F2F1 0%, #FFFFFF 100%)",
                }}>


                {/* How We Work Section */}
                <div
                    id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            How We Work
                        </h2>
                        <p className="text-lg text-gray-600 leading-[32.5px] tracking-[0]">
                            Choose the service model that fits your timeline and strategic needs
                        </p>
                    </div>

                    {/* Service Cards */}
                    <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {/* Card 1: Express Insights */}
                        <div className="bg-white border-2 rounded-[12px] border-[#E5E7EB] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                                <Zap className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Express Insights</h3>
                            <p className="text-gray-600 mb-4">Quick turnaround</p>
                            <div className="mb-4">
                                <span className="text-gray-700">Timeline: </span>
                                <span className="text-primary font-semibold">3-5 days</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-4">$5K - $15K</div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Rapid market assessment for time-sensitive decisions. Perfect for quick competitive analysis or market entry validation.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Market sizing and trends</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Competitive landscape analysis</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Initial regulatory overview</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">1 analyst consultation call</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Executive summary report</span>
                                </li>
                            </ul>
                            <button className="w-full px-6 py-3 bg-[#FFF1EB] text-gray-900 rounded-lg font-medium hover:bg-orange-200 transition-colors flex items-center justify-center">
                                Get Started <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>

                        {/* Card 2: Deep Dive Reports (Most Popular - Highlighted) */}
                        <div className="bg-white border-2 rounded-[12px] border-[#E5E7EB] rounded-xl p-8 hover:shadow-xl hover:scale-105 hover:border-2 hover:border-primary transition-all duration-300 relative pt-12">
                            {/* Most Popular Badge */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                <div className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
                                    Most Popular for Strategic Planning
                                </div>
                            </div>
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                                <BookOpen className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Deep Dive Reports</h3>
                            <p className="text-gray-600 mb-4">Comprehensive research</p>
                            <div className="mb-4">
                                <span className="text-gray-700">Timeline: </span>
                                <span className="text-primary font-semibold">4-8 weeks</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-4">$25K - $75K</div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                In-depth market research with primary source interviews. Our flagship offering for strategic planning.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Comprehensive market analysis</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">50+ primary source interviews</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Regulatory and reimbursement deep dive</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Competitive benchmarking</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">5-year market forecasting</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Quarterly analyst access</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">200+ page detailed report</span>
                                </li>
                            </ul>
                            <button className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center">
                                Get Started <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>

                        {/* Card 3: Consultation Bundles */}
                        <div className="bg-white border-2 rounded-[12px] border-[#E5E7EB] rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Consultation Bundles</h3>
                            <p className="text-gray-600 mb-4">Strategic partnership</p>
                            <div className="mb-4">
                                <span className="text-gray-700">Timeline: </span>
                                <span className="text-primary font-semibold">3-6 months</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-4">Custom</div>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Ongoing strategic partnership combining research, workshops, and expert guidance tailored to your organization.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Unlimited research requests</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Monthly executive workshops</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Dedicated analyst team</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Primary source access network</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Custom reporting dashboard</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Strategic advisory sessions</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">Annual market outlook briefing</span>
                                </li>
                            </ul>
                            <button className="w-full px-6 py-3 bg-[#FFF1EB] text-gray-900 rounded-lg font-medium hover:bg-orange-200 transition-colors flex items-center justify-center">
                                Get Started <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Not Sure Section */}
                    <div
                        style={{
                            background: "linear-gradient(90deg, rgba(76, 184, 171, 0.1) 0%, rgba(242, 135, 58, 0.1) 100%)",
                            border: "1px solid rgba(76, 184, 171, 0.2)",
                            borderRadius: "16px",
                        }}
                        className="max-w-8xl mx-auto bg-secondary rounded-xl p-8 text-center">
                        <p className="text-xl font-semibold text-gray-900 mb-4">Not sure which option is right for you?</p>
                        <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center">
                            Talk to an Analyst <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
            </div>
                </section>
            {/* Why Healthcare Leaders Trust Us Section */}

            <section
                style={{
                    background: "linear-gradient(180deg, #FFFFFF 0%, #F3F2F1 100%)",
                }}>
                <div
                    className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Why Healthcare Leaders Trust Us
                        </h2>
                        <p className="text-lg text-gray-600 leading-[32.5px] tracking-[0]">
                            Built by experts who understand your market
                        </p>
                    </div>
                    <div
                        style={{
                            background: "linear-gradient(90deg, #283F3B 0%, rgba(40, 63, 59, 0.95) 100%)",
                            borderRadius: "16px",
                        }}
                        className="py-16 lg:py-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                                Meet Our Expert Team
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl">
                                {/* Team Member 1 */}
                                <div className="border rounded-[16px] border-gray-500 rounded-xl p-6 hover:bg-gray-750 transition-colors">
                                    <h3 className="text-xl font-bold text-white mb-2">Senior Research Director</h3>
                                    <p className="text-gray-300">15+ years in pharma product management and market strategy</p>
                                </div>

                                {/* Team Member 2 */}
                                <div className="border rounded-[16px] border-gray-500 rounded-xl p-6 hover:bg-gray-750 transition-colors">
                                    <h3 className="text-xl font-bold text-white mb-2">Healthcare Market Analyst</h3>
                                    <p className="text-gray-300">Former hospital procurement leader with deep payer network access</p>
                                </div>

                                {/* Team Member 3 */}
                                <div className="border rounded-[16px] border-gray-500 rounded-xl p-6 hover:bg-gray-750 transition-colors">
                                    <h3 className="text-xl font-bold text-white mb-2">Regulatory Affairs Lead</h3>
                                    <p className="text-gray-300">FDA and EMA experience spanning 12 years in healthcare consulting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowWeWorkSection;

