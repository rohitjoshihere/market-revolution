import PageLayout from '@/components/layout/PageLayout';
import NewsletterSection from '@/components/public/NewsletterSection';
import { Award, Users, Globe, Check, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <PageLayout>
      {/* About Us Hero Section */}
      <div 
      style={{
        background: 'linear-gradient(135deg, #F3F2F1 0%, #FFFFFF 100%)',
      }}
      className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#283F3B] mb-4 sm:mb-6">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
          Transforming markets through strategic innovation and unwavering
          <br className="hidden sm:block" /> commitment to client success.
        </p>
      </div>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-16">

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Panel - Text Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#283F3B] mb-4 sm:mb-6">
              Our Story
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Market Revolution was founded with a simple vision: to help businesses navigate and thrive in an increasingly complex market landscape. With over a decade of combined experience, our team has worked with hundreds of companies across industries.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We believe that success comes from combining deep market insights with innovative strategies. Every solution we create is tailored to our clients' unique needs and goals.
            </p>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center mt-4">
              Get in Touch
            </button>
          </div>

          {/* Right Panel - Image */}
          <div className="relative order-1 lg:order-2">
            <img src="/about.png" alt="" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="bg-[#F3F2F1] py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          {/* Core Value Cards */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Excellence Card */}
            <div className="bg-white rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="w-full flex items-center justify-start mx-auto mb-4 sm:mb-6">
                <Award className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Commitment to delivering the highest quality solutions
              </p>
            </div>

            {/* Collaboration Card */}
            <div className="bg-white rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="w-full flex items-center justify-start mx-auto mb-4 sm:mb-6">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Collaboration</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Working closely with clients to achieve shared success
              </p>
            </div>

            {/* Innovation Card */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
              <div className="w-full flex items-center justify-start mx-auto mb-4 sm:mb-6">
                <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Pioneering new approaches to solve market challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
            Comprised of industry veterans and innovative thinkers dedicated to your success
          </p>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center">
            Meet the Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section
        className="py-12 sm:py-16 lg:py-24"
        style={{
          background: 'linear-gradient(135deg, #283F3B 0%, rgba(40, 63, 59, 0.95) 100%)',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-white mb-8 sm:mb-12">
              Why Partner With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Left Column */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    Proven track record with measurable results
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    Cutting-edge technology and tools
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    Industry-leading expertise
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    Dedicated account management
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    Transparent communication and reporting
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    Commitment to your long-term success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewsletterSection />

    </PageLayout>
  );
};

export default AboutPage;

