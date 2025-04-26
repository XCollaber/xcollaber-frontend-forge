
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import { initScrollReveal } from '../utils/helpers';

const HomePage = () => {
  useEffect(() => {
    // Initialize scroll reveal animations
    const cleanupScrollReveal = initScrollReveal();
    
    return () => {
      cleanupScrollReveal();
    };
  }, []);

  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
