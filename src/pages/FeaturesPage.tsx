
import { useEffect } from 'react';
import Features from '../components/Features';
import CTASection from '../components/CTASection';
import { initScrollReveal } from '../utils/helpers';

const FeaturesPage = () => {
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
              <span className="gradient-text">Our Features</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Discover how XCollaber simplifies global payments for content creators.
            </p>
          </div>
        </div>
      </div>
      
      <Features />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Detailed Features</span>
            </h2>
            
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-xl shadow-lg reveal">
                <h3 className="text-2xl font-bold mb-4">Transparent Pricing</h3>
                <p className="text-gray-600 mb-4">
                  We believe in complete transparency when it comes to fees and charges. With XCollaber, you'll never encounter hidden fees or surprising deductions.
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-600">
                  <li>
                    <span className="font-medium">Clear Fee Structure:</span> Our pricing is straightforward – you pay a small percentage on successful transactions only.
                  </li>
                  <li>
                    <span className="font-medium">No Monthly Fees:</span> Unlike many payment platforms, we don't charge recurring subscription fees.
                  </li>
                  <li>
                    <span className="font-medium">Volume Discounts:</span> As your sales increase, your fees decrease automatically.
                  </li>
                  <li>
                    <span className="font-medium">Detailed Reporting:</span> Access comprehensive transaction reports that break down every fee.
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg reveal">
                <h3 className="text-2xl font-bold mb-4">Local Payouts</h3>
                <p className="text-gray-600 mb-4">
                  Receive your earnings in your local currency, eliminating expensive conversion fees and reducing banking complications.
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-600">
                  <li>
                    <span className="font-medium">Multi-Currency Support:</span> Receive payments in over 50 different currencies.
                  </li>
                  <li>
                    <span className="font-medium">Direct Bank Deposits:</span> Funds delivered directly to your local bank account.
                  </li>
                  <li>
                    <span className="font-medium">Competitive Exchange Rates:</span> Better rates than traditional banks and payment services.
                  </li>
                  <li>
                    <span className="font-medium">Flexible Payout Schedule:</span> Choose when you want to receive your funds.
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg reveal">
                <h3 className="text-2xl font-bold mb-4">Global Coverage</h3>
                <p className="text-gray-600 mb-4">
                  Expand your business globally without the usual challenges of international commerce.
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-600">
                  <li>
                    <span className="font-medium">Worldwide Customer Base:</span> Sell to customers in over 180 countries.
                  </li>
                  <li>
                    <span className="font-medium">Local Payment Methods:</span> Support for regional payment preferences.
                  </li>
                  <li>
                    <span className="font-medium">Compliance Management:</span> We handle international tax and regulatory requirements.
                  </li>
                  <li>
                    <span className="font-medium">Multi-language Support:</span> Your content can be discovered by customers worldwide.
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg reveal">
                <h3 className="text-2xl font-bold mb-4">Advanced Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Make informed decisions with comprehensive data about your sales and customer behavior.
                </p>
                <ul className="list-disc pl-5 space-y-3 text-gray-600">
                  <li>
                    <span className="font-medium">Real-time Dashboard:</span> Monitor sales and revenue as they happen.
                  </li>
                  <li>
                    <span className="font-medium">Geographic Insights:</span> See where your customers are located.
                  </li>
                  <li>
                    <span className="font-medium">Performance Trends:</span> Track growth and identify opportunities.
                  </li>
                  <li>
                    <span className="font-medium">Customer Behavior:</span> Understand how users interact with your content.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default FeaturesPage;
