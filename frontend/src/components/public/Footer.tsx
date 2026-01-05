import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="w-full py-12 lg:py-16"
      style={{
        background: 'linear-gradient(135deg, #283F3B 0%, rgba(40, 63, 59, 0.95) 100%)',
      }}
    >
      <div className="container max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Logo, Tagline, and Social Media */}
        

        {/* Links Section - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Column */}
          
          <div className="mb-">
          <div className="flex items-center space-x-3 mb-3">
            <img src="/logo.png" alt="Market Revolution" className="w-10 h-10" />
            <span className="text-2xl font-bold text-white">MARKET REVOLUTION</span>
          </div>
          <p className="text-white/80 mb-6 max-w-2xl">
            Transparent, fast, and actionable insights for healthcare and pharmaceutical markets.
          </p>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/80 hover:text-white transition-colors text-sm">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#mission" className="text-white/80 hover:text-white transition-colors text-sm">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#values" className="text-white/80 hover:text-white transition-colors text-sm">
                  Core Values
                </a>
              </li>
              <li>
                <a href="#why" className="text-white/80 hover:text-white transition-colors text-sm">
                  Why Market Revolution
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#industries" className="text-white/80 hover:text-white transition-colors text-sm">
                  Industries
                </a>
              </li>
              <li>
                <a href="#reports" className="text-white/80 hover:text-white transition-colors text-sm">
                  Reports
                </a>
              </li>
              <li>
                <a href="#research" className="text-white/80 hover:text-white transition-colors text-sm">
                  Custom Research
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/80 hover:text-white transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#sample" className="text-white/80 hover:text-white transition-colors text-sm">
                  Get Free Sample
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  123 Innovation Park, Lucknow Uttar Pradesh 500001, India
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary  flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">+91-40-5555-2671</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">+1-415-555-2671 (US)</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@marketrevolution.com"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  info@marketrevolution.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal Links */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Market Revolution Research. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#privacy"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#gdpr"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                GDPR Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

