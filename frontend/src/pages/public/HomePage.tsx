import Navbar from '@/components/public/Navbar';
import { Check, Users, Lightbulb, Clock, Trophy, X } from 'lucide-react';

const HomePage = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(90deg, #FFFFFF 0%, #F3F2F1 50%, #FFFFFF 100%)'
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Tag */}
            <div className="inline-flex items-center px-4 py-2 bg-[#e9f4f3] rounded-full">
              <span className="text-[#4CB8AB] font-medium text-sm">
                • Analyst-Driven Market Research.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The Research Revolution
            </h1>

            {/* Sub-headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-600">
              Transparent, Fast, and Actionable Insights
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              Stop buying generic market reports. Get direct access to the researchers who understand your market inside and out. Real insights from real healthcare professionals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center">
                Get Free Sample →
              </button>
              <button className="px-6 py-3 border-2 border-green-400 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors">
                Talk to Analyst
              </button>
            </div>

            {/* Bottom Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-8 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-7 h-7 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium text-base">500+ Healthcare Orgs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-7 h-7 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium text-base">3-5 Days Express Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-7 h-7 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium text-base">Direct Analyst Access</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image with Decorative Shape */}
          <div className="relative lg:h-[600px]">
            {/* Decorative curved shape - light green background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-green-100 rounded-[3rem] transform rotate-3 scale-105"></div>
            
            {/* Main container */}
            <div className="relative bg-green-50 rounded-[3rem] p-6 lg:p-8 overflow-hidden h-full">
              {/* Image placeholder - user will replace this */}
              <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] bg-gray-200 rounded-2xl overflow-hidden">
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm font-medium">Image Placeholder</p>
                    <p className="text-gray-400 text-xs mt-1">Replace with your hero image</p>
                  </div>
                </div>
              </div>

              {/* Overlaid "A" icons - positioned as in design */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default HomePage;
