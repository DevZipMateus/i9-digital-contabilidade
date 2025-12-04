import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description:
        'Atuar de forma inovadora e com elevado padrão de eficiência na área contábil, buscando a satisfação dos clientes por meio da qualidade, agilidade e precisão das informações.',
    },
    {
      icon: Eye,
      title: 'Visão',
      description:
        'Tornar-se uma referência sólida em serviços contábeis e consultoria na região, sendo reconhecida como um escritório inteligente e 100% informatizado.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description:
        'Confiança, ética e transparência em todas as relações. Comprometimento com o desenvolvimento dos negócios dos clientes e excelência nos serviços prestados.',
    },
  ];

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-secondary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3">
            Sobre nós
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça a I9 Contabilidade
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Somos uma empresa moderna e parceira, que alia tecnologia, inovação e ética para oferecer soluções contábeis de alto nível.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-background p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-secondary/20 transition-colors">
                <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Galeria do escritório */}
        <div className="mt-10 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-6 sm:mb-8">
            Conheça nosso escritório
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { src: '/images/escritorio-1.jpg', alt: 'Escritório I9 Contabilidade - Área de trabalho' },
              { src: '/images/escritorio-2.jpg', alt: 'Escritório I9 Contabilidade - Sala de reuniões' },
              { src: '/images/escritorio-3.jpg', alt: 'Escritório I9 Contabilidade - Recepção' },
            ].map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-16 bg-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Por que escolher a I9?
              </h3>
              <p className="text-primary-foreground/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                A I9 Contabilidade se posiciona como um aliado estratégico no crescimento dos seus negócios. Combinamos experiência, tecnologia de ponta e atendimento personalizado.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Atendimento humanizado e próximo',
                  'Tecnologia e softwares atualizados',
                  'Equipe qualificada e comprometida',
                  'Planos acessíveis a partir de R$ 50/mês',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3 text-primary-foreground/90 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center order-1 md:order-2 mb-6 md:mb-0">
              <img
                src="/logo-i9.png"
                alt="I9 Contabilidade"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
