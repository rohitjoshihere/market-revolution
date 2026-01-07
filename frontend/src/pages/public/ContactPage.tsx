import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import NewsletterSection from '@/components/public/NewsletterSection';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  workEmail: z.string().email('Please enter a valid email address'),
  countryCode: z.string().min(1, 'Country code is required'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  marketInterest: z.string().min(10, 'Please describe the market or report you are interested in'),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the Privacy Policy and Terms of Service',
  }),
});

type FormData = z.infer<typeof formSchema>;

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState('contact-us');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      workEmail: '',
      countryCode: '+1',
      phoneNumber: '',
      marketInterest: '',
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
    reset();
    // You could show a success toast here
  };

  const tabs = [
    { id: 'contact-us', label: 'Contact Us' },
    { id: 'request-customization', label: 'Request Customization' },
    { id: 'inquiry-before-buying', label: 'Inquiry Before Buying' },
    { id: 'analyst-callback', label: 'Analyst Callback' },
  ];

  const countryCodes = [
    { value: '+1', label: '+1 (US)' },
    { value: '+44', label: '+44 (UK)' },
    { value: '+91', label: '+91 (IN)' },
    { value: '+86', label: '+86 (CN)' },
    { value: '+81', label: '+81 (JP)' },
    { value: '+49', label: '+49 (DE)' },
    { value: '+33', label: '+33 (FR)' },
    { value: '+61', label: '+61 (AU)' },
  ];

  return (
    <PageLayout>
      {/* Contact Us Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #F3F2F1 0%, #FFFFFF 100%)',
        }}
        className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#283F3B] mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
            To learn more about our service offerings or to have a company representative contact you directly, please complete the form below.
          </p>
        </div>
      </div>

      {/* Tabbed Interface Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between border-b border-gray-200 mb-6 sm:mb-8">
            <div className="flex space-x-1 overflow-x-auto pb-2 -mb-px w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium transition-colors whitespace-nowrap ${activeTab === tab.id
                    ? 'text-[#283F3B] border-b-2 border-[#283F3B]'
                    : 'text-gray-600 hover:text-[#283F3B]'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Form Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#283F3B] mb-3 sm:mb-4">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Have questions about our services? Our team is here to help.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register('firstName')}
                  placeholder="First Name*"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register('lastName')}
                  placeholder="Last Name*"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="workEmail"
                {...register('workEmail')}
                placeholder="Work Email*"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors.workEmail ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.workEmail && (
                <p className="mt-1 text-sm text-red-500">{errors.workEmail.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
                {/* Country Code Selector */}
                <select
                  {...register('countryCode')}
                  className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors.countryCode ? 'border-red-500' : 'border-gray-300'
                    }`}
                >
                  {countryCodes.map((code) => (
                    <option key={code.value} value={code.value}>
                      {code.label}
                    </option>
                  ))}
                </select>

                {/* Phone Number Input */}
                <input
                  type="tel"
                  id="phoneNumber"
                  {...register('phoneNumber')}
                  placeholder="Phone Number*"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
              </div>
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* Market/Report Interest */}
            <div>
              <label htmlFor="marketInterest" className="block text-sm font-medium text-gray-700 mb-2">
                Which market or report interests you? e.g., AI Market, U.S. MedTech{' '}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="marketInterest"
                {...register('marketInterest')}
                placeholder="Describe the market or report you are interested in..."
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${errors.marketInterest ? 'border-red-500' : 'border-gray-300'
                  }`}
              />
              {errors.marketInterest && (
                <p className="mt-1 text-sm text-red-500">{errors.marketInterest.message}</p>
              )}
            </div>

            {/* Privacy Policy and Terms Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreeToTerms"
                {...register('agreeToTerms')}
                className={`mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary ${errors.agreeToTerms ? 'border-red-500' : ''
                  }`}
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="#privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#terms-of-service" className="text-primary hover:underline">
                  Terms of Service
                </a>
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-red-500 -mt-4">{errors.agreeToTerms.message}</p>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-[#283F3B] text-white rounded-lg font-medium hover:bg-[#1f2d2a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Headquarters Information Section */}
      <section className='bg-[#F9FAFB]'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Global Headquarters Card */}
              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Headquarters</h3>
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      201 Space Street 1100, San Francisco, CA 94105 United States
                    </p>
                  </div>
                  {/* Phone Numbers */}
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div className="space-y-1">
                      <a href="tel:+14153490058" className="block text-primary hover:underline">
                        +1-415-349-0058
                      </a>
                      <a href="tel:+18882029519" className="block text-primary hover:underline">
                        Toll Free: 1-888-202-9519
                      </a>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <a href="mailto:sales@marketrevolution.com" className="text-primary hover:underline">
                      sales@marketrevolution.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Asia Pacific Headquarters Card */}
              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Asia Pacific Headquarters</h3>
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      Office No. 705, A Wing, 7th Floor, Amar Business Zone, Vishranagar, Baner, Pune, MH, 411045 India
                    </p>
                  </div>
                  {/* Phone Number */}
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <a href="tel:+918956380888" className="text-primary hover:underline">
                      +91-895-638-0888 (Sales)
                    </a>
                  </div>
                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <a href="mailto:info-apac@marketrevolution.com" className="text-primary hover:underline">
                      info-apac@marketrevolution.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders Section */}
      <section className=" py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Trusted by Industry Leaders
            </h2>
            <div className="overflow-hidden relative mt-12 py-8">
              {/* Using a marquee-style infinite scroll with framer-motion */}
              <motion.div
                className="flex space-x-12 whitespace-nowrap"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ width: 'fit-content' }}
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex space-x-12 pr-12">
                    {[
                      { name: 'Medtronic', logo: '/company-logos/medtronic.png' },
                      { name: 'GE Healthcare', logo: '/company-logos/ge-healthcare.png' },
                      { name: 'SIEMENS', logo: '/company-logos/siemens.png' },
                      { name: 'Johnson & Johnson', logo: '/company-logos/johnson-johnson.png' },
                      { name: 'Accenture', logo: '/company-logos/accenture.png' },
                      { name: 'Google', logo: '/company-logos/google.png' },
                    ].map((company, idx) => (
                      <div
                        key={`${company.name}-${i}-${idx}`}
                        className="bg-white rounded-xl px-12 py-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all flex items-center justify-center min-w-[280px] h-36 group"
                      >
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="max-h-20 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent && !parent.querySelector('.fallback-text')) {
                              const fallback = document.createElement('span');
                              fallback.className = 'fallback-text text-gray-700 font-bold text-xl text-center';
                              fallback.textContent = company.name;
                              parent.appendChild(fallback);
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>

              {/* Gradient masks for smooth fade edges */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for Market Reports? Section */}
      <section
        className="py-16 lg:py-24"
        style={{
          background: 'linear-gradient(135deg, rgba(76, 184, 171, 0.1) 0%, rgba(242, 135, 58, 0.1) 100%)',
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Looking for Market Reports?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our comprehensive market research reports on various industries and markets.
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Browse Reports
            </button>
          </div>
        </div>
      </section>
      <NewsletterSection />
    </PageLayout>
  );
};

export default ContactPage;

