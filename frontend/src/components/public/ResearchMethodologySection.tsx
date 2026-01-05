import { Lightbulb, Zap, Users, Check } from 'lucide-react';

const ResearchMethodologySection = () => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F3F2F1 100%)",
      }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Research Methodology
          </h2>
          <p className="text-lg text-gray-600 leading-[32.5px] tracking-[0]">
            Transparent, rigorous processes that deliver actionable insights. We engage directly with healthcare professionals, procurement leaders, and market regulators—not just secondary data sources.
          </p>
        </div>

        {/* Four-Step Methodology Cards */}
        <div className="max-w-8xl mx-auto relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting lines - hidden on mobile, visible on desktop */}
            <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gray-200 -z-10"></div>

            {/* Card 1: Objectives */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  01
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Objectives</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Define clear research goals and market parameters
              </p>
            </div>

            {/* Card 2: Methodology */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  02
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Methodology</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Apply industry-specific research frameworks and tools
              </p>
            </div>

            {/* Card 3: Sample & Validation */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  03
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sample & Validation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Engage primary sources including doctors, procurement leaders, and regulators
              </p>
            </div>

            {/* Card 4: Delivery */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 relative">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  04
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Actionable insights with full transparency and direct analyst access
              </p>
            </div>
          </div>
        </div>

        {/* Direct Analyst Access Section */}
        <div
          className="max-w-8xl mx-auto rounded-xl p-8"
          style={{
            background: "linear-gradient(90deg, rgba(76, 184, 171, 0.1) 0%, rgba(242, 135, 58, 0.1) 100%)",
            border: "1px solid rgba(76, 184, 171, 0.2)",
            borderRadius: "16px",
          }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Direct Analyst Access</h3>
              <p className="text-gray-700 leading-relaxed">
                Unlike traditional research firms that rely solely on secondary data, our analysts work directly with doctors, procurement leaders, and regulatory bodies. You get insights from those actually making market decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default ResearchMethodologySection;

