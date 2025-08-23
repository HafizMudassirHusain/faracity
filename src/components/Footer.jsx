"use client"

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  const services = [
    { name: 'AI & Machine Learning', href: '/services/ai' },
    { name: 'Blockchain Solutions', href: '/services/blockchain' },
    { name: 'Cloud Services', href: '/services/cloud' },
    { name: 'Custom Software', href: '/services/software' },
    { name: 'IoT Solutions', href: '/services/iot' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
  ];

  const pages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative z-10 bg-gradient-to-t from-[#0a0a0a] to-[#1a1a1a]/80 backdrop-blur-sm border-t border-white/10 text-gray-400 pt-10 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">Fahracity</h4>
          <p className="text-sm mb-4 text-gray-300">
            Your one-stop destination for cutting-edge technology solutions: AI, Blockchain, Cloud, Software, and more.
          </p>
          <p className="text-sm mb-1">
            Email: <Link href="mailto:info@fahracity.com" className="text-blue-400 hover:text-blue-300 transition-colors">info@fahracity.com</Link>
          </p>
          <p className="text-sm">
            Phone: <Link href="tel:+15551234567" className="text-blue-400 hover:text-blue-300 transition-colors">(555) 123-4567</Link>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {pages.map((page) => (
              <li key={page.name}>
                <Link href={page.href} className="hover:text-blue-400 transition-colors text-gray-300">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((svc) => (
              <li key={svc.name}>
                <Link href={svc.href} className="hover:text-blue-400 transition-colors text-gray-300">
                  {svc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Legal */}
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">Follow Us</h4>
          <div className="flex space-x-4 mb-6 text-xl">
            {[
              { icon: <FaFacebook />, href: 'https://facebook.com/fahracity' },
              { icon: <FaTwitter />, href: 'https://twitter.com/fahracity' },
              { icon: <FaLinkedin />, href: 'https://linkedin.com/company/fahracity' },
              { icon: <FaInstagram />, href: 'https://instagram.com/fahracity' },
              { icon: <FaGithub />, href: 'https://github.com/fahracity' },
            ].map(({ icon, href }, idx) => (
              <Link key={idx} href={href} className="text-blue-400 hover:text-blue-300 transition-colors">
                {icon}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-400">© {year} Fahracity. All rights reserved.</p>
          <p className="text-xs mt-2 text-gray-400">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors mr-4">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
