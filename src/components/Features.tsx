
import React from 'react';

const features = [
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprising charges. Know exactly what you pay for each transaction.',
    icon: '💎',
  },
  {
    title: 'Local Payouts',
    description: 'Receive funds in your local currency, reducing conversion fees and banking complications.',
    icon: '🏦',
  },
  {
    title: 'Global Coverage',
    description: 'Reach customers worldwide with payment solutions that work across borders and currencies.',
    icon: '🌎',
  },
  {
    title: 'Secure Transactions',
    description: 'Bank-level encryption and security protocols protect your financial data and transactions.',
    icon: '🔒',
  },
  {
    title: 'Fast Processing',
    description: 'Quick payment processing and transfers, so you get your money when you need it.',
    icon: '⚡',
  },
  {
    title: 'Dedicated Support',
    description: '24/7 customer service from financial experts who understand your business needs.',
    icon: '🛟',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Why Choose XCollaber?</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our platform offers unique benefits that make financial collaboration seamless and profitable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 border border-gray-200 rounded-xl hover:border-xcollaber-blue/30 hover:shadow-lg transition-all duration-300 reveal"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-xcollaber-blue/10 to-xcollaber-purple/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
