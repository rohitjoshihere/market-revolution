import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6 order-2 lg:order-1"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="inline-flex gap-2 items-center px-4 py-2 bg-secondary rounded-full">
            <span className='bg-primary rounded-full w-2 h-2'></span>
            <span className="text-primary font-medium text-sm">
              Analyst-Driven Market Research.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#283F3B] leading-tight">
            The Research Revolution
          </motion.h1>

          {/* Sub-headline */}
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-3xl font-semibold text-primary">
            Transparent, Fast, and Actionable Insights
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-[#4B5563] leading-relaxed max-w-xl">
            Stop buying generic market reports. Get direct access to the researchers who understand your market inside and out. Real insights from real healthcare professionals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center">
              Get Free Sample →
            </button>
            <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-green-50 transition-colors">
              Talk to Analyst
            </button>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-8">
            <div className="flex items-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99999 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6024 1.66669 9.99999 1.66669C5.39762 1.66669 1.66666 5.39765 1.66666 10C1.66666 14.6024 5.39762 18.3334 9.99999 18.3334Z" stroke="#4CB8AB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.5 9.99998L9.16667 11.6666L12.5 8.33331" stroke="#4CB8AB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span className="text-gray-700 text-base"><span className='font-semibold'>500+</span> Healthcare Orgs</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99999 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6024 1.66669 9.99999 1.66669C5.39762 1.66669 1.66666 5.39765 1.66666 10C1.66666 14.6024 5.39762 18.3334 9.99999 18.3334Z" stroke="#4CB8AB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.5 9.99998L9.16667 11.6666L12.5 8.33331" stroke="#4CB8AB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className="text-gray-700 text-base"><span className='font-semibold'>3-5 Days</span> Express Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99999 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6024 1.66669 9.99999 1.66669C5.39762 1.66669 1.66666 5.39765 1.66666 10C1.66666 14.6024 5.39762 18.3334 9.99999 18.3334Z" stroke="#4CB8AB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.5 9.99998L9.16667 11.6666L12.5 8.33331" stroke="#4CB8AB" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span className="text-gray-700 text-base"><span className='font-semibold'>Direct Analyst</span> Access</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Image with Decorative Shape */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative lg:h-[600px] order-1 lg:order-2"
        >
          <img src="/hero.png" alt="Research Revolution" className="w-full h-full object-contain" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
