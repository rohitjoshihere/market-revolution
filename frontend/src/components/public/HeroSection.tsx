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
          {/* Decorative curved shape - light green background */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-green-100 rounded-[3rem] transform rotate-3 scale-105"></div> */}

          {/* Main container */}
          <div className="relative  rounded-[3rem] p-6 lg:p-8 overflow-hidden h-full">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
