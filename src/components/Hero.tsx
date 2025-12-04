import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-primary/80"></div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-primary-foreground/90 text-sm font-medium">
                Contabilidade inteligente e inovadora
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-fade-in">
              I9 Contabilidade & Consultoria
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 mb-6 sm:mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Soluções contábeis modernas e personalizadas para o crescimento do seu negócio, com foco em inovação, eficiência e parceria de confiança.
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://wa.me/5585991515183"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gold-dark transition-all hover:scale-105"
              >
                Solicitar orçamento
                <ChevronRight size={20} />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-foreground/20 transition-all"
              >
                Nossos serviços
              </a>
            </div>

            <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {[
                { value: '10+', label: 'Anos de experiência' },
                { value: '500+', label: 'Clientes atendidos' },
                { value: '100%', label: 'Digital e moderno' },
                { value: '24h', label: 'Suporte rápido' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left p-3 sm:p-0 bg-primary-foreground/5 lg:bg-transparent rounded-lg">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center animate-fade-in mt-8 lg:mt-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-xl"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="relative w-full rounded-2xl shadow-2xl border-2 border-primary-foreground/20"
              >
                <source src="/midia_5.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
