
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Check, Bell, Home, Search, Calendar, Shield, Wrench } from "lucide-react";

const Index = () => {
  const whatsappNumber = "5511947471818";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const services = [
    {
      title: "Verificação do Painel de Controle",
      description: "Inspeção completa das centrais e repetidoras do alarme de incêndio"
    },
    {
      title: "Teste de Baterias",
      description: "Verificação das condições e estado das cargas das baterias do sistema"
    },
    {
      title: "Teste Funcional de Detectores",
      description: "Testes por amostragem para garantir o funcionamento adequado"
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
      description: "Teste funcional no sistema de pressurização de escadas de emergência"
    },
    {
      title: "Sinais Sonoros",
      description: "Testes completos nos sinais sonoros de alarme"
    },
    {
      title: "Manutenção Geral",
      description: "Reaperto de conexões, limpeza geral e verificação de circuitos"
    }
  ];

  const differentials = [
    "Equipe altamente capacitada e treinada",
    "Conformidade com normas do CBMESP",
    "Adequação à NBR 17240",
    "Manutenção preventiva e corretiva",
    "Atendimento a diversos segmentos",
    "Soluções completas em segurança contra incêndio"
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
                alt="Gomes Instalações Logo" 
                className="h-12 w-auto object-contain filter brightness-150 contrast-110"
                style={{ imageRendering: 'crisp-edges' }}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Gomes Instalações</h1>
                <p className="text-sm text-gray-600">e Manutenções</p>
              </div>
            </div>
            <Button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-green-600 hover:bg-green-700"
            >
              <Phone className="h-4 w-4 mr-2" />
              Contato WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">
            Especialistas em Combate a Incêndio
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Segurança e <span className="text-red-600">Confiança</span> em Sistemas de Incêndio
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Prestamos serviços especializados em manutenção e instalação de centrais de alarme de incêndio, 
            com equipe altamente capacitada e em conformidade com todas as normas técnicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 border-red-600 text-red-600 hover:bg-red-50"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conhecer Serviços
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre a Gomes Instalações e Manutenções
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Somos uma empresa especializada no segmento de combate a incêndio, com uma equipe altamente 
              capacitada para realizar manutenção e instalações de centrais de alarme de incêndio. 
              Nossos especialistas realizam inspeções, testes e manutenções em sistemas de centrais de 
              Alarme de Incêndio, sempre em conformidade com as normas técnicas do Corpo de Bombeiros 
              Militar do Estado de São Paulo (CBMESP) e adequação à NBR 17240.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-8 w-8 text-red-600 mr-3" />
                Tipos de Manutenção
              </h3>
              
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-green-700 ml-3 text-xl">Manutenção Preventiva</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Constatar antecipadamente falhas ou ajustes necessários e providenciar a 
                    substituição de peças que possam apresentar problemas futuros.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-orange-700 ml-3 text-xl">Manutenção Corretiva</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Efetuada quando há uma análise completa do sistema, identificando a 
                    necessidade de substituição de equipamentos específicos.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Bell className="h-8 w-8 text-red-600 mr-3" />
                Importância da Manutenção
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  A manutenção é um serviço de caráter preventivo e/ou corretivo que requer profissionais 
                  especializados. Realizamos análise completa dos equipamentos de proteção contra incêndio 
                  para manter suas condições de operação ideais.
                </p>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="text-gray-700 font-medium">
                    <strong className="text-red-700">Nosso objetivo:</strong> Proporcionar confiança de que o sistema de Alarme de 
                    Incêndio estará apto a funcionar com plena segurança e desempenho adequados ao combate 
                    de princípios de incêndio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossos Serviços de Manutenção
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos inspeção periódica, preventiva e corretiva com diversos procedimentos 
              realizados por nossa equipe especializada e treinada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Check className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Itens Adicionais Especializados
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                <Bell className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-3 text-lg">Centrais Endereçáveis (CIE)</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Isoladores de laço, fontes auxiliares e módulos</p>
              </div>
              <div className="p-6 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                <Search className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-3 text-lg">Centrais Convencionais (CIC)</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Sistemas tradicionais com tecnologia confiável</p>
              </div>
              <div className="p-6 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                <Calendar className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-3 text-lg">Pressurização de Escadas</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Sistemas especializados para emergências</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que Escolher a Gomes Instalações?
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossos diferenciais garantem a segurança e tranquilidade que você precisa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {differentials.map((differential, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium leading-relaxed">{differential}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Home className="h-6 w-6 text-red-600 mr-3" />
                Atendemos Diversos Segmentos
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                O sistema de combate a incêndios é fundamental em locais de grande circulação de pessoas:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Condomínios', 'Empresas', 'Supermercados', 'Indústrias', 'Comércios', 'Colégios', 'Clínicas', 'Hospitais'].map((segment) => (
                  <Badge key={segment} variant="secondary" className="bg-red-100 text-red-800 px-3 py-1 text-sm font-medium">
                    {segment}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Garanta a Segurança do Seu Empreendimento
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            As soluções de segurança contra incêndio da Gomes Instalações e Manutenções são decisivas 
            para qualquer empreendimento. Entre em contato para solicitar uma cotação e garantir a 
            segurança de todos.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg"
            onClick={() => window.open(whatsappUrl, '_blank')}
          >
            <Phone className="h-5 w-5 mr-2" />
            Solicitar Cotação via WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/819e1741-bc81-4585-9f2e-532e06b7aaa0.png" 
                  alt="Gomes Instalações Logo" 
                  className="h-8 w-auto object-contain filter brightness-150 contrast-110"
                  style={{ imageRendering: 'crisp-edges' }}
                />
                <div>
                  <h3 className="font-bold">Gomes Instalações</h3>
                  <p className="text-sm text-gray-400">e Manutenções</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Especialistas em sistemas de combate a incêndio e manutenção predial.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Manutenção Preventiva</li>
                <li>Manutenção Corretiva</li>
                <li>Instalação de Centrais</li>
                <li>Inspeção de Sistemas</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start text-white border-gray-600 hover:bg-gray-800"
                  onClick={() => window.open(whatsappUrl, '_blank')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp: (11) 94747-1818
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Gomes Instalações e Manutenções. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
