
import { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
    submitted: false,
    error: false,
    loading: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, loading: true }));
    
    // Simulate API call
    setTimeout(() => {
      setFormState((prev) => ({
        ...prev,
        submitted: true,
        loading: false,
      }));
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Join Our Waitlist</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Be among the first to experience XCollaber's revolutionary platform. 
            Fill out the form below to secure your spot.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-10">
          {formState.submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your request has been received. We'll be in touch soon with exclusive updates about XCollaber.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-xcollaber-blue focus:border-xcollaber-blue transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-xcollaber-blue focus:border-xcollaber-blue transition-colors"
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  WhatsApp Number (Optional)
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formState.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-xcollaber-blue focus:border-xcollaber-blue transition-colors"
                  placeholder="+1 234 567 8900"
                />
              </div>
              
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-xcollaber-blue focus:border-xcollaber-blue transition-colors"
                  placeholder="Tell us about your content or any questions you have..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn btn-primary btn-lg"
                disabled={formState.loading}
              >
                {formState.loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Join Waitlist'
                )}
              </button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-xcollaber-blue hover:underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-xcollaber-blue hover:underline">
                  Terms of Service
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
