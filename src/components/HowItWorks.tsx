
import { Check } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Submit Content',
    description:
      'Upload your digital content or services to our secure platform. We support various formats and content types.',
    icon: '📤',
  },
  {
    id: 2,
    title: 'We List & Manage',
    description:
      'Our team handles distribution, promotion, and payment processing. We ensure your content reaches the right audience.',
    icon: '🔄',
  },
  {
    id: 3,
    title: 'You Get Paid',
    description:
      'Receive payments in your local currency, no matter where your customers are. Fast, secure, and transparent.',
    icon: '💰',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How XCollaber Works</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our simple 3-step process makes global content monetization accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl hover:-translate-y-1 duration-300 reveal"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-xcollaber-blue to-xcollaber-purple rounded-full flex items-center justify-center text-white text-3xl mb-6">
                <span>{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Step {step.id}: {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
              <ul className="mt-4 space-y-2">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center">
                    <Check size={16} className="text-xcollaber-teal mr-2" />
                    <span className="text-gray-600">Feature {i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
