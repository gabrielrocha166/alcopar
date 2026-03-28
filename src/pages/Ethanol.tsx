import { Leaf, Droplet, TrendingUp, Globe, Zap, Target } from 'lucide-react';

export default function Ethanol() {
  const proalcoolTimeline = [
    {
      year: '1975',
      title: 'Criação do Proálcool',
      description: 'Programa Nacional do Álcool é criado em resposta à crise do petróleo'
    },
    {
      year: '1979',
      title: 'Primeira Usina',
      description: 'Início da produção em larga escala de etanol combustível'
    },
    {
      year: '2003',
      title: 'Veículos Flex Fuel',
      description: 'Lançamento dos primeiros carros com motor flex fuel no Brasil'
    },
    {
      year: '2024',
      title: 'Era Moderna',
      description: 'Consolidação como maior produtor mundial de bioetanol'
    }
  ];

  const technicalSpecs = [
    {
      name: 'Etanol Anidro',
      percentage: '99.8%',
      description: 'Álcool muito puro, praticamente sem água',
      uses: ['Mistura com gasolina', 'Combustível E27', 'Uso industrial'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Etanol Hidratado',
      percentage: '92-96%',
      description: 'Contém aproximadamente 4-8% de água',
      uses: ['Combustível E100', 'Veículos flex fuel', 'Uso direto'],
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  const carEvolution = [
    {
      era: 'Carros Álcool',
      period: '1979-1990',
      description: 'Primeiros veículos movidos 100% a etanol hidratado',
      specs: ['Motor 1.6L', 'Potência limitada', 'Partida a frio difícil']
    },
    {
      era: 'Transição',
      period: '1990-2003',
      description: 'Redução de produção de carros álcool',
      specs: ['Gasolina em alta', 'Poucos modelos disponíveis', 'Preços elevados']
    },
    {
      era: 'Flex Fuel',
      period: '2003-Atualmente',
      description: 'Veículos que usam qualquer mistura de etanol e gasolina',
      specs: ['Flexibilidade total', 'Melhor desempenho', 'Economia de combustível']
    }
  ];

  const sustainabilityBenefits = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Redução de CO2',
      description: 'Etanol reduz emissões de carbono em até 90% comparado à gasolina'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Recurso Renovável',
      description: 'Produzido a partir da cana-de-açúcar, recurso anual renovável'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Biodegradável',
      description: 'Completamente biodegradável, seguro para o meio ambiente'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Economia Local',
      description: 'Gera empregos diretos e indiretos nas comunidades rurais'
    }
  ];

  return (
    <div className="bg-white">
      <div className="pt-24">
        <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Álcool (Etanol)</h1>
            <p className="text-xl md:text-2xl text-green-100">
              Energia renovável e sustentável para o Brasil
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                O que é Etanol?
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                O etanol, também conhecido como álcool etílico, é um combustível líquido renovável produzido a partir da fermentação da cana-de-açúcar. No Brasil, é a principal fonte de bioenergia veicular e representa uma alternativa sustentável aos combustíveis fósseis.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Além de ser renovável, o etanol reduz significativamente as emissões de gases de efeito estufa e contribui para a independência energética do país. Com mais de 40 anos de tradição, o etanol brasileiro é reconhecido mundialmente como o mais eficiente e sustentável.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Redução de CO2</p>
                  <p className="text-2xl font-bold text-green-600">90%</p>
                </div>
                <div className="flex-1 bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Renovabilidade</p>
                  <p className="text-2xl font-bold text-green-600">100%</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-cyan-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Droplet className="h-32 w-32 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">Combustível Sustentável</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-cyan-50 rounded-lg p-8 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Histórico do Etanol no Brasil</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {proalcoolTimeline.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-green-600 font-bold text-lg mb-2">{item.year}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Programa Proálcool (1975)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contexto Histórico</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  O Programa Nacional do Álcool foi criado em 1975 em resposta à crise de petróleo que afetava a economia global. Com o país enfrentando altos preços de combustíveis importados, o governo brasileiro identificou na cana-de-açúcar uma solução energética viável e sustentável.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  O Proálcool foi pioneiro em demonstrar que um país poderia reduzir sua dependência do petróleo usando recursos renováveis, transformando-se em referência mundial para bioenergia.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h4 className="font-bold text-gray-900 mb-2">Impacto Econômico</h4>
                  <p className="text-sm text-gray-600">Criação de centenas de milhares de empregos no setor agrícola e industrial, movimentando bilhões em investimentos</p>
                </div>
                <div className="bg-cyan-50 rounded-lg p-6 border-l-4 border-cyan-600">
                  <h4 className="font-bold text-gray-900 mb-2">Desenvolvimento Tecnológico</h4>
                  <p className="text-sm text-gray-600">Investimentos em pesquisa e desenvolvimento de novas tecnologias de produção e aplicação de etanol</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-600">
                  <h4 className="font-bold text-gray-900 mb-2">Geração de Empregos</h4>
                  <p className="text-sm text-gray-600">Segurança energética e maior independência da importação de petróleo para o Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Especificações Técnicas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {technicalSpecs.map((spec, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className={`bg-gradient-to-r ${spec.color} text-white p-8`}>
                    <h3 className="text-2xl font-bold mb-2">{spec.name}</h3>
                    <div className="text-4xl font-bold mb-4">{spec.percentage}</div>
                    <p className="mb-4">{spec.description}</p>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Aplicações:</h4>
                    <ul className="space-y-2">
                      {spec.uses.map((use, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-600 mt-2" />
                          <span className="text-gray-600">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Evolução dos Veículos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {carEvolution.map((car, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-green-600 text-white p-6">
                    <h3 className="text-2xl font-bold">{car.era}</h3>
                    <p className="text-green-100">{car.period}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{car.description}</p>
                    <div className="space-y-2">
                      {car.specs.map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Target className="h-4 w-4 text-green-600" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Benefícios de Sustentabilidade</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {sustainabilityBenefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200 hover:border-green-300 transition-colors">
                  <div className="text-green-600 mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-600 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Junte-se ao Movimento de Bioenergia</h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              O etanol é mais que um combustível - é um compromisso com um futuro sustentável e energeticamente independente.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
