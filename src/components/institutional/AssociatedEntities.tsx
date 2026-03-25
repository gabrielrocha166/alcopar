import { Building2, Users, Leaf, TrendingUp } from 'lucide-react';

export default function AssociatedEntities() {
  const entities = [
    {
      icon: Building2,
      name: 'SIALPAR',
      fullName: 'Sindicato da Indústria da Alimentação do Estado do Paraná',
      description: 'Representa as indústrias do setor alimentício, trabalhando em conjunto com ALCOPAR para políticas de interesse comum.',
      color: 'bg-blue-600',
    },
    {
      icon: Users,
      name: 'SIAPAR',
      fullName: 'Sindicato da Indústria Agrícola do Estado do Paraná',
      description: 'Defende os interesses da agricultura paranaense, colaborando na representação dos produtores de bioenergia.',
      color: 'bg-green-600',
    },
    {
      icon: Leaf,
      name: 'SIBIOPAR',
      fullName: 'Sindicato da Indústria da Bioenergia do Estado do Paraná',
      description: 'Dedicada especificamente ao setor de bioenergia, atuando como braço especializado nas questões técnicas e operacionais.',
      color: 'bg-emerald-600',
    },
    {
      icon: TrendingUp,
      name: 'CONSECANA',
      fullName: 'Conselho dos Produtores de Cana-de-Açúcar do Brasil',
      description: 'Entidade que trabalha na padronização de indicadores e na defesa dos interesses dos produtores de cana em âmbito nacional.',
      color: 'bg-amber-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entidades <span className="text-green-600">Associadas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as principais instituições parceiras da ALCOPAR que trabalham juntas pelo desenvolvimento do setor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {entities.map((entity) => (
            <div
              key={entity.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className={`${entity.color} h-16 flex items-center justify-center`}>
                <entity.icon className="h-8 w-8 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{entity.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{entity.fullName}</p>
                <p className="text-gray-700 leading-relaxed">{entity.description}</p>
                <button className="mt-6 text-green-600 font-semibold hover:text-green-700 transition-colors inline-flex items-center">
                  Saiba mais →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
