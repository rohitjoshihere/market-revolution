const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6">
          {/* Tag */}
          <div className="inline-flex gap-2 items-center px-4 py-2 bg-secondary rounded-full">
            <span className='bg-primary rounded-full w-2 h-2'></span>
            <span className="text-primary font-medium text-sm">
              Analyst-Driven Market Research.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#283F3B] leading-tight">
            The Research Revolution
          </h1>

          {/* Sub-headline */}
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-primary">
            Transparent, Fast, and Actionable Insights
          </h2>

          {/* Description */}
          <p className="text-lg text-[#4B5563] leading-relaxed max-w-xl">
            Stop buying generic market reports. Get direct access to the researchers who understand your market inside and out. Real insights from real healthcare professionals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center">
              Get Free Sample →
            </button>
            <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-green-50 transition-colors">
              Talk to Analyst
            </button>
          </div>

          {/* Bottom Stats */}
          <div className="flex flex-wrap gap-6 lg:gap- pt-8">
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
          </div>
        </div>

        {/* Right Side - Image with Decorative Shape */}
        <div className="relative lg:h-[600px]">
<img src="/hero.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
