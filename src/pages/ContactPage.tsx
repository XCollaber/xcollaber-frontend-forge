
import { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { initScrollReveal } from '../utils/helpers';

const ContactPage = () => {
  useEffect(() => {
    // Initialize scroll reveal animations
    const cleanupScrollReveal = initScrollReveal();
    window.scrollTo(0, 0);
    
    return () => {
      cleanupScrollReveal();
    };
  }, []);

  return (
    <div>
      <div className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Contact Us</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Join our waitlist or reach out with any questions about XCollaber.
            </p>
          </div>
        </div>
      </div>
      
      <ContactForm />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  <span className="gradient-text">Get in Touch</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Have questions or feedback? We'd love to hear from you. Here's how you can reach our team:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a href="mailto:info@xcollaber.com" className="text-xcollaber-blue hover:underline">
                      info@xcollaber.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Support</h3>
                    <a href="mailto:support@xcollaber.com" className="text-xcollaber-blue hover:underline">
                      support@xcollaber.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Press Inquiries</h3>
                    <a href="mailto:press@xcollaber.com" className="text-xcollaber-blue hover:underline">
                      press@xcollaber.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Office Location</h3>
                    <address className="not-italic text-gray-600">
                      350 Tech Plaza<br/>
                      San Francisco, CA 94105<br/>
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-xcollaber-blue transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-xcollaber-blue transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-xcollaber-blue transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  <span className="gradient-text">FAQs</span>
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">When will XCollaber launch?</h3>
                    <p className="text-gray-600">
                      We're currently in closed beta and plan to launch publicly in Q3 2023. Join our waitlist to be among the first to access our platform.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How long is the waitlist?</h3>
                    <p className="text-gray-600">
                      Waitlist invitations are sent out weekly. Priority is given based on sign-up date and content type. Most users receive access within 2-4 weeks.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Do you offer partner programs?</h3>
                    <p className="text-gray-600">
                      Yes, we have partnership opportunities for businesses and creators with large audiences. Contact our partnership team at partners@xcollaber.com for details.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What kind of support do you offer?</h3>
                    <p className="text-gray-600">
                      We provide 24/7 email support, with an average response time of under 2 hours. Premium accounts also receive dedicated phone support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
