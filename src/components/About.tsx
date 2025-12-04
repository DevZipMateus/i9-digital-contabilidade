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
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Sobre nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça a I9 Contabilidade
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Somos uma empresa moderna e parceira, que alia tecnologia, inovação e ética para oferecer soluções contábeis de alto nível.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Por que escolher a I9?
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                A I9 Contabilidade se posiciona como um aliado estratégico no crescimento dos seus negócios. Combinamos experiência, tecnologia de ponta e atendimento personalizado.
              </p>
              <ul className="space-y-3">
                {[
                  'Atendimento humanizado e próximo',
                  'Tecnologia e softwares atualizados',
                  'Equipe qualificada e comprometida',
                  'Planos acessíveis a partir de R$ 50/mês',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/90">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/logo-i9.png"
                alt="I9 Contabilidade"
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
