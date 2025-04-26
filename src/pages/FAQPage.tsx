
import { useEffect } from 'react';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { initScrollReveal } from '../utils/helpers';

const FAQPage = () => {
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
              <span className="gradient-text">Frequently Asked Questions</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Find answers to common questions about XCollaber's platform and services.
            </p>
          </div>
        </div>
      </div>
      
      <FAQSection />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Additional Questions</span>
            </h2>
            
            <div className="space-y-8">
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">How do I sign up?</h3>
                <p className="text-gray-600">
                  Currently, XCollaber is in a closed beta phase. You can join our waitlist by filling out the contact form, and we'll notify you when spots become available. Once invited, you'll receive detailed instructions for completing your account setup and verification.
                </p>
              </div>
              
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">What types of content are not allowed?</h3>
                <p className="text-gray-600">
                  XCollaber prohibits any illegal content or services, including but not limited to: copyright-infringing materials, adult content, gambling services, hacking tools, counterfeit goods, and any content that violates local or international laws. Our content moderation team reviews all submissions to ensure compliance.
                </p>
              </div>
              
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">How do taxes work?</h3>
                <p className="text-gray-600">
                  XCollaber helps simplify tax compliance by providing necessary documentation for your earnings. However, you remain responsible for reporting and paying taxes in your jurisdiction. We provide annual earnings statements and can withhold taxes for certain countries when required by law. We recommend consulting with a tax professional for your specific situation.
                </p>
              </div>
              
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">What happens if there's a dispute?</h3>
                <p className="text-gray-600">
                  We have a comprehensive dispute resolution process. When a customer raises an issue, we first encourage direct communication between parties. If that doesn't resolve the matter, our mediation team steps in to review the case and make a fair determination based on our platform policies and the evidence provided by both parties.
                </p>
              </div>
              
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">Can I sell physical products?</h3>
                <p className="text-gray-600">
                  Currently, XCollaber is focused exclusively on digital content and services. This includes software, digital art, music, videos, online courses, e-books, and virtual services. We don't support physical product sales at this time, but it's on our roadmap for future development.
                </p>
              </div>
              
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">How secure is my data?</h3>
                <p className="text-gray-600">
                  Security is a top priority at XCollaber. We implement bank-level encryption for all data, maintain strict access controls, conduct regular security audits, and are compliant with international data protection regulations including GDPR. Your financial and personal information is protected with industry-leading security measures.
                </p>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                Our support team is ready to help with any other questions you might have.
              </p>
              <a href="mailto:support@xcollaber.com" className="btn btn-primary btn-lg">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default FAQPage;
