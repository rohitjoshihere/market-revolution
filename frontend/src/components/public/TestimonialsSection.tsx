import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Market Revolution provided insights that directly influenced our go-to-market strategy for our new oncology product. The direct analyst access made all the difference—we could ask follow-up questions real-time.",
    author: "Dr. Sarah Chen",
    title: "VP of Market Strategy at Global Pharma Solutions",
    rating: 5,
  },
  {
    id: 2,
    quote: "The depth of their healthcare expertise is unmatched. They connected us directly with procurement leaders we couldn't reach on our own, and the insights were game-changing for our product launch.",
    author: "Michael Rodriguez",
    title: "Director of Business Development at MedTech Innovations",
    rating: 5,
  },
  {
    id: 3,
    quote: "As an investment firm, we needed reliable market intelligence fast. Market Revolution delivered comprehensive analysis in days, not weeks, with direct access to the analysts throughout the process.",
    author: "Jennifer Park",
    title: "Partner at Healthcare Ventures Capital",
    rating: 5,
  },
  {
    id: 4,
    quote: "Their understanding of regulatory pathways and reimbursement dynamics helped us navigate complex market entry decisions. The ongoing analyst partnership has been invaluable.",
    author: "Dr. Robert Thompson",
    title: "Chief Medical Officer at Precision Therapeutics",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Change slide every 5 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when user manually navigates
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    goToSlide(newIndex);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Letters of Recommendation
        </h2>
        <p className="text-lg text-gray-600">
          Trusted by leading healthcare organizations and investment firms
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-3xl mx-auto mb-8">
        <div 
        
        style={{
          background: "linear-gradient(135deg, #F3F2F1 0%, #FFFFFF 100%)",
          border: "1px solid rgba(76, 184, 171, 0.2)",
          boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
          borderRadius: "16px",
        }}
        className="bg-white border-2 border-gray-200 rounded-xl p-8 md:p-12 shadow-lg">
          {/* Star Rating */}
          <div className="flex items-center mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Separator */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Author Information */}
          <div>
            <p className="text-lg font-bold text-gray-900 mb-1">
              {currentTestimonial.author}
            </p>
            <p className="text-gray-600">
              {currentTestimonial.title}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-3 h-3 bg-primary rounded-full'
                  : 'w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="text-center text-gray-600 text-sm">
        {currentIndex + 1} / {testimonials.length}
      </div>
    </section>
  );
};

export default TestimonialsSection;

