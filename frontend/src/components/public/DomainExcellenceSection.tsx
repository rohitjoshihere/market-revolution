import { Users, Building2, Zap, Clock, Check } from 'lucide-react';

const DomainExcellenceSection = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Domain Excellence in Healthcare
                </h2>
                <p className="text-lg text-gray-600 leading-[32.5px] tracking-[0]">
                    We're not a generalist market research firm. We're healthcare specialists with direct access to the doctors, procurement leaders, and regulators who make market decisions.
                </p>
            </div>

            {/* Key Differentiators Section */}
            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {/* Top-Left: Direct Physician Engagement */}
                <div
                    style={{
                        background: "linear-gradient(135deg, #F3F2F1 0%, #FFFFFF 100%)",
                        border: "1px solid rgba(76, 184, 171, 0.1)",
                        borderRadius: "16px",
                    }}
                    className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Physician Engagement</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our analysts work directly with healthcare practitioners, procurement leaders, and hospital administrators to understand real-world adoption barriers and opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Top-Right: Regulatory & Reimbursement Deep Dive */}
                <div
                    style={{
                        background: "linear-gradient(135deg, #F3F2F1 0%, #FFFFFF 100%)",
                        border: "1px solid rgba(76, 184, 171, 0.1)",
                        borderRadius: "16px",
                    }}
                    className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Regulatory & Reimbursement Deep Dive</h3>
                            <p className="text-gray-600 leading-relaxed">
                                In-depth understanding of FDA, EMA, and international regulatory pathways. Real expertise in payer mix, RWE requirements, and reimbursement landscape.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom-Left: Healthcare-First Data Collection */}
                <div
                    style={{
                        background: "linear-gradient(135deg, #F3F2F1 0%, #FFFFFF 100%)",
                        border: "1px solid rgba(76, 184, 171, 0.1)",
                        borderRadius: "16px",
                    }}
                    className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare-First Data Collection</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We engage directly with procurement leaders, hospital boards, and regulatory bodies—not just aggregated healthcare databases. This gets you to decision-makers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom-Right: Pharma & MedTech Native Expertise */}
                <div
                    style={{
                        background: "linear-gradient(135deg, #F3F2F1 0%, #FFFFFF 100%)",
                        border: "1px solid rgba(76, 184, 171, 0.1)",
                        borderRadius: "16px",
                    }}
                    className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Pharma & MedTech Native Expertise</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our team includes former pharma product managers, medical affairs leaders, and hospital administrators. We speak your language.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Specialized Healthcare Segments Section */}
            <div

                style={{
                    background: "linear-gradient(90deg, rgba(76, 184, 171, 0.05) 0%, rgba(242, 135, 58, 0.05) 100%)",
                    border: "1px solid rgba(76, 184, 171, 0.1)",
                    borderRadius: "16px",
                }}
                className="max-w-8xl mx-auto p-10 mb-16">
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                    Specialized Healthcare Segments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-white border-2 border-[#E5E7EB] rounded-lg px-6 py-4 text-center hover:border-primary transition-colors">
                        <span className="text-gray-900 font-medium">Oncology</span>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg px-6 py-4 text-center hover:border-primary transition-colors">
                        <span className="text-gray-900 font-medium">Cardiology</span>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg px-6 py-4 text-center hover:border-primary transition-colors">
                        <span className="text-gray-900 font-medium">Immunology</span>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg px-6 py-4 text-center hover:border-primary transition-colors">
                        <span className="text-gray-900 font-medium">Diagnostic Devices</span>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg px-6 py-4 text-center hover:border-primary transition-colors">
                        <span className="text-gray-900 font-medium">Hospital IT Systems</span>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg px-6 py-4 text-center hover:border-primary transition-colors">
                        <span className="text-gray-900 font-medium">Healthcare Administration</span>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-lg px-6 py-4 text-center hover:border-primary transition-colors md:col-start-2">
                        <span className="text-gray-900 font-medium">Precision Medicine</span>
                    </div>
                </div>
            </div>

            {/* Why Healthcare Orgs Choose Us Section */}
            <div
                className="max-w-8xl mx-auto rounded-xl p-8 md:px-[250px] md:p-12"
                style={{
                    background: 'linear-gradient(135deg, #283F3B 0%, rgba(40, 63, 59, 0.95) 100%)',
                }}
            >
                <h3 className="text-3xl font-bold text-gray-200 mb-8">
                    Why Healthcare Orgs Choose Us
                </h3>
                <ul className="space-y-4">
                    <li className="flex items-start space-x-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F2873A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 12L11 14L15 10" stroke="#F2873A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p className="text-gray-200 leading-relaxed">
                            We interview actual doctors, not just industry observers—so you get ground truth on adoption barriers and opportunities
                        </p>
                    </li>
                    <li className="flex items-start space-x-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F2873A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 12L11 14L15 10" stroke="#F2873A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p className="text-gray-200 leading-relaxed">
                            Our analysts understand payer dynamics, regulatory timelines, and health economics—because they've lived it
                        </p>
                    </li>
                    <li className="flex items-start space-x-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F2873A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 12L11 14L15 10" stroke="#F2873A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <p className="text-gray-200 leading-relaxed">
                            We can connect you directly to procurement leaders and hospital boards through our research network
                        </p>
                    </li>
                    <li className="flex items-start space-x-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F2873A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 12L11 14L15 10" stroke="#F2873A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p className="text-gray-200 leading-relaxed">
                            Our reports include actionable recommendations specific to healthcare go-to-market strategies, not generic market analysis
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default DomainExcellenceSection;

