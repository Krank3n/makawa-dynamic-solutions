import React, { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY, CONTACT_DETAILS, PhoneIcon, EmailIcon, LocationIcon } from '@/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import MapDisplay from '@/components/ui/MapDisplay';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone || 'Not provided');
      formDataToSend.append("service", formData.service || 'Not specified');
      formDataToSend.append("message", formData.message);
      formDataToSend.append("subject", `New Contact Form Submission from ${formData.name}`);
      formDataToSend.append("from_name", "Your Website Contact Form");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <section id="contact" className="py-16 md:py-24 bg-white dark:bg-charcoal-deep">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Get In Touch" subtitle="Contact Us" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Contact Info & Map */}
            <div className="space-y-8 animate-slide-in-left">
              <GlassCard>
                <h3 className="text-2xl font-display font-semibold mb-6 text-charcoal-deep dark:text-white">Contact Information</h3>
                <div className="space-y-5">
                  <a href={`tel:${CONTACT_DETAILS.phone}`} className="flex items-center group">
                    <PhoneIcon className="w-7 h-7 text-orange-vibrant mr-4 group-hover:animate-bounce" />
                    <div>
                      <span className="block text-sm text-gray-warm">Phone</span>
                      <span className="text-lg text-charcoal-deep dark:text-white group-hover:text-orange-vibrant transition-colors">{CONTACT_DETAILS.phone}</span>
                    </div>
                  </a>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="flex items-center group">
                    <EmailIcon className="w-7 h-7 text-orange-vibrant mr-4 group-hover:animate-bounce" />
                    <div>
                      <span className="block text-sm text-gray-warm">Email</span>
                      <span className="text-lg text-charcoal-deep dark:text-white group-hover:text-orange-vibrant transition-colors">{CONTACT_DETAILS.email}</span>
                    </div>
                  </a>
                  <div className="flex items-center group">
                    <LocationIcon className="w-7 h-7 text-orange-vibrant mr-4 group-hover:animate-bounce" />
                    <div>
                      <span className="block text-sm text-gray-warm">Location</span>
                      <span className="text-lg text-charcoal-deep dark:text-white">{CONTACT_DETAILS.location}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <MapDisplay
                  mapViewUrl={CONTACT_DETAILS.mapViewUrl}
                  locationName={CONTACT_DETAILS.location}
              />
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up animation-delay-200">
              <GlassCard>
                <h3 className="text-2xl font-display font-semibold mb-6 text-charcoal-deep dark:text-white">Send Us a Message</h3>

                {error && (
                    <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
                      <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                    </div>
                )}

                {isSubmitted ? (
                    <div className="text-center py-10">
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-green-forest mb-3">Message Sent Successfully!</h4>
                      <p className="text-charcoal-deep/80 dark:text-gray-warm/90 mb-6">Thank you for contacting us. We will get back to you shortly at {formData.email || 'your email'}.</p>
                      <Button
                          onClick={() => setIsSubmitted(false)}
                          variant="secondary"
                      >
                        Send Another Message
                      </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal-deep dark:text-gray-warm mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full p-3 border border-gray-300 dark:border-gray-warm/40 rounded-lg bg-white dark:bg-charcoal-deep focus:ring-2 focus:ring-orange-vibrant focus:border-orange-vibrant outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Your Name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal-deep dark:text-gray-warm mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full p-3 border border-gray-300 dark:border-gray-warm/40 rounded-lg bg-white dark:bg-charcoal-deep focus:ring-2 focus:ring-orange-vibrant focus:border-orange-vibrant outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal-deep dark:text-gray-warm mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="w-full p-3 border border-gray-300 dark:border-gray-warm/40 rounded-lg bg-white dark:bg-charcoal-deep focus:ring-2 focus:ring-orange-vibrant focus:border-orange-vibrant outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Your Phone Number (Optional)"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-charcoal-deep dark:text-gray-warm mb-1">Service of Interest</label>
                        <select
                            name="service"
                            id="service"
                            value={formData.service}
                            onChange={handleChange}
                            disabled={isLoading}
                            className="w-full p-3 border border-gray-300 dark:border-gray-warm/40 rounded-lg bg-white dark:bg-charcoal-deep focus:ring-2 focus:ring-orange-vibrant focus:border-orange-vibrant outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <option value="">Select a service</option>
                          <option value="Construction">Construction</option>
                          <option value="Maintenance">Maintenance</option>
                          <option value="Renovation">Renovation</option>
                          <option value="Consultation">Consultation</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-charcoal-deep dark:text-gray-warm mb-1">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={isLoading}
                            className="w-full p-3 border border-gray-300 dark:border-gray-warm/40 rounded-lg bg-white dark:bg-charcoal-deep focus:ring-2 focus:ring-orange-vibrant focus:border-orange-vibrant outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed resize-vertical"
                            placeholder="Tell us about your project or how we can help you..."
                        />
                      </div>

                      <div>
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full"
                            disabled={isLoading}
                        >
                          {isLoading ? (
                              <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </div>
                          ) : (
                              'Send Message'
                          )}
                        </Button>
                      </div>
                    </form>
                )}
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;