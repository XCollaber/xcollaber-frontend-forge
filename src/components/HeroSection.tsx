
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Global Payments.</span> Local Solutions.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              XCollaber makes international payouts simple. List your content, 
              we handle distribution and payments, you focus on creation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Join Waitlist
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-lg">
                Learn How <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-xcollaber-blue/20 to-xcollaber-purple/20 absolute inset-0 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Financial collaboration" 
                className="w-full h-auto z-10 relative"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-xcollaber-coral/20 z-0"></div>
            <div className="absolute -left-4 -top-4 w-32 h-32 rounded-full bg-xcollaber-blue/20 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
