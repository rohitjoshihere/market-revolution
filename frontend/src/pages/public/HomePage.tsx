import Navbar from '@/components/public/Navbar';
import AnalystExperienceSection from '@/components/public/AnalystExperienceSection';
import HeroSection from '@/components/public/HeroSection';
import HowWeWorkSection from '@/components/public/HowWeWorkSection';
import ResearchMethodologySection from '@/components/public/ResearchMethodologySection';
import DomainExcellenceSection from '@/components/public/DomainExcellenceSection';
import TestimonialsSection from '@/components/public/TestimonialsSection';
import FreeSampleSection from '@/components/public/FreeSampleSection';
import ReadyToExperienceSection from '@/components/public/ReadyToExperienceSection';
import NewsletterSection from '@/components/public/NewsletterSection';
import Footer from '@/components/public/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F3F2F1 50%, #FFFFFF 100%)'
        }}>
        <HeroSection />
      </div>

      <AnalystExperienceSection />
      <HowWeWorkSection />
      <ResearchMethodologySection />
      <DomainExcellenceSection />
      <TestimonialsSection />
      <FreeSampleSection />
      <ReadyToExperienceSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default HomePage;
