
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HowItWorks from '../components/HowItWorks';
import { initScrollReveal } from '../utils/helpers';

const HowItWorksPage = () => {
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
              <span className="gradient-text">How XCollaber Works</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Our platform simplifies global content monetization through a seamless, three-step process.
            </p>
          </div>
        </div>
      </div>
      
      <HowItWorks />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">Detailed Process</span>
            </h2>
            
            <div className="space-y-12 mt-12">
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">1. Submit Your Content</h3>
                <p className="text-gray-600 mb-4">
                  Sign up for an XCollaber account and complete our simple verification process. Once verified, you can upload your digital content or services to our secure platform.
                </p>
                <p className="text-gray-600 mb-4">
                  We support various formats including videos, ebooks, software, courses, and digital services. Our content review team ensures all submissions meet our quality and compliance standards.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2">What you need to prepare:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>High-quality digital content ready for distribution</li>
                    <li>Basic information about your content (title, description, category)</li>
                    <li>Pricing information and any regional restrictions</li>
                    <li>Banking details for receiving payments</li>
                  </ul>
                </div>
              </div>
              
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">2. We List & Manage</h3>
                <p className="text-gray-600 mb-4">
                  Once your content is approved, we handle the distribution process. Your content is listed on our global marketplace, where users from around the world can discover and purchase it.
                </p>
                <p className="text-gray-600 mb-4">
                  We provide localized payment options in each region, handle customer service inquiries, and ensure secure delivery of your content to buyers. Our platform also offers analytics so you can track performance.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2">What we manage:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Global distribution and platform visibility</li>
                    <li>Payment processing in local currencies</li>
                    <li>Customer service and technical support</li>
                    <li>Tax and legal compliance across regions</li>
                    <li>Security and content protection</li>
                  </ul>
                </div>
              </div>
              
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">3. You Get Paid</h3>
                <p className="text-gray-600 mb-4">
                  We process payments from customers worldwide and handle currency conversions. You receive payouts in your preferred local currency, eliminating the need for multiple international accounts.
                </p>
                <p className="text-gray-600 mb-4">
                  Payments are processed on a regular schedule (typically bi-weekly), with detailed reports showing your sales performance. All transaction fees are transparent and clearly documented.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-6">
                  <h4 className="font-semibold mb-2">Payment benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Receive funds in your local currency</li>
                    <li>Reduced conversion fees compared to traditional methods</li>
                    <li>Detailed financial reporting and analytics</li>
                    <li>Optional early payout options (for a small fee)</li>
                    <li>Tax documentation assistance</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Ready to Get Started?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
