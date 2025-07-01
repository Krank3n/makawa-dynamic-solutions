import React, { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY } from '@/constants';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';

interface FormData {
  serviceType: string;
  projectSize: string;
  timeline: string;
  name: string;
  email: string;
}

const QuoteToolSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    serviceType: '',
    projectSize: '',
    timeline: '',
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null); // Clear error when user makes changes
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
      formDataToSend.append("service_type", formData.serviceType);
      formDataToSend.append("project_size", formData.projectSize);
      formDataToSend.append("timeline", formData.timeline);
      formDataToSend.append("subject", `Quote Request from ${formData.name} - ${formData.serviceType}`);
      formDataToSend.append("from_name", "Quote Tool - Your Website");

      // Create a detailed message
      const message = `
New Quote Request Details:

Client Information:
- Name: ${formData.name}
- Email: ${formData.email}

Project Details:
- Service Type: ${formData.serviceType}
- Project Size: ${formData.projectSize}
- Preferred Timeline: ${formData.timeline}

Please follow up with a detailed quote for this potential client.
      `;
      formDataToSend.append("message", message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        // Reset form data
        setFormData({
          serviceType: '',
          projectSize: '',
          timeline: '',
          name: '',
          email: '',
        });
      } else {
        throw new Error(data.message || 'Failed to send quote request');
      }
    } catch (error) {
      console.error('Error sending quote request:', error);
      setError('Failed to send quote request. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setError(null);
    setFormData({
      serviceType: '',
      projectSize: '',
      timeline: '',
      name: '',
      email: '',
    });
  };

  return (
      <section id="quote-tool" className="py-16 md:py-24 bg-gray-50 dark:bg-charcoal-deep/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Get a Quick Estimate" subtitle="Plan Your Project" />

          <GlassCard className="max-w-3xl mx-auto">
            {error && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
                  <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                </div>
            )}

            {submitted ? (
                <div className="text-center py-12">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-green-forest mb-4">Quote Request Submitted!</h3>
                  <p className="text-charcoal-deep/80 dark:text-gray-warm/90 mb-6">
                    Thank you for your interest! We've received your project details and will prepare a detailed quote for you.
                    Our team will review your requirements and get in touch within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm text-charcoal-deep/70 dark:text-gray-warm/80">
                      We'll send your quote to: <strong>{formData.email || 'your email'}</strong>
                    </p>
                    <Button onClick={resetForm} variant="secondary">
                      Submit Another Quote Request
                    </Button>
                  </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-charcoal-deep dark:text-gray-warm mb-1">
                        Service Type <span className="text-red-500">*</span>
                      </label>
                      <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          className="w-full p-3 border border-gray-300 dark:border-gray-warm/40 rounded-lg bg-white dark:bg-charcoal-deep focus:ring-2 focus:ring-orange-vibrant focus:border-orange-vibrant outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="construction">Construction</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="renovation">Renovation</option>
                        <option value="consulting">Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="projectSize" className="block text-sm font-medium text-charcoal-deep dark:text-gray-warm mb-1">
                        Project Size <span className="text-red-500">*</span>
                      </label>
                      <select
                          id="projectSize"
                          name="projectSize"
                          value={formData.projectSize}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          className="w-full p-3 border border-gray-300 dark:border-gray-warm/40 rounded-lg bg-white dark:bg-charcoal-deep focus:ring-2 focus:ring-orange-vibrant focus:border-orange-vibrant outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="" disabled>Estimate project size</option>
                        <option value="small">Small (e.g., Room, Minor Repair)</option>
                        <option value="medium">Medium (e.g., House Extension, Office Fitout)</option>
                        <option value="large">Large (e.g., New Build, Major Commercial)</option>
                        <option value="custom">Custom (Details in message)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-charcoal-deep dark:text-gray-warm mb-1">
                      Preferred Timeline <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        className="w-full p-3 border border-gray-300 dark:border-gray-warm/40 rounded-lg bg-white dark:bg-charcoal-deep focus:ring-2 focus:ring-orange-vibrant focus:border-orange-vibrant outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="" disabled>Select timeline</option>
                      <option value="flexible">Flexible</option>
                      <option value="1-3months">1-3 Months</option>
                      <option value="3-6months">3-6 Months</option>
                      <option value="6+months">6+ Months</option>
                    </select>
                  </div>

                  <p className="text-xs text-center text-charcoal-deep/70 dark:text-gray-warm/80 pt-4">
                    This tool provides a preliminary estimate. For a detailed quote, please provide your contact information.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-warm/20">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal-deep dark:text-gray-warm mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          className="w-full p-3 border border-gray-300 dark:border-gray-warm/40 rounded-lg bg-white dark:bg-charcoal-deep focus:ring-2 focus:ring-orange-vibrant focus:border-orange-vibrant outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal-deep dark:text-gray-warm mb-1">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          className="w-full p-3 border border-gray-300 dark:border-gray-warm/40 rounded-lg bg-white dark:bg-charcoal-deep focus:ring-2 focus:ring-orange-vibrant focus:border-orange-vibrant outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isLoading}
                    >
                      {isLoading ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting Request...
                          </div>
                      ) : (
                          'Request Detailed Quote'
                      )}
                    </Button>
                  </div>
                </form>
            )}
          </GlassCard>
        </div>
      </section>
  );
};

export default QuoteToolSection;