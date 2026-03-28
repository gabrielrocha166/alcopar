import { Leaf, Droplets, Factory, TrendingUp, Globe, Award } from 'lucide-react';

export default function Sugar() {
  const sugarTypes = [
    {
      name: 'Açúcar Cristal',
      color: 'from-amber-500 to-amber-600',
      description: 'Cristais maiores e transparentes, de pureza elevada',
      uses: [
        'Consumo doméstico direto',
        'Indústria alimentícia',
        'Confeitaria e padarias',
        'Bebidas em geral'
      ],
      characteristics: 'Cristais de 2-3mm, cor branca brilhante, 99,7% de pureza'
    },
    {
      name: 'Açúcar Refinado',
      color: 'from-yellow-400 to-amber-500',
      description: 'Açúcar de máxima pureza obtido através de refino',
      uses: [
        'Produtos farmacêuticos',
        'Cosméticos premium',
        'Alimentos infantis',
        'Bebidas especializadas'
      ],
      characteristics: 'Cristais pequenos e uniformes, 99,9% de pureza, branco brilhante'
    },
    {
      name: 'Açúcar Líquido',
      color: 'from-orange-400 to-orange-600',
      description: 'Solução aquosa de sacarose, pronta para uso industrial',
      uses: [
        'Indústria de bebidas',
        'Processamento de alimentos',
        'Fermentação industrial',
        'Xaropes e calda'
      ],
      characteristics: '65-67% de sacarose em água, fácil manipulação, sem cristais'
    },
    {
      name: 'Açúcar VHP',
      color: 'from-red-600 to-amber-600',
      description: 'Very High Polarization - açúcar para refinarias internacionais',
      uses: [
        'Exportação para refinarias',
        'Mercado internacional',
        'Refinarias especializadas',
        'Produtos finais premium'
      ],
      characteristics: 'Polarização mínima de 99,8°, cor premium, padrão exportação'
    }
  ];

  const productionSteps = [
    {
      step: 1,
      title: 'Colheita da Cana-de-Açúcar',
      description: 'A cana-de-açúcar é colhida em seu ponto ótimo de maturação para máximo rendimento de sacarose.'
    },
    {
      step: 2,
      title: 'Moagem',
      description: 'A cana é prensada para extrair o caldo açucarado. Os subprodutos (bagaço) são utilizados para cogeração de energia.'
    },
    {
      step: 3,
      title: 'Clarificação',
      description: 'O caldo passa por processos de aquecimento e decantação para remover impurezas e sedimentos.'
    },
    {
      step: 4,
      title: 'Concentração',
      description: 'O caldo clarificado passa por evaporadores onde a água é removida até atingir a concentração ideal.'
    },
    {
      step: 5,
      title: 'Cristalização',
      description: 'A solução concentrada é resfriada em cristalizadores onde a sacarose solidifica em cristais.'
    },
    {
      step: 6,
      title: 'Separação e Secagem',
      description: 'Os cristais são separados do melaço em centrífugas e depois secos em secadores rotativos.'
    },
    {
      step: 7,
      title: 'Refino (quando aplicável)',
      description: 'Para açúcares refinados, o produto passa por processos adicionais de purificação.'
    },
    {
      step: 8,
      title: 'Embalagem',
      description: 'O açúcar final é embalado em diferentes tamanhos conforme demanda de mercado.'
    }
  ];

  const marketData = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Maior Produtor Mundial',
      value: '40%',
      description: 'O Brasil produz 40% do açúcar consumido mundialmente'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Exportações Globais',
      value: '25 Mt',
      description: 'Aproximadamente 25 milhões de toneladas exportadas anualmente'
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: 'Empregos Diretos',
      value: '200k+',
      description: 'Mais de 200 mil empregos gerados no setor sucroenergético'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Tecnologia de Ponta',
      value: '100%',
      description: 'Produção totalmente automatizada com controle de qualidade rigoroso'
    }
  ];

  return (
    <div className="bg-white">
      <div className="pt-24">
        <div className="relative bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Açúcar</h1>
            <p className="text-xl md:text-2xl text-yellow-100">
              Doçura que conecta Brasil ao mundo
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Importância Econômica
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                O açúcar é um dos produtos agrícolas mais importantes da economia brasileira. O Brasil é o maior produtor e exportador mundial, gerando bilhões em divisas para o país e sustentando milhões de empregos diretos e indiretos.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Além do mercado doméstico robusto, o açúcar brasileiro é exportado para mais de 180 países, consolidando-se como commodity estratégica. A cadeia produtiva abrange desde produtores de cana até distribuidoras, laboráveis tecnológicos e pesquisadores.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Produção Anual</p>
                  <p className="text-2xl font-bold text-amber-600">38 Mi</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Mercado Global</p>
                  <p className="text-2xl font-bold text-amber-600">40%</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Award className="h-32 w-32 text-amber-600 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">Produto Premium Global</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-8 mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Histórico do Açúcar no Brasil</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Período Colonial (1500-1822)</h3>
                <p className="text-gray-600 leading-relaxed">
                  O açúcar foi o primeiro produto de exportação do Brasil, plantado nas capitanias hereditárias, principalmente em Pernambuco e Bahia. As usinas coloniais (engenhos de cana) transformaram a colônia na maior produtora mundial de açúcar nos séculos XVI e XVII.
                </p>
              </div>
              <div className="border-l-4 border-yellow-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Período Imperial e Republicano (1822-1970)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Com a descoberta do ouro em Minas Gerais, o açúcar perdeu importância relativa. Porém, continuou sendo produzido em larga escala, especialmente no Nordeste. Neste período houve mecanização gradual dos engenhos.
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Era Moderna (1970-Atualmente)</h3>
                <p className="text-gray-600 leading-relaxed">
                  A indústria sucroenergética se modernizou radicalmente. O Sudeste, em especial São Paulo, tornou-se o principal polo produtor. Tecnologia, automação e eficiência transformaram o setor, consolidando o Brasil como maior produtor e exportador mundial.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Tipos de Açúcar</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {sugarTypes.map((sugar, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className={`bg-gradient-to-r ${sugar.color} text-white p-8`}>
                    <h3 className="text-2xl font-bold mb-2">{sugar.name}</h3>
                    <p className="mb-4 text-amber-100">{sugar.description}</p>
                    <p className="text-sm">{sugar.characteristics}</p>
                  </div>
                  <div className="bg-white p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Principais Aplicações:</h4>
                    <ul className="space-y-2">
                      {sugar.uses.map((use, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Processo de Produção</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {productionSteps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-amber-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Importância no Mercado</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketData.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200 hover:border-amber-300 transition-colors text-center">
                  <div className="text-amber-600 mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-3xl font-bold text-amber-600 mb-2">{item.value}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-yellow-50 rounded-lg p-8 border border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustentabilidade</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A produção de açúcar no Brasil segue rigorosos padrões ambientais. O bagaço da cana é reutilizado como biocombustível nas usinas, reduzindo a dependência de combustíveis fósseis e gerando energia limpa.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Produção carbono-negativa</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Reutilização de resíduos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Preservação de mata atlântica</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inovação Tecnológica</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                As usinas sucroenergéticas brasileiras utilizam tecnologia de ponta em automação, controle de qualidade e otimização de processos. Investimentos contínuos em pesquisa garantem melhor rendimento e produtos de qualidade superior.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Factory className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Automação industrial avançada</span>
                </li>
                <li className="flex items-start gap-2">
                  <Factory className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Monitoramento em tempo real</span>
                </li>
                <li className="flex items-start gap-2">
                  <Factory className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Processos certificados internacionalmente</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Açúcar Brasileiro: Qualidade Mundial</h2>
            <p className="text-yellow-100 mb-8 max-w-2xl mx-auto">
              Com séculos de tradição, tecnologia moderna e compromisso com a sustentabilidade, o açúcar brasileiro é sinônimo de qualidade, pureza e responsabilidade ambiental.
            </p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
