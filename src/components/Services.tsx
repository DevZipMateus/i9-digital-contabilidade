import { Building2, Calculator, FileText, Users, Briefcase, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Abertura de empresas',
      description:
        'Cuidamos de toda a burocracia inicial, incluindo taxas de abertura. Orientação para enquadramento tributário adequado.',
    },
    {
      icon: Calculator,
      title: 'Assessoria contábil e fiscal',
      description:
        'Escrituração contábil e fiscal completa. Cumprimento das obrigações acessórias e declarações exigidas.',
    },
    {
      icon: FileText,
      title: 'Gestão financeira',
      description:
        'Apoio na organização financeira da empresa. Serviços administrativos para facilitar a rotina empresarial.',
    },
    {
      icon: Users,
      title: 'Departamento pessoal',
      description:
        'Folha de pagamento, admissões, demissões e todas as rotinas trabalhistas da sua empresa.',
    },
    {
      icon: Briefcase,
      title: 'Consultoria personalizada',
      description:
        'Orientação estratégica para crescimento do negócio. Atendimento próximo e humanizado.',
    },
    {
      icon: TrendingUp,
      title: 'Planejamento tributário',
      description:
        'Análise para redução legal da carga tributária. Escolha do melhor regime para sua empresa.',
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Nossos serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções completas para seu negócio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos serviços contábeis de alta qualidade com foco em reduzir burocracias e otimizar resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-muted rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Planos a partir de R$ 50,00/mês
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Oferecemos planos acessíveis para todos os tamanhos de empresa. Entre em contato e solicite um orçamento personalizado.
            </p>
            <a
              href="https://wa.me/5585991515183"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
