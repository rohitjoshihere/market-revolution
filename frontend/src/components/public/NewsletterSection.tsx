import { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Here you would typically send the email to your backend
    console.log('Newsletter subscription:', email);
  };

  return (
    <section
      className="py-12"
      style={{
        background: "linear-gradient(90deg, #4CB8AB 0%, rgba(76, 184, 171, 0.8) 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Side - Text */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Revolution Insights Briefs
              </h3>
              <p className="text-white">
                Get monthly healthcare and pricing trends delivered to your inbox.
              </p>
            </div>

            {/* Right Side - Email Form */}
            <div className="flex-1 w-full md:w-auto">
              {isSubmitted ? (
                <div className="text-center py-4">
                  <p className="text-primary font-medium">Thank you for subscribing!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 placeholder: text-[#6B7280] rounded-lg focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:shadow-md hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Subscribing...'
                    ) : (
                      <>
                        Subscribe
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

