
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Our Mission</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              At XCollaber, we're on a mission to democratize global commerce by removing financial barriers between creators and their global audience.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              We believe that financial complexity shouldn't limit creative potential. Our platform bridges the gap between international finance and content creation, allowing creators to focus on what they do best.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Founded in 2023 by a team of fintech experts and content creators, XCollaber combines technical expertise with real-world understanding of creator needs.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Join Our Journey
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80" 
              alt="XCollaber team" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-xcollaber-teal/20 z-0"></div>
            <div className="absolute -left-4 -top-4 w-32 h-32 rounded-full bg-xcollaber-coral/20 z-0"></div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="gradient-text">Our Core Values</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Transparency',
                description: 'Clear pricing, open processes, and honest communication.',
              },
              {
                title: 'Accessibility',
                description: 'Financial services should be available to everyone, everywhere.',
              },
              {
                title: 'Innovation',
                description: 'Constantly improving our platform for better user experience.',
              },
              {
                title: 'Security',
                description: 'Protecting your data and funds is our top priority.',
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="p-6 text-center border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 reveal"
              >
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
