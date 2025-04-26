
import { useEffect } from 'react';
import AboutUs from '../components/AboutUs';
import CTASection from '../components/CTASection';
import { initScrollReveal } from '../utils/helpers';

const AboutPage = () => {
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
              <span className="gradient-text">About XCollaber</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Learn about our mission, vision, and the team behind XCollaber.
            </p>
          </div>
        </div>
      </div>
      
      <AboutUs />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="gradient-text">Our Story</span>
            </h2>
            
            <div className="space-y-8 reveal">
              <p className="text-gray-600 text-lg">
                XCollaber was born from a simple observation: talented creators around the world were struggling to monetize their digital content globally due to payment barriers and complex financial systems.
              </p>
              
              <p className="text-gray-600 text-lg">
                Founded in 2023 by a team of fintech innovators and content creators, we set out to build a platform that would bridge the gap between global commerce and local finance. Our founders had personally experienced the challenges of receiving international payments, dealing with high fees, and navigating complex banking requirements.
              </p>
              
              <p className="text-gray-600 text-lg">
                What started as a solution for a small community of digital creators quickly evolved into a comprehensive platform designed to serve content creators, digital service providers, and businesses of all sizes worldwide.
              </p>
              
              <p className="text-gray-600 text-lg">
                Today, XCollaber is growing rapidly, with a mission to democratize global commerce and empower creators worldwide to share their talents without financial barriers.
              </p>
            </div>
            
            <h2 className="text-3xl font-bold my-12 text-center">
              <span className="gradient-text">Leadership Team</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  name: 'Alexandra Chen',
                  title: 'CEO & Co-Founder',
                  bio: 'Former fintech executive with 10+ years experience in global payment systems.',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
                },
                {
                  name: 'Michael Rodriguez',
                  title: 'CTO & Co-Founder',
                  bio: 'Software architect specializing in secure financial systems and blockchain technology.',
                  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
                },
                {
                  name: 'Sarah Johnson',
                  title: 'COO',
                  bio: 'Operations expert with background in scaling global marketplaces and content platforms.',
                  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
                },
              ].map((member, index) => (
                <div key={index} className="text-center reveal">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-xcollaber-blue font-medium mb-2">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center mt-12 reveal">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals who are passionate about fintech and global commerce. Check out our open positions or send us your resume.
              </p>
              <a href="#careers" className="btn btn-primary btn-md">
                View Careers
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

export default AboutPage;
