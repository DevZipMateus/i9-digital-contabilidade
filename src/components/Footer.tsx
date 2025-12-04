import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
              <img
                src="/logo-i9.png"
                alt="Logo I9 Contabilidade"
                className="h-8 sm:h-10 w-auto"
              />
              <span className="font-heading font-bold text-base sm:text-lg">
                I9 Contabilidade
              </span>
            </div>
            <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
              Soluções contábeis modernas e personalizadas para o crescimento do seu negócio.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Links rápidos</h4>
            <nav className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2 sm:flex-col sm:gap-2">
              <a href="#inicio" className="text-primary-foreground/70 hover:text-secondary transition-colors text-xs sm:text-sm">
                Início
              </a>
              <a href="#sobre" className="text-primary-foreground/70 hover:text-secondary transition-colors text-xs sm:text-sm">
                Sobre
              </a>
              <a href="#servicos" className="text-primary-foreground/70 hover:text-secondary transition-colors text-xs sm:text-sm">
                Serviços
              </a>
              <a href="#contato" className="text-primary-foreground/70 hover:text-secondary transition-colors text-xs sm:text-sm">
                Contato
              </a>
            </nav>
          </div>

          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contato</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm justify-center sm:justify-start">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  Rua Maria Luiza Noronha, 322<br />
                  Horizonte - CE
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm justify-center sm:justify-start">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="https://wa.me/5585991515183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  (85) 99151-5183
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm justify-center sm:justify-start">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="mailto:i9contabilidade2024@hotmail.com"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors break-all"
                >
                  i9contabilidade2024@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 sm:pt-8 text-center">
          <p className="text-primary-foreground/50 text-xs sm:text-sm">
            CNPJ: 55.871.294/0001-19
          </p>
          <p className="text-primary-foreground/50 text-xs sm:text-sm mt-2">
            © {new Date().getFullYear()} I9 Contabilidade & Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
