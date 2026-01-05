import { ArrowRight, Phone } from 'lucide-react';

const ReadyToExperienceSection = () => {
  return (
    <section
      className="py-16 lg:py-24"
      style={{
        background: 'linear-gradient(135deg, #283F3B 0%, rgba(40, 63, 59, 0.95) 100%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Join healthcare leaders who've made the switch to analyst-driven insights. Get direct access, faster turnaround, and actionable recommendations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center">
              Schedule Your Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              Call Us: +1-415-555-2671
            </button>
          </div>

          <p className="text-sm text-white/80">
            No commitment required. Our analysts are available for a brief discovery call to understand your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReadyToExperienceSection;

