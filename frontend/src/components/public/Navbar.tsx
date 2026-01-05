import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track active navigation based on hash
  useEffect(() => {
    const updateActiveNav = () => {
      const hash = window.location.hash;
      if (hash) {
        setActiveNav(hash);
      } else if (window.location.pathname === '/' || window.location.pathname === '') {
        // Default to home if on root path with no hash
        setActiveNav('#home');
      } else {
        setActiveNav('');
      }
    };

    // Set initial active nav
    updateActiveNav();

    // Listen for hash changes
    window.addEventListener('hashchange', updateActiveNav);
    window.addEventListener('load', updateActiveNav);

    return () => {
      window.removeEventListener('hashchange', updateActiveNav);
      window.removeEventListener('load', updateActiveNav);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsReportsOpen(false);
      }
    };

    if (isReportsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isReportsOpen]);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <div className="flex items-center space-x-1">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-orange-500 rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
            </div> */}
            <img src="/logo.png" alt="Market Revolution" className="w-10 h-10" />
            {/* <span className="text-xl font-bold text-gray-900">MARKET REVOLUTION</span> */}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className={`transition-colors font-medium ${
                activeNav === '#home' || activeNav === ''
                  ? 'text-[#4CB8AB]'
                  : 'text-gray-700 hover:text-[#4CB8AB]'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`transition-colors font-medium ${
                activeNav === '#about'
                  ? 'text-[#4CB8AB]'
                  : 'text-gray-700 hover:text-[#4CB8AB]'
              }`}
            >
              About Us
            </a>
            <a 
              href="#services" 
              className={`transition-colors font-medium ${
                activeNav === '#services'
                  ? 'text-[#4CB8AB]'
                  : 'text-gray-700 hover:text-[#4CB8AB]'
              }`}
            >
              Services
            </a>
            {/* Reports Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsReportsOpen(!isReportsOpen)}
                className={`flex items-center transition-colors font-medium ${
                  activeNav === '#reports' || isReportsOpen
                    ? 'text-[#4CB8AB]'
                    : 'text-gray-700 hover:text-[#4CB8AB]'
                }`}
              >
                Reports
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isReportsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isReportsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                  <a 
                    href="#reports" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsReportsOpen(false)}
                  >
                    Market Reports
                  </a>
                  <a 
                    href="#reports" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsReportsOpen(false)}
                  >
                    Industry Analysis
                  </a>
                </div>
              )}
            </div>
            <a 
              href="#contact" 
              className={`transition-colors font-medium ${
                activeNav === '#contact'
                  ? 'text-[#4CB8AB]'
                  : 'text-gray-700 hover:text-[#4CB8AB]'
              }`}
            >
              Contact Us
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-green-50 transition-colors">
              Get Free Sample
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-teal-700 transition-colors">
              Talk to Analyst
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

