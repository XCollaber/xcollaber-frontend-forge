
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">XCollaber</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-xcollaber-blue transition-colors">
              Home
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-xcollaber-blue transition-colors">
              How It Works
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-xcollaber-blue transition-colors">
              Features
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-xcollaber-blue transition-colors">
              FAQ
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-xcollaber-blue transition-colors">
              About
            </Link>
          </nav>
          
          <div className="hidden md:flex space-x-4">
            <Link to="/contact" className="btn btn-primary btn-md">
              Join Waitlist
            </Link>
          </div>
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="px-4 pt-2 pb-4 space-y-3">
          <Link to="/" className="block py-2 text-gray-700" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/how-it-works" className="block py-2 text-gray-700" onClick={() => setIsOpen(false)}>
            How It Works
          </Link>
          <Link to="/features" className="block py-2 text-gray-700" onClick={() => setIsOpen(false)}>
            Features
          </Link>
          <Link to="/faq" className="block py-2 text-gray-700" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
          <Link to="/about" className="block py-2 text-gray-700" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="block py-2 text-xcollaber-blue font-medium" onClick={() => setIsOpen(false)}>
            Join Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
