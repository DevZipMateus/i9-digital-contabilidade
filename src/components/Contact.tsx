import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua Maria Luiza Noronha, 322',
      subcontent: 'Horizonte - CE',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(85) 99151-5183',
      href: 'https://wa.me/5585991515183',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'i9contabilidade2024@hotmail.com',
      href: 'mailto:i9contabilidade2024@hotmail.com',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a sexta',
      subcontent: '8h às 17h',
    },
  ];

  return (
    <section id="contato" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos prontos para atender você. Entre em contato por telefone, e-mail ou visite nosso escritório.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-background p-6 rounded-xl shadow-sm"
                >
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {info.title}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                  {info.subcontent && (
                    <p className="text-muted-foreground text-sm">
                      {info.subcontent}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-background p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">
                Redes sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/i9contabilidade2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-secondary group-hover:text-secondary-foreground" />
                </a>
                <a
                  href="mailto:i9contabilidade2024@hotmail.com"
                  className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all group"
                  aria-label="E-mail"
                >
                  <Mail className="w-5 h-5 text-secondary group-hover:text-secondary-foreground" />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0671890843244!2d-38.48777360000001!3d-4.099568699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b8b000abc7d4bb%3A0x3af681c5c30a6013!2sRua%20Maria%20Luiza%20Noronha%2C%20322%20-%20Zumbi%2C%20Horizonte%20-%20CE%2C%2062882-020!5e0!3m2!1spt-BR!2sbr!4v1701690000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização I9 Contabilidade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
