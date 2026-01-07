import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/logo.png" alt="Market Revolution" className="h-10 sm:h-14" />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                location.pathname === '/'
                  ? 'text-[#4CB8AB]'
                  : 'text-gray-700 hover:text-[#4CB8AB]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors font-medium ${
                location.pathname === '/about'
                  ? 'text-[#4CB8AB]'
                  : 'text-gray-700 hover:text-[#4CB8AB]'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors font-medium ${
                location.pathname === '/services'
                  ? 'text-[#4CB8AB]'
                  : 'text-gray-700 hover:text-[#4CB8AB]'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/reports" 
              className={`transition-colors font-medium ${
                location.pathname === '/reports'
                  ? 'text-[#4CB8AB]'
                  : 'text-gray-700 hover:text-[#4CB8AB]'
              }`}
            >
              Reports
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors font-medium ${
                location.pathname === '/contact'
                  ? 'text-[#4CB8AB]'
                  : 'text-gray-700 hover:text-[#4CB8AB]'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-green-50 transition-colors">
              Get Free Sample
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-teal-700 transition-colors">
              Talk to Analyst
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`px-4 py-2 transition-colors font-medium ${
                  location.pathname === '/'
                    ? 'text-[#4CB8AB]'
                    : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 transition-colors font-medium ${
                  location.pathname === '/about'
                    ? 'text-[#4CB8AB]'
                    : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`px-4 py-2 transition-colors font-medium ${
                  location.pathname === '/services'
                    ? 'text-[#4CB8AB]'
                    : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/reports" 
                className={`px-4 py-2 transition-colors font-medium ${
                  location.pathname === '/reports'
                    ? 'text-[#4CB8AB]'
                    : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reports
              </Link>
              <Link 
                to="/contact"
                className={`px-4 py-2 transition-colors font-medium ${
                  location.pathname === '/contact'
                    ? 'text-[#4CB8AB]'
                    : 'text-gray-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="px-4 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-green-50 transition-colors text-left">
                  Get Free Sample
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-teal-700 transition-colors text-left">
                  Talk to Analyst
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

