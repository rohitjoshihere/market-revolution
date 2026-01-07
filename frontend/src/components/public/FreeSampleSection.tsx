import { useState } from 'react';
import { Check, Shield, Download } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  businessEmail: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().optional(),
  primaryFocusArea: z.string().min(1, 'Please select a focus area'),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms to continue',
  }),
});

type FormData = z.infer<typeof formSchema>;

const FreeSampleSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      companyName: 'Your Organization',
      businessEmail: 'john@company.com',
      phoneNumber: '+1 (555) 000-0000',
      primaryFocusArea: '',
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
  };

  const focusAreas = [
    'Oncology',
    'Cardiology',
    'Immunology',
    'Diagnostic Devices',
    'Hospital IT Systems',
    'Healthcare Administration',
    'Precision Medicine',
    'Other',
  ];

  return (
    <section
      style={{
        background: "linear-gradient(90deg, #283F3B 0%, rgba(40, 63, 59, 0.95) 100%)",
      }}
      className="w-full py-0 mx-auto">
      <div className="container max-w-8xl mx-auto flex md:flex-row flex-col gap-0">
        {/* Left Column - Dark Green Background (2/3 width) */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get a Free Sample Report
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Experience the Market Revolution difference. Download our free sample report featuring market insights, competitive analysis, and regulatory intelligence for healthcare organizations.
          </p>

          {/* Benefits List */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Comprehensive Market Analysis</p>
                <p className="text-white/80 text-sm">20+ page deep dive into market trends</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Competitive Benchmarking</p>
                <p className="text-white/80 text-sm">See how key players stack up</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Analyst Consultation</p>
                <p className="text-white/80 text-sm">Schedule a brief call with one of our experts</p>
              </div>
            </li>
          </ul>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-orange-500" />
              <span className="text-white text-sm">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-orange-500" />
              <span className="text-white text-sm">No Spam Commitment</span>
            </div>
          </div>
        </div>

        {/* Right Column - White Background with Form (1/3 width) */}
        <div className="w-full p-8 md:p-12 lg:p-16 flex items-center">
          <div className="w-full bg-white mx-auto rounded-xl p-6">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your sample report download link has been sent to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* First Name */}
                <div className='flex gap-5'>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName')}
                    className="w-full px-4 py-3 border-2 border-[#FFF1EB] rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName')}
                    className="w-full px-4 py-3 border-2 border-[#FFF1EB] rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    {...register('companyName')}
                    className="w-full px-4 py-3 border-2 border-[#FFF1EB] rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
                  )}
                </div>

                {/* Business Email */}
                <div>
                  <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    {...register('businessEmail')}
                    className="w-full px-4 py-3 border-2 border-[#FFF1EB] rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                  {errors.businessEmail && (
                    <p className="mt-1 text-sm text-red-600">{errors.businessEmail.message}</p>
                  )}
                </div>

                {/* Phone Number (Optional) */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-gray-500">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    {...register('phoneNumber')}
                    className="w-full px-4 py-3 border-2 border-[#FFF1EB] rounded-lg focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Primary Focus Area */}
                <div>
                  <label htmlFor="primaryFocusArea" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Focus Area
                  </label>
                  <select
                    id="primaryFocusArea"
                    {...register('primaryFocusArea')}
                    className="w-full px-4 py-3 border-2 border-[#FFF1EB] rounded-lg focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select your focus</option>
                    {focusAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                  {errors.primaryFocusArea && (
                    <p className="mt-1 text-sm text-red-600">{errors.primaryFocusArea.message}</p>
                  )}
                </div>

                {/* Consent Checkbox */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      {...register('agreeToTerms')}
                      className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                      I agree to receive insights, updates, and occasional marketing communications from Market Revolution. I understand I can unsubscribe anytime. See our{' '}
                      <a href="#privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </a>{' '}
                      for details.
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="text-sm text-red-600 mt-2">{errors.agreeToTerms.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  {isSubmitting ? (
                    'Processing...'
                  ) : (
                    <>
                      <Download className="w-5 h-5 mr-2" />
                      Download Sample Report
                    </>
                  )}
                </button>

                {/* Privacy Message */}
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information is secure and will only be used to send you the sample report.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeSampleSection;

