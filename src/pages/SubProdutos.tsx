import { Leaf, Zap, Droplet, Sprout, Shield } from 'lucide-react';

export default function SubProdutos() {
  const byproducts = [
    {
      name: 'Bagaço',
      description: 'Fibrous residue remaining after juice extraction from sugarcane stalks.',
      uses: ['Biomass energy generation', 'Cogeneration power', 'Biofuel production', 'Animal feed supplement'],
      icon: Zap,
      color: 'bg-amber-50',
      textColor: 'text-amber-700'
    },
    {
      name: 'Vinhaça',
      description: 'Liquid byproduct generated during ethanol fermentation and distillation.',
      uses: ['Organic fertilizer', 'Soil nutrient replenishment', 'Irrigation water', 'Biogas generation'],
      icon: Droplet,
      color: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      name: 'Torta de Filtro',
      description: 'Filter cake residue from juice clarification containing suspended solids.',
      uses: ['Agricultural fertilizer', 'Soil improvement', 'Compost ingredient', 'Mulch material'],
      icon: Leaf,
      color: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      name: 'Levedura',
      description: 'Microorganism utilized in ethanol fermentation, recovered after production.',
      uses: ['Animal feed additive', 'Nutritional supplement (protein source)', 'Pharmaceutical ingredient', 'Industrial enzyme production'],
      icon: Sprout,
      color: 'bg-emerald-50',
      textColor: 'text-emerald-700'
    }
  ];

  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">Subprodutos da Cana-de-Açúcar</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            A cana-de-açúcar é uma das culturas mais versáteis do mundo. Cada parte da planta é aproveitada, gerando subprodutos valiosos que impulsionam a economia circular e a sustentabilidade.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plena Utilização da Cana</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nenhuma parte da cana-de-açúcar é desperdiçada. Do colmo às folhas, tudo é transformado em produtos de alto valor agregado. Esse aproveitamento integral gera benefícios econômicos significativos e reduz o impacto ambiental, criando uma cadeia produtiva sustentável e eficiente que beneficia agricultores, indústrias e o meio ambiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {byproducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={product.name}
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className={`${product.color} p-8`}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`${product.textColor} bg-white rounded-lg p-3`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                      {product.description}
                    </p>
                  </div>

                  <div className="p-8 bg-white">
                    <h4 className="font-semibold text-gray-900 mb-4">Principais Aplicações:</h4>
                    <ul className="space-y-3">
                      {product.uses.map((use, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`${product.textColor} mt-1 flex-shrink-0`}>
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Economia Circular</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-green-100">
              <h3 className="text-xl font-bold text-green-700 mb-4">Redução de Resíduos</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Transformação completa de subprodutos em recursos valiosos, eliminando desperdícios e maximizando a eficiência da cadeia produtiva.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-700 mb-4">Agregação de Valor</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Cada subproduto gera renda adicional para produtores e indústrias, aumentando a viabilidade econômica do setor sucroenergético.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-teal-100">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Sustentabilidade</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Produtos ecológicos que substituem alternativas sintéticas, reduzindo dependência de insumos não renováveis e impactos ambientais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Impacto Ambiental</h2>

          <div className="space-y-6">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Substituição de Combustíveis Fósseis
              </h3>
              <p className="text-gray-700">
                O bagaço alimenta a cogeração de energia, reduzindo a dependência de combustíveis fósseis e diminuindo emissões de carbono em até 90% em relação a fontes tradicionais.
              </p>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                Recuperação de Nutrientes do Solo
              </h3>
              <p className="text-gray-700">
                Vinhaça, torta de filtro e levedura retornam nutrientes essenciais ao solo, reduzindo necessidade de fertilizantes sintéticos e promovendo saúde do ecossistema.
              </p>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-teal-900 mb-2 flex items-center gap-2">
                <Droplet className="h-5 w-5" />
                Gestão Eficiente de Água
              </h3>
              <p className="text-gray-700">
                Subprodutos líquidos são reutilizados em irrigação e processos industriais, otimizando consumo hídrico e reduzindo contaminação de recursos naturais.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Biodiversidade e Solos Vivos
              </h3>
              <p className="text-gray-700">
                Incremento de matéria orgânica e microrganismos benéficos fortalece estrutura do solo, aumenta retenção de água e promove maior biodiversidade agrícola.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-green-900 mb-4">Resultado: Uma Indústria Verdadeiramente Circular</h3>
            <p className="text-gray-800 leading-relaxed">
              A integração completa de subprodutos na cadeia produtiva transforma a indústria da cana-de-açúcar em referência global de sustentabilidade. Menos desperdício, mais energia limpa, solos mais férteis e uma economia que cresce de forma responsável com o meio ambiente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
