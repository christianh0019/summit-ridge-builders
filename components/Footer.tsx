import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Award, CheckCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES, LOCATIONS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Trust */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold mb-1">Summit Ridge</h3>
              <p className="text-xs uppercase tracking-widest text-accent">Builders</p>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Serving Estes Park and Northern Colorado since {COMPANY_INFO.foundingYear}. 
              Building legacy homes for generations.
            </p>
            <div className="flex gap-4 mb-8">
              <a href={COMPANY_INFO.socials.facebook} className="text-gray-400 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href={COMPANY_INFO.socials.instagram} className="text-gray-400 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={COMPANY_INFO.socials.linkedin} className="text-gray-400 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
               {/* Placeholders for Accreditations */}
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Award size={14} className="text-accent" /> BBB A+
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <CheckCircle size={14} className="text-accent" /> NAHB Member
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent text-sm transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-accent text-sm transition-colors">Our Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Services Silo */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map(service => (
                <li key={service.slug}>
                  <a href={`#${service.slug}`} className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Locations Silo */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Areas Served</h4>
            <ul className="space-y-3">
              {LOCATIONS.map(loc => (
                <li key={loc}>
                  <a href="#contact" className="text-gray-400 hover:text-accent text-sm transition-colors">
                    {loc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: NAP & Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </li>
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-accent text-sm transition-colors group">
                  <Phone size={18} className="text-accent group-hover:text-white" />
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-gray-400 hover:text-accent text-sm transition-colors group">
                  <Mail size={18} className="text-accent group-hover:text-white" />
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="pt-2 text-xs text-gray-500">
                {COMPANY_INFO.license}
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Basement */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          <div className="text-center md:text-right">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
