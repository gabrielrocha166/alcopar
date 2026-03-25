import { FileText, Download, Scale, BookOpen, FileCheck, Calculator } from 'lucide-react';

export default function Consecana() {
  const regulations = [
    {
      title: 'Manual de Instruções Consecana-PR',
      description: 'Documento completo com todas as diretrizes e procedimentos para cálculo e aplicação do sistema Consecana.',
      date: '2024',
      type: 'Manual',
    },
    {
      title: 'Normas Técnicas de Amostragem',
      description: 'Procedimentos padronizados para coleta e análise de amostras de cana-de-açúcar.',
      date: '2023',
      type: 'Norma Técnica',
    },
    {
      title: 'Regulamento de Arbitragem',
      description: 'Regras e procedimentos para resolução de conflitos relacionados ao sistema Consecana.',
      date: '2023',
      type: 'Regulamento',
    },
    {
      title: 'Diretrizes de Qualidade da Cana',
      description: 'Parâmetros e critérios para avaliação da qualidade da matéria-prima.',
      date: '2024',
      type: 'Diretriz',
    },
  ];

  const resolutions = [
    {
      number: '001/2024',
      title: 'Atualização dos Índices de Conversão ATR',
      date: '15/03/2024',
      summary: 'Estabelece novos índices de conversão ATR para a safra 2024/2025, considerando as variações de mercado e custos operacionais.',
    },
    {
      number: '002/2024',
      title: 'Procedimentos de Análise Laboratorial',
      date: '10/02/2024',
      summary: 'Define novos protocolos para análise laboratorial da qualidade da cana-de-açúcar e validação de resultados.',
    },
    {
      number: '003/2023',
      title: 'Critérios de Descontos por Impurezas',
      date: '20/12/2023',
      summary: 'Atualiza os critérios e percentuais de desconto aplicáveis em casos de impurezas vegetais e minerais.',
    },
    {
      number: '004/2023',
      title: 'Sistema de Pagamento por Qualidade',
      date: '05/11/2023',
      summary: 'Implementa bonificações para cana de alta qualidade e estabelece penalidades para matéria-prima fora dos padrões.',
    },
  ];

  const documents = [
    {
      title: 'Tabela ATR 2024/2025',
      description: 'Tabela completa com valores de ATR atualizados para a safra vigente.',
      size: '2.4 MB',
      type: 'PDF',
      icon: Calculator,
    },
    {
      title: 'Manual do Produtor',
      description: 'Guia prático para produtores rurais sobre o sistema Consecana.',
      size: '5.1 MB',
      type: 'PDF',
      icon: BookOpen,
    },
    {
      title: 'Metodologia de Cálculo',
      description: 'Documento técnico explicando a metodologia de cálculo do preço da cana.',
      size: '3.8 MB',
      type: 'PDF',
      icon: Scale,
    },
    {
      title: 'Relatório Anual 2023',
      description: 'Relatório com estatísticas e análises do setor sucroenergético no Paraná.',
      size: '8.2 MB',
      type: 'PDF',
      icon: FileText,
    },
    {
      title: 'Formulário de Análise',
      description: 'Modelo de formulário para registro de análises laboratoriais.',
      size: '1.2 MB',
      type: 'DOCX',
      icon: FileCheck,
    },
    {
      title: 'Planilha de Cálculo ATR',
      description: 'Planilha em Excel para cálculo automático de valores baseados em ATR.',
      size: '890 KB',
      type: 'XLSX',
      icon: Calculator,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/6044263/pexels-photo-6044263.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Consecana
          </h1>
          <p className="text-xl text-gray-200">
            Conselho dos Produtores de Cana-de-Açúcar, Açúcar e Álcool do Estado do Paraná
          </p>
        </div>
      </section>

      {/* About Consecana Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                O que é o <span className="text-green-600">Consecana</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                O Consecana é um sistema de pagamento de cana-de-açúcar baseado na qualidade da matéria-prima, medida pelo seu teor de Açúcar Total Recuperável (ATR). Criado para estabelecer relações justas e transparentes entre produtores de cana e usinas, o sistema garante que o pagamento seja proporcional à qualidade entregue.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fundado em 1999, o Consecana-PR representa um marco na relação comercial do setor sucroenergético paranaense, promovendo equilíbrio, transparência e desenvolvimento sustentável para toda a cadeia produtiva.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                O sistema considera não apenas a quantidade de açúcar presente na cana, mas também os preços de mercado dos produtos finais (etanol, açúcar e energia), estabelecendo uma metodologia técnica e imparcial para a precificação.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-6">
                  <p className="text-3xl font-bold text-green-600 mb-2">1999</p>
                  <p className="text-gray-700 font-semibold">Ano de Fundação</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <p className="text-3xl font-bold text-green-600 mb-2">100%</p>
                  <p className="text-gray-700 font-semibold">Usinas Participantes</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6044265/pexels-photo-6044265.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Análise de cana-de-açúcar"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                <p className="text-sm font-semibold mb-1">Sistema Justo</p>
                <p className="text-xs">Pagamento por Qualidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATR Price System Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sistema de Preço <span className="text-green-600">ATR</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda como funciona o cálculo do preço da cana baseado no Açúcar Total Recuperável.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-lg mr-4">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">O que é ATR?</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ATR (Açúcar Total Recuperável) é a quantidade de açúcares (sacarose, glicose e frutose) contidos na cana-de-açúcar que pode ser recuperada no processo industrial para produção de açúcar e etanol.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Medido em quilogramas por tonelada de cana (kg/t), o ATR é determinado através de análises laboratoriais que avaliam a qualidade da matéria-prima entregue pelo produtor.
              </p>
              <div className="bg-green-50 rounded-lg p-6">
                <p className="text-green-900 font-semibold mb-3">Componentes do ATR:</p>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    <span>Sacarose (principal componente)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    <span>Glicose (açúcar redutor)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3">•</span>
                    <span>Frutose (açúcar redutor)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Como é Calculado?</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                O preço da tonelada de cana é calculado multiplicando o valor do quilograma de ATR pela quantidade de ATR por tonelada de cana entregue. O valor do kg de ATR é definido com base nos preços de mercado dos produtos finais.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <p className="text-blue-900 font-semibold mb-3">Fórmula Base:</p>
                <div className="bg-white rounded p-4 font-mono text-sm text-blue-900">
                  Preço/ton = Valor ATR × kg ATR/ton
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                O valor do ATR considera:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">→</span>
                  <span>Preço do açúcar no mercado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">→</span>
                  <span>Preço do etanol (anidro e hidratado)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">→</span>
                  <span>Valor da energia cogerada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">→</span>
                  <span>Mix de produção da usina</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">Processo de Precificação</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">1</span>
                </div>
                <h4 className="font-bold mb-2">Coleta de Amostras</h4>
                <p className="text-sm text-green-100">Amostragem representativa da carga de cana</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">2</span>
                </div>
                <h4 className="font-bold mb-2">Análise Laboratorial</h4>
                <p className="text-sm text-green-100">Determinação dos teores de açúcares</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">3</span>
                </div>
                <h4 className="font-bold mb-2">Cálculo do ATR</h4>
                <p className="text-sm text-green-100">Aplicação da fórmula técnica</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">4</span>
                </div>
                <h4 className="font-bold mb-2">Pagamento</h4>
                <p className="text-sm text-green-100">Valor proporcional à qualidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Normas e <span className="text-green-600">Regulamentos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Documentos oficiais que estabelecem as diretrizes do sistema Consecana-PR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regulations.map((regulation) => (
              <div
                key={regulation.title}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-green-500 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {regulation.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{regulation.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{regulation.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Atualizado em {regulation.date}</span>
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors inline-flex items-center">
                    Ver documento
                    <Download className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resolutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Resoluções <span className="text-green-600">Recentes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Últimas decisões e atualizações do conselho Consecana-PR.
            </p>
          </div>

          <div className="space-y-6">
            {resolutions.map((resolution) => (
              <div
                key={resolution.number}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-blue-100 rounded-lg px-4 py-2 mr-4">
                      <p className="text-blue-900 font-bold">{resolution.number}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{resolution.title}</h3>
                      <p className="text-sm text-gray-500">{resolution.date}</p>
                    </div>
                  </div>
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors inline-flex items-center whitespace-nowrap">
                    Baixar PDF
                    <Download className="h-4 w-4 ml-2" />
                  </button>
                </div>
                <p className="text-gray-600 leading-relaxed">{resolution.summary}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold">
              Ver todas as resoluções
            </button>
          </div>
        </div>
      </section>

      {/* Technical Documents Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Documentos <span className="text-green-600">Técnicos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acesse materiais técnicos, manuais e planilhas para consulta e download.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc) => {
              const Icon = doc.icon;
              return (
                <div
                  key={doc.title}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-green-500 hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {doc.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{doc.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{doc.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500">{doc.size}</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all text-sm font-semibold inline-flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Dúvidas sobre o Sistema Consecana?
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Nossa equipe técnica está pronta para esclarecer todas as suas questões sobre cálculos, metodologia e aplicação do sistema.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Entre em Contato
            </button>
            <button className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors">
              Acessar Área do Associado
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
