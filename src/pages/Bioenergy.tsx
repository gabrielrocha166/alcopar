import { Droplet, Package, Fuel, Zap, TrendingUp } from 'lucide-react';

export default function Bioenergy() {
  const sectors = [
    {
      icon: Droplet,
      title: 'Etanol',
      description: 'O etanol é um combustível renovável produzido a partir da cana-de-açúcar. O Brasil é líder mundial em produção de etanol, com o Paraná sendo um dos principais produtores. O etanol hidratado é usado diretamente como combustível, enquanto o etanol anidro é misturado à gasolina, reduzindo a dependência de combustíveis fósseis.',
      color: 'bg-blue-500',
      benefits: ['Redução de emissões de CO2', 'Matriz energética renovável', 'Geração de empregos', 'Desenvolvimento rural']
    },
    {
      icon: Package,
      title: 'Açúcar',
      description: 'A produção de açúcar é um dos pilares da indústria sucroalcooleira. O Paraná produz açúcar cristal, refinado e VHP (Very High Polarization) para o mercado interno e exportação. O açúcar é essencial para a alimentação, indústria química e farmacêutica.',
      color: 'bg-amber-500',
      benefits: ['Mercado global forte', 'Múltiplas aplicações', 'Exportação de alto valor', 'Segurança alimentar']
    },
    {
      icon: Fuel,
      title: 'Biodiesel',
      description: 'O biodiesel é um combustível renovável produzido a partir de óleos e gorduras. Quando misturado ao diesel mineral (B10, B12), reduz significativamente as emissões de gases poluentes. A produção de biodiesel contribui para a diversificação da matriz energética brasileira.',
      color: 'bg-yellow-500',
      benefits: ['Combustível limpo', 'Redução de poluição', 'Compatível com motores', 'Potencial de crescimento']
    },
    {
      icon: Zap,
      title: 'Cogeração de Energia',
      description: 'A cogeração utiliza o bagaço da cana-de-açúcar para gerar energia elétrica e térmica. As usinas produzem sua própria energia e vendem o excedente à rede elétrica, contribuindo para a sustentabilidade e eficiência energética do setor.',
      color: 'bg-green-500',
      benefits: ['Energia renovável', 'Autossuficiência das usinas', 'Venda de excedentes', 'Redução de custos']
    },
  ];

  const statistics = [
    { value: '8.5M', label: 'Toneladas de cana processadas por ano', icon: TrendingUp },
    { value: '2.3B', label: 'Litros de etanol produzidos', icon: Droplet },
    { value: '1.2M', label: 'Toneladas de açúcar', icon: Package },
    { value: '450MW', label: 'Capacidade de cogeração', icon: Zap },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Setor de <span className="text-green-600">Bioenergia</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                O Paraná é um dos principais produtores de bioenergia do Brasil, liderando a produção sustentável de etanol, açúcar, biodiesel e energia renovável. Conheça como a ALCOPAR representa e promove esse importante setor.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-green-100 rounded-lg px-6 py-3">
                  <p className="text-green-700 font-semibold">Líder em sustentabilidade</p>
                </div>
                <div className="bg-blue-100 rounded-lg px-6 py-3">
                  <p className="text-blue-700 font-semibold">Inovação contínua</p>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.pexels.com/photos/4253308/pexels-photo-4253308.jpeg"
                alt="Campos de cana-de-açúcar"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80">
              <img
                src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg"
                alt="Indústria de bioenergia"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">O Setor de Bioenergia</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A bioenergia é fundamental para a transição energética global. O Brasil, através do Paraná, demonstra como é possível produzir energia sustentável em larga escala, gerando empregos, renda e contribuindo para a redução de emissões de carbono.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                O Paraná possui uma estrutura produtiva robusta, com cerca de 15 usinas de processamento de cana-de-açúcar, gerando mais de 200 mil empregos diretos e indiretos. A região investe continuamente em tecnologia e sustentabilidade, consolidando-se como referência mundial.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Maior produtor de bioenergia da América do Sul</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Matriz energética 100% renovável no processamento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Exportação de produtos de alta qualidade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sugarcane Industry Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Cadeia de Suprimentos da Cana-de-Açúcar</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="text-xl font-bold text-green-600 mb-3">1. Produção Agrícola</h3>
                  <p className="text-gray-600">A cana-de-açúcar é cultivada em solos adequados e com técnicas avançadas de irrigação e manejo. O Paraná possui clima favorável e investimentos em pesquisa agrícola.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="text-xl font-bold text-green-600 mb-3">2. Colheita e Transporte</h3>
                  <p className="text-gray-600">A colheita mecanizada garante eficiência e sustentabilidade. O transporte da cana é feito de forma rápida para manter a qualidade até a usina.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="text-xl font-bold text-green-600 mb-3">3. Processamento Industrial</h3>
                  <p className="text-gray-600">Nas usinas, a cana é transformada em etanol, açúcar e bagaço. Tecnologia moderna garante máxima eficiência e mínimo desperdício.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow">
                  <h3 className="text-xl font-bold text-green-600 mb-3">4. Comercialização e Exportação</h3>
                  <p className="text-gray-600">Os produtos são distribuídos para o mercado interno e exportados para mais de 180 países, gerando divisas para o país.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.pexels.com/photos/4350049/pexels-photo-4350049.jpeg"
                alt="Cadeia de suprimentos"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ethanol Production Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80">
              <img
                src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg"
                alt="Produção de etanol"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Produção de Etanol</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                O etanol é o destaque da bioenergia brasileira. Produzido a partir do suco da cana-de-açúcar, é um combustível renovável que reduz significativamente as emissões de CO2 em relação à gasolina.
              </p>
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">Etanol Hidratado</h4>
                  <p className="text-gray-600">Usado diretamente como combustível em veículos flex-fuel, oferecendo maior eficiência energética e menor custo ao consumidor.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">Etanol Anidro</h4>
                  <p className="text-gray-600">Misturado à gasolina em proporções regulatórias, reduzindo a dependência de petróleo e melhorando a qualidade do ar nas cidades.</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-blue-900 font-semibold">Benefícios do Etanol:</p>
                <ul className="mt-3 space-y-2 text-blue-800">
                  <li>• Redução de 90% em emissões de CO2</li>
                  <li>• Combustível renovável e sustentável</li>
                  <li>• Tecnologia de motor flex-fuel consolidada</li>
                  <li>• Incentivo ao desenvolvimento rural</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sugar Production Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Produção de Açúcar</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                O açúcar é um dos principais produtos da indústria sucroalcooleira do Paraná. Com qualidade internacional, é exportado para mais de 150 países.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                O Paraná produz diversos tipos de açúcar: cristal (para mercado doméstico), refinado (consumo final) e VHP (para indústria de bebidas e alimentos).
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 rounded-lg p-4">
                  <p className="text-amber-600 font-bold text-lg">1.2M</p>
                  <p className="text-amber-700 text-sm">Toneladas/ano</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <p className="text-amber-600 font-bold text-lg">150+</p>
                  <p className="text-amber-700 text-sm">Países importadores</p>
                </div>
              </div>
              <div className="bg-amber-50 rounded-lg p-6">
                <p className="text-amber-900 font-semibold mb-3">Aplicações do Açúcar:</p>
                <ul className="space-y-2 text-amber-800 text-sm">
                  <li>✓ Indústria alimentícia e bebidas</li>
                  <li>✓ Indústria química e farmacêutica</li>
                  <li>✓ Bioquímica e bioplásticos</li>
                  <li>✓ Nutrição animal</li>
                </ul>
              </div>
            </div>
            <div className="relative h-80">
              <img
                src="https://images.pexels.com/photos/5966216/pexels-photo-5966216.jpeg"
                alt="Produção de açúcar"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biodiesel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80">
              <img
                src="https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg"
                alt="Biodiesel"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Biodiesel</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                O biodiesel é um combustível renovável produzido a partir de óleos e gorduras. No Brasil, o biodiesel é mandatoriamente misturado ao diesel mineral (B10, B12), reduzindo as emissões de poluentes.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A mistura de biodiesel no diesel reduz significativamente as emissões de enxofre e material particulado, melhorando a qualidade do ar nas cidades.
              </p>
              <div className="bg-yellow-50 rounded-lg p-6">
                <p className="text-yellow-900 font-semibold mb-4">Impactos Ambientais Positivos:</p>
                <ul className="space-y-3 text-yellow-800">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">→</span>
                    <span>Redução de 60% em emissões de CO2</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">→</span>
                    <span>Menor produção de gases tóxicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">→</span>
                    <span>Substituição do diesel fóssil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3">→</span>
                    <span>Compatível com motores diesel convencionais</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Cogeneration Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Cogeração de Energia</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A cogeração é um processo eficiente que utiliza o bagaço da cana-de-açúcar para gerar energia elétrica e térmica. As usinas produzem sua própria energia e vendem o excedente à rede elétrica nacional.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Esse processo contribui significativamente para a segurança energética do Brasil, fornecendo energia renovável e reduzindo a dependência de hidroelétricas em períodos de seca.
              </p>
              <div className="bg-green-50 rounded-lg p-6">
                <p className="text-green-900 font-semibold mb-4">Capacidade do Paraná:</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Energia cogerada:</span>
                    <span className="font-bold text-green-600">450 MW</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Cidades abastecidas:</span>
                    <span className="font-bold text-green-600">1.5M de pessoas</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Redução de CO2:</span>
                    <span className="font-bold text-green-600">2.1M ton/ano</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80">
              <img
                src="https://images.pexels.com/photos/2800008/pexels-photo-2800008.jpeg"
                alt="Cogeração de energia"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Números do Setor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-100 rounded-lg p-3">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-green-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Produtos e Aplicações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className={`${sector.color} h-24 flex items-center justify-center`}>
                    <Icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{sector.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{sector.description}</p>
                    <div className="border-t pt-4">
                      <p className="text-xs font-semibold text-gray-700 mb-3">BENEFÍCIOS:</p>
                      <ul className="space-y-2">
                        {sector.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conheça a ALCOPAR
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            A ALCOPAR representa e promove os interesses do setor de bioenergia do Paraná, buscando sustentabilidade, inovação e desenvolvimento econômico.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            Saiba Mais
          </button>
        </div>
      </section>
    </div>
  );
}
