import React, { useState } from 'react';
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_LOCATION, NAV_LINKS, PhoneIcon, EmailIcon, LocationIcon } from '@/constants';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Replace with your Web3Forms access key from https://web3forms.com
  const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("email", email);
      formData.append("subject", "Newsletter Subscription Request");
      formData.append("from_name", "Website Newsletter");
      formData.append("message", `New newsletter subscription request from: ${email}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubscribed(true);
        setEmail('');
        // Reset success message after 3 seconds
        setTimeout(() => {
          setIsSubscribed(false);
        }, 3000);
      } else {
        throw new Error(data.message || 'Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setError('Failed to subscribe. Please try again.');
      // Clear error after 3 seconds
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    // { name: 'Facebook', href: '#', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg> },
    // { name: 'LinkedIn', href: '#', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.59-11.018-3.714v-2.155z"/></svg> },
    { name: 'Instagram', href: 'https://www.instagram.com/makawa_d_s/', icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  ];

  return (
      <footer className="bg-charcoal-deep text-gray-warm pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
            {/* Company Info */}
            <div>
              <img
                  src="/images/makawa-icon-blue.svg"
                  alt={COMPANY_NAME}
                  className="h-8 md:h-10 w-auto"
              />
              <h3 className="text-2xl font-display font-bold text-orange-vibrant mb-4">
                <Link href="/">{COMPANY_NAME.split(' ')[0]} <span
                    className="text-blue-steel">{COMPANY_NAME.split(' ').slice(1).join(' ')}</span></Link>
              </h3>
              <p className="text-sm leading-relaxed">
                Your trusted partner in construction and maintenance, delivering dynamic solutions
                across Australia.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Quick
                Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map(link => (
                    <li key={`footer-${link.id}`}>
                      <a href={link.href} className="hover:text-orange-vibrant transition-colors duration-300 text-sm">
                        {link.label}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <PhoneIcon className="w-5 h-5 text-orange-vibrant mr-3 mt-0.5 flex-shrink-0" />
                  <a href={`tel:${COMPANY_PHONE}`} className="hover:text-orange-vibrant transition-colors">{COMPANY_PHONE}</a>
                </li>
                <li className="flex items-start">
                  <EmailIcon className="w-5 h-5 text-orange-vibrant mr-3 mt-0.5 flex-shrink-0" />
                  <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-orange-vibrant transition-colors">{COMPANY_EMAIL}</a>
                </li>
                <li className="flex items-start">
                  <LocationIcon className="w-5 h-5 text-orange-vibrant mr-3 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_LOCATION}</span>
                </li>
              </ul>
            </div>

            {/* Social Media & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Connect</h4>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map(social => (
                    <a key={social.name} href={social.href} aria-label={social.name} className="text-gray-warm hover:text-orange-vibrant transition-colors">
                      <span className="flex gap-1">{social.icon} instagram@makawa_d_s</span>
                    </a>
                ))}
              </div>

              <p className="text-sm mb-2">Stay updated with our latest projects:</p>

              {/* Newsletter Form */}
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex">
                  <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      disabled={isLoading}
                      className="w-full px-3 py-2.5 text-sm rounded-l-md bg-gray-warm/10 text-white border border-gray-warm/20 focus:ring-orange-vibrant focus:border-orange-vibrant outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-warm/60"
                  />
                  <button
                      type="submit"
                      disabled={isLoading || !email}
                      className="px-4 py-2.5 bg-orange-vibrant text-white text-sm font-semibold rounded-r-md hover:bg-yellow-golden transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px]"
                  >
                    {isLoading ? (
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        'Subscribe'
                    )}
                  </button>
                </div>

                {/* Success Message */}
                {isSubscribed && (
                    <div className="flex items-center text-green-400 text-xs">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Successfully subscribed!
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="flex items-center text-red-400 text-xs">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5l-6.928-7.5c-.768-.833-2.036-.833-2.804 0l-6.928 7.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      {error}
                    </div>
                )}
              </form>
            </div>
          </div>

          <div className="border-t border-gray-warm/20 pt-8 text-center md:flex md:justify-between items-center">
            <p className="text-xs md:text-sm">
              &copy; {currentYear} {COMPANY_NAME}. All Rights Reserved.
            </p>
            <p className="text-xs md:text-sm mt-2 md:mt-0">
              Website by Makawa Dynamic Solutions Internal Development
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;