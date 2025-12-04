import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo-i9.png"
              alt="Logo I9 Contabilidade"
              className="h-12 w-auto"
            />
            <span className={`font-heading font-bold text-lg hidden sm:block transition-colors ${
              isScrolled ? 'text-primary' : 'text-primary-foreground'
            }`}>
              I9 Contabilidade
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-secondary ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5585991515183"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-gold-dark transition-colors"
            >
              Fale conosco
            </a>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground font-medium px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5585991515183"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground mx-4 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gold-dark transition-colors"
              >
                Fale conosco
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
