import { Sprout, Tractor, Zap, BarChart3, Leaf, Users, TrendingUp, Globe } from 'lucide-react';

export default function SugarcaneBrazil() {
  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6">Cana-de-Açúcar</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Uma das culturas mais importantes para a economia, energia e sustentabilidade do Brasil. Versátil, renovável e fundamental para o desenvolvimento socioeconômico do país.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">O Que é Cana-de-Açúcar?</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              A cana-de-açúcar (Saccharum officinarum) é uma planta tropical e subtropical pertencente à família Poaceae. É uma das culturas agrícolas mais versáteis do mundo, capaz de gerar múltiplos produtos de alto valor agregado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-green-900 mb-2">Características</h3>
                <p className="text-gray-700 text-sm">
                  Planta perene, semi-alógama, com colmos sólidos ou semi-sólidos ricos em sacarose, fibra e outros componentes valiosos.
                </p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                <h3 className="font-bold text-emerald-900 mb-2">Origem</h3>
                <p className="text-gray-700 text-sm">
                  Originária da Melanésia, propagou-se por toda a Ásia tropical. Chegou às Américas no século XVI, tornando-se essencial para o desenvolvimento econômico.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                <h3 className="font-bold text-teal-900 mb-2">Potencial</h3>
                <p className="text-gray-700 text-sm">
                  Da mesma planta extrai-se açúcar, etanol, energia, fertilizantes e insumos farmacêuticos, gerando economia circular completa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">História e Desenvolvimento no Brasil</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Século XVI - Início Colonial</h3>
              <p className="text-gray-700 leading-relaxed">
                A cana-de-açúcar foi trazida aos primeiros navios portugueses para o Brasil, tornando-se rapidamente o principal produto de exportação. As capitanias hereditárias foram concedidas com promessas de lucro através do açúcar, estruturando a economia colonial brasileira.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Século XVII-XVIII - Auge Açucareiro</h3>
              <p className="text-gray-700 leading-relaxed">
                O Brasil torna-se principal produtor mundial de açúcar. Região Nordeste, especialmente Pernambuco e Bahia, concentram a produção. Grandes engenhos de açúcar dominam a paisagem e economia do país.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Século XX - Modernização e Diversificação</h3>
              <p className="text-gray-700 leading-relaxed">
                Produção se expande para o interior de São Paulo. Surgem os primeiros destilarias de álcool. A indústria se mecaniza e profissionaliza, transformando a cana em commodity global.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Século XXI - Sustentabilidade e Inovação</h3>
              <p className="text-gray-700 leading-relaxed">
                Foco em biocombustíveis, bioenergia e economia circular. Brasil consolida posição como principal produtor e exportador de cana-de-açúcar, açúcar e etanol. Tecnologia e sustentabilidade guiam o setor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Produção: Cultivo e Colheita</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 rounded-lg p-3">
                  <Sprout className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cultivo</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Clima e Solo</h4>
                  <p className="text-gray-700 text-sm">
                    Prospera em climas tropical e subtropical. Requer solos profundos, bem drenados e férteis. Ciclo vegetativo varia de 18 a 24 meses conforme a variedade.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Plantio</h4>
                  <p className="text-gray-700 text-sm">
                    Realizado com mudas chamadas "rebolos" contendo 2-3 gemas. Espaçamento entre linhas varia de 1,4 a 1,5 metros. Principais épocas: setembro a novembro (cana de ano) ou dezembro a fevereiro (cana de 18 meses).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Tratos Culturais</h4>
                  <p className="text-gray-700 text-sm">
                    Controle de plantas daninhas, pragas e doenças. Adubação equilibrada. Irrigação em períodos de seca. Técnicas modernas incluem fertirrigação e manejo integrado.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-100 rounded-lg p-3">
                  <Tractor className="h-8 w-8 text-amber-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Colheita</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Época</h4>
                  <p className="text-gray-700 text-sm">
                    Realizada quando a cana atinge máxima acumulação de sacarose, geralmente entre maio e dezembro no centro-sul do Brasil.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Métodos</h4>
                  <p className="text-gray-700 text-sm">
                    Colheita mecanizada predomina. Colhedoras automotrizes cortam, desfibrificam e carregam a cana. Colheita manual persiste em algumas regiões com terrenos íngremes.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Produtividade</h4>
                  <p className="text-gray-700 text-sm">
                    Média brasileira: 70-80 toneladas por hectare. Variedades modernas e manejo adequado atingem 90+ t/ha. A cana-planta rende mais que socas (rebrotas).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Cadeia Produtiva: Do Campo à Indústria</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                  <Sprout className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Cultivo no Campo</h3>
                  <p className="text-gray-700">
                    Variedades melhoradas plantadas em larga escala. Manejo integrado de pragas, doenças e plantas daninhas. Aplicação de fertilizantes e manejo hídrico otimizado.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-amber-600">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 rounded-lg p-3 flex-shrink-0">
                  <Tractor className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Colheita e Transporte</h3>
                  <p className="text-gray-700">
                    Colheita mecanizada ou manual. Transporte rápido para a usina em caminhões preparados. Preservação da qualidade da cana para máximo rendimento industrial.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <Zap className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Processamento Industrial</h3>
                  <p className="text-gray-700">
                    Lavagem e preparo da cana. Extração do caldo por moagem. Clarificação e evaporação do caldo. Cristalização do açúcar ou fermentação para álcool. Processamento de subprodutos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-lg p-3 flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Produtos Finais e Distribuição</h3>
                  <p className="text-gray-700">
                    Açúcar: cristal, demerara, mascavo, etc. Etanol: combustível, industrial, bebidas. Energia: cogeração para usinas e grid. Subprodutos: fertilizantes, ração animal, químicos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Importância Econômica</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-blue-700" />
                <h3 className="text-2xl font-bold text-blue-900">Emprego</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                O setor sucroenergético gera mais de 1 milhão de empregos diretos no Brasil. Cada tonelada de cana processada gera renda para agricultores, operários, técnicos e profissionais de todas as qualificações.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Plantio, tratos culturais, colheita</li>
                <li>• Processamento industrial</li>
                <li>• Logística e distribuição</li>
                <li>• Pesquisa e desenvolvimento</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-8 w-8 text-green-700" />
                <h3 className="text-2xl font-bold text-green-900">Produção Global</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Brasil produz mais de 600 milhões de toneladas de cana-de-açúcar anualmente, representando ~40% da produção mundial. Lidera absoluto em eficiência e sustentabilidade.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 600+ milhões de toneladas/ano</li>
                <li>• ~8 milhões de hectares cultivados</li>
                <li>• Crescimento contínuo</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-amber-700" />
                <h3 className="text-2xl font-bold text-amber-900">Relevância do Paraná</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Paraná é o segundo maior produtor de cana-de-açúcar do Brasil, com produção concentrada no norte do estado. Importante polo sucroenergético com modernos complexos industriais.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 2º maior produtor nacional</li>
                <li>• Aproximadamente 70 milhões t/ano</li>
                <li>• Dezenas de usinas modernas</li>
              </ul>
            </div>

            <div className="bg-teal-50 rounded-xl p-8 border border-teal-200">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8 text-teal-700" />
                <h3 className="text-2xl font-bold text-teal-900">Exportações</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Brasil exporta açúcar e etanol para mais de 150 países. Setor responsável por bilhões em divisas internacionais. Fundamental para balanço comercial do país.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• ~150 países importam açúcar BR</li>
                <li>• Bilhões em divisas/ano</li>
                <li>• Preços internacionais</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">PIB do Setor Sucroenergético</h3>
            <p className="text-gray-700 leading-relaxed">
              O complexo sucroenergético contribui com mais de 2% do PIB brasileiro. Representa 10% do PIB agroindustrial. Setor estratégico para economia, energia e sustentabilidade do país.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Sustentabilidade</h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                  <Leaf className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Recurso Renovável</h3>
                  <p className="text-gray-700">
                    Cana-de-açúcar é cultura anual renovável. Diferente dos combustíveis fósseis, é replantada continuamente, regenerando-se naturalmente. Ciclo de regeneração curto garante sustentabilidade perpétua.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  <Zap className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bioenergia Limpa</h3>
                  <p className="text-gray-700">
                    Etanol de cana reduz emissões de CO2 em até 90% comparado a gasolina. Cogeração permite autossuficiência energética de usinas. Brasil evita emissões equivalentes a milhões de carros ao ano usando etanol de cana.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-emerald-600">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 rounded-lg p-3 flex-shrink-0">
                  <Sprout className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Economia Circular</h3>
                  <p className="text-gray-700">
                    Nenhuma parte da cana é desperdiçada. Bagaço gera energia, vinhaça fertiliza solos, torta de filtro e levedura agregam valor. Subprodutos substituem insumos sintéticos, reduzindo impacto ambiental.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-teal-600">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 rounded-lg p-3 flex-shrink-0">
                  <Globe className="h-6 w-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Conservação do Solo</h3>
                  <p className="text-gray-700">
                    Cultivo sustentável de cana preserva estrutura e fertilidade do solo. Resíduos orgânicos retornam ao terreno. Práticas modernas como colheita sem queima mantêm matéria orgânica no solo, promovendo biodiversidade e saúde agrícola.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-lg p-3 flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-purple-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inovação e Desenvolvimento</h3>
                  <p className="text-gray-700">
                    Pesquisa contínua aprimora variedades, reduz uso de insumos, otimiza produção. Biorrefinarias inovam em bioprodutos. Brasil investe em tecnologia para tornar setor cada vez mais sustentável e eficiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Cana-de-Açúcar: O Futuro Sustentável</h2>
          <p className="text-lg opacity-90">
            Uma cultura que alimenta a economia, gera energia limpa e cuida do planeta. A cana-de-açúcar brasileira é protagonista da transição energética global.
          </p>
        </div>
      </section>
    </div>
  );
}
