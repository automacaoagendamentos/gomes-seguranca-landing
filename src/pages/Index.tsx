
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Check, Bell, Home, Search, Calendar, Shield, Wrench, Star, Clock, Users } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  const whatsappNumber = "5511947471818";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  // SEO optimization
  useEffect(() => {
    document.title = "Gomes Instalações - Manutenção de Sistemas de Alarme de Incêndio | São Paulo";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Especialistas em manutenção preventiva e corretiva de sistemas de alarme de incêndio. Conformidade NBR 17240 e CBMESP. Atendimento em São Paulo. Solicite orçamento!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Especialistas em manutenção preventiva e corretiva de sistemas de alarme de incêndio. Conformidade NBR 17240 e CBMESP. Atendimento em São Paulo. Solicite orçamento!';
      document.head.appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Gomes Instalações e Manutenções",
      "description": "Especialistas em sistemas de alarme de incêndio",
      "telephone": "+5511947471818",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "serviceArea": "São Paulo",
      "priceRange": "$$"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, []);

  const services = [
    {
      title: "Verificação do Painel de Controle",
      description: "Inspeção completa das centrais e repetidoras do sistema de alarme"
    },
    {
      title: "Teste de Baterias",
      description: "Verificação das condições e estado das cargas das baterias"
    },
    {
      title: "Teste Funcional de Detectores",
      description: "Testes por amostragem para garantir funcionamento adequado"
    },
    {
      title: "Inspeção de Fiação",
      description: "Verificação completa dos componentes de fiação e eletrodutos"
    },
    {
      title: "Acionadores Manuais",
      description: "Verificação e teste dos acionadores manuais do sistema"
    },
    {
      title: "Sistema de Pressurização",
      description: "Teste funcional no sistema de pressurização de escadas"
    },
    {
      title: "Sinais Sonoros",
      description: "Testes completos nos sinais sonoros de alarme"
    },
    {
      title: "Manutenção Geral",
      description: "Reaperto de conexões, limpeza e verificação de circuitos"
    }
  ];

  const differentials = [
    { icon: Users, text: "Equipe altamente capacitada e treinada" },
    { icon: Shield, text: "Conformidade com normas do CBMESP" },
    { icon: Check, text: "Adequação à NBR 17240" },
    { icon: Wrench, text: "Manutenção preventiva e corretiva" },
    { icon: Star, text: "Atendimento a diversos segmentos" },
    { icon: Clock, text: "Soluções completas em segurança contra incêndio" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/819e1741-bc81-4585-9f2e-532e06b7aaa0.png" 
                alt="Gomes Instalações - Especialistas em Sistemas de Alarme de Incêndio" 
                className="h-12 w-auto object-contain"
                loading="eager"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Gomes Instalações</h1>
                <p className="text-sm text-gray-600">e Manutenções</p>
              </div>
            </div>
            <Button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-green-600 hover:bg-green-700 font-semibold"
              aria-label="Entrar em contato via WhatsApp"
            >
              <Phone className="h-4 w-4 mr-2" />
              Contato WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-orange-50 to-red-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-red-100 text-red-800 hover:bg-red-100 text-sm font-medium px-4 py-2">
            🔥 Especialistas em Combate a Incêndio
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-red-600">Segurança</span> e Confiança<br />
            em Sistemas de Incêndio
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            Prestamos serviços especializados em <strong>manutenção e instalação de centrais de alarme de incêndio</strong>, 
            com equipe altamente capacitada e em total conformidade com as normas técnicas NBR 17240 e CBMESP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4 font-semibold shadow-lg transform hover:scale-105 transition-all"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              📞 Solicitar Orçamento Gratuito
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🔍 Conhecer Nossos Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-red-600">Gomes Instalações</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border-l-4 border-red-500">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Somos uma empresa <strong>especializada no segmento de combate a incêndio</strong>, com uma equipe altamente 
                capacitada para realizar manutenção e instalações de centrais de alarme de incêndio.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossos especialistas realizam <strong>inspeções, testes e manutenções</strong> em sistemas de centrais de 
                Alarme de Incêndio, sempre em conformidade com as normas técnicas do <strong>Corpo de Bombeiros 
                Militar do Estado de São Paulo (CBMESP)</strong> e adequação à <strong>NBR 17240</strong>.
              </p>
            </div>
          </div>

          {/* Maintenance Types Cards - Fixed alignment */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-green-500">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <Check className="h-7 w-7 text-green-600" />
                  </div>
                  <CardTitle className="text-green-700 text-2xl font-bold">Manutenção Preventiva</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  <strong>Antecipação de problemas:</strong> Constatamos antecipadamente falhas ou ajustes necessários 
                  e providenciamos a substituição de peças que possam apresentar problemas futuros, 
                  garantindo a continuidade do funcionamento do sistema.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-orange-500">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                    <Wrench className="h-7 w-7 text-orange-600" />
                  </div>
                  <CardTitle className="text-orange-700 text-2xl font-bold">Manutenção Corretiva</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  <strong>Análise completa do sistema:</strong> Efetuada quando há necessidade de análise 
                  completa do sistema, identificando e realizando a substituição de equipamentos específicos 
                  para restaurar a funcionalidade total.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Importance Section */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-2xl border border-red-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <Bell className="h-8 w-8 text-red-600 mr-3" />
                Por que a Manutenção é Fundamental?
              </h3>
              <div className="space-y-6 text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A manutenção é um serviço <strong>essencial de caráter preventivo e/ou corretivo</strong> que requer profissionais 
                  especializados. Realizamos análise completa dos equipamentos de proteção contra incêndio 
                  para manter suas condições ideais de operação.
                </p>
                <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md">
                  <p className="text-lg font-semibold text-gray-800">
                    🎯 <strong className="text-red-700">Nosso Objetivo:</strong> Proporcionar total confiança de que o sistema de Alarme de 
                    Incêndio estará sempre apto a funcionar com plena segurança e desempenho adequados ao combate 
                    de princípios de incêndio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-red-600">Serviços Especializados</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Oferecemos <strong>inspeção periódica, preventiva e corretiva</strong> com diversos procedimentos 
              realizados por nossa equipe especializada e altamente treinada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full border-t-4 border-t-red-500">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg leading-tight font-bold text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Specialized Items */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              🔧 Itens Adicionais Especializados
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-8 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 transition-all duration-300 border border-red-200">
                <Bell className="h-16 w-16 text-red-600 mx-auto mb-6" />
                <h4 className="font-bold mb-4 text-xl text-gray-800">Centrais Endereçáveis (CIE)</h4>
                <p className="text-gray-600 leading-relaxed">Isoladores de laço, fontes auxiliares e módulos especializados</p>
              </div>
              <div className="p-8 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 transition-all duration-300 border border-red-200">
                <Search className="h-16 w-16 text-red-600 mx-auto mb-6" />
                <h4 className="font-bold mb-4 text-xl text-gray-800">Centrais Convencionais (CIC)</h4>
                <p className="text-gray-600 leading-relaxed">Sistemas tradicionais com tecnologia confiável e robusta</p>
              </div>
              <div className="p-8 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 transition-all duration-300 border border-red-200">
                <Calendar className="h-16 w-16 text-red-600 mx-auto mb-6" />
                <h4 className="font-bold mb-4 text-xl text-gray-800">Pressurização de Escadas</h4>
                <p className="text-gray-600 leading-relaxed">Sistemas especializados para situações de emergência</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Por que Escolher a <span className="text-red-600">Gomes Instalações</span>?
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Nossos diferenciais garantem a <strong>segurança e tranquilidade</strong> que você precisa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {differentials.map((differential, index) => {
                const IconComponent = differential.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-200">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold leading-relaxed">{differential.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Target Segments */}
            <div className="bg-gradient-to-r from-red-50 via-orange-50 to-red-50 p-10 rounded-2xl border border-red-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <Home className="h-8 w-8 text-red-600 mr-3" />
                🏢 Atendemos Diversos Segmentos
              </h3>
              <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
                O sistema de combate a incêndios é <strong>fundamental em locais de grande circulação de pessoas</strong>:
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {['🏢 Condomínios', '🏭 Empresas', '🛒 Supermercados', '🏭 Indústrias', '🏪 Comércios', '🎓 Colégios', '🏥 Clínicas', '🏥 Hospitais'].map((segment) => (
                  <Badge key={segment} className="bg-red-100 text-red-800 px-6 py-3 text-base font-semibold hover:bg-red-200 transition-colors">
                    {segment}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            🔥 Garanta a Segurança do Seu Empreendimento
          </h2>
          <p className="text-xl mb-10 max-w-4xl mx-auto leading-relaxed opacity-95 font-medium">
            As soluções de segurança contra incêndio da <strong>Gomes Instalações e Manutenções</strong> são decisivas 
            para qualquer empreendimento. Entre em contato para solicitar uma cotação e garantir a 
            segurança de todos.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 text-xl px-10 py-6 shadow-xl transform hover:scale-105 transition-all font-bold"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <Phone className="h-6 w-6 mr-3" />
            📞 Solicitar Cotação via WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/819e1741-bc81-4585-9f2e-532e06b7aaa0.png" 
                  alt="Gomes Instalações Logo" 
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold text-lg">Gomes Instalações</h3>
                  <p className="text-sm text-gray-400">e Manutenções</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                <strong>Especialistas em sistemas de combate a incêndio</strong> e manutenção predial com foco em segurança e qualidade.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">🔧 Nossos Serviços</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">✅ Manutenção Preventiva</li>
                <li className="hover:text-white transition-colors">🔧 Manutenção Corretiva</li>
                <li className="hover:text-white transition-colors">⚡ Instalação de Centrais</li>
                <li className="hover:text-white transition-colors">🔍 Inspeção de Sistemas</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">📞 Entre em Contato</h4>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-white border-gray-600 hover:bg-gray-800 hover:border-green-500 transition-all"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <Phone className="h-5 w-5 mr-3" />
                  WhatsApp: (11) 94747-1818
                </Button>
                <p className="text-gray-400 text-sm">
                  📍 Atendimento em toda Grande São Paulo
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 <strong>Gomes Instalações e Manutenções</strong>. Todos os direitos reservados. | Sistemas de Alarme de Incêndio São Paulo
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
