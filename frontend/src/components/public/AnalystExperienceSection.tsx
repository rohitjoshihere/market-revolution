import { Users, Lightbulb, Clock, Trophy, Check, X } from 'lucide-react';

const AnalystExperienceSection = () => {
  return (
    <>
      {/* The Analyst-First Experience Section */}
      <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Analyst-First Experience
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            With most market research firms, you talk to a sales rep who hands you off to analysts. At Market Revolution, you talk directly to researchers who know your market inside and out. No middleman. Just expertise.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Card 1: Direct Expert Access */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#4CB8AB] bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#4CB8AB]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Direct Expert Access
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your dedicated analyst is your single point of contact from day one. They know your project, your timeline, your business.
            </p>
          </div>

          {/* Card 2: Real-Time Insights */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#4CB8AB] bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-[#4CB8AB]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Real-Time Insights
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Need a follow-up question answered? Your analyst can often get you answers within hours, not days.
            </p>
          </div>

          {/* Card 3: Faster Turnaround */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#4CB8AB] bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-[#4CB8AB]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Faster Turnaround
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Without sales handoff delays, we move faster. Our Express Insights service delivers in 3-5 days.
            </p>
          </div>

          {/* Card 4: Better Outcomes */}
          <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#4CB8AB] bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-[#4CB8AB]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Better Outcomes
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Analysts who understand your business context deliver more relevant, actionable recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* How We're Different Section */}
      <section id="services" className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We're Different
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional Firms Column */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Traditional Firms
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-gray-700">Sales rep handles initial contact</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-gray-700">Handoff to research team delays project start</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-gray-700">Limited analyst access after engagement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-gray-700">Secondary data-heavy approach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-gray-700">Generic report delivered and forgotten</span>
                </li>
              </ul>
            </div>

            {/* Market Revolution Column */}
            <div className="bg-[#4CB8AB] bg-opacity-10 rounded-xl p-8 shadow-sm border-2 border-[#4CB8AB] border-opacity-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Market Revolution
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Analyst owns your project from day one</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">No sales handoff—you're already in good hands</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Direct access to your analyst whenever you need</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Primary source research with direct stakeholder interviews</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Ongoing partnership and strategic guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnalystExperienceSection;

