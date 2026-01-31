import { useState, useEffect } from 'react';

import { Menu, X } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { useLocation } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import demworksLogo from '~/assets/demworks-logo.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Events', href: '/events' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-card/95 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={demworksLogo}
            alt="Demworks Logo"
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
          <span
            className={cn(
              'font-serif text-xl font-bold transition-colors',
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            )}
          >
            Demworks
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                location.pathname === link.href
                  ? 'bg-primary/10 text-primary'
                  : isScrolled
                    ? 'text-foreground hover:bg-muted hover:text-primary'
                    : 'text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/10'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Donate Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <Button className="coral-gradient border-0 text-secondary-foreground gap-2 hover:opacity-90 transition-opacity shadow-soft">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            'lg:hidden p-2 rounded-lg transition-colors',
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          )}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-elevated animate-slide-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg font-medium transition-colors',
                  location.pathname === link.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full coral-gradient border-0 text-secondary-foreground gap-2 mt-2">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
