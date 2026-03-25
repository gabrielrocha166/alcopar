import { Target, Eye, Heart } from 'lucide-react';

export default function MissionVisionValues() {
  const sections = [
    {
      icon: Target,
      title: 'Missão',
      color: 'bg-blue-500',
      content:
        'Representar, defender e promover os interesses das empresas produtoras de bioenergia do Estado do Paraná, buscando o desenvolvimento sustentável do setor e a consolidação de políticas públicas favoráveis.',
    },
    {
      icon: Eye,
      title: 'Visão',
      color: 'bg-green-600',
      content:
        'Ser reconhecida como a instituição mais representativa e influente do setor de bioenergia no Paraná, consolidando a região como polo estratégico de produção de energia renovável no Brasil.',
    },
    {
      icon: Heart,
      title: 'Valores',
      color: 'bg-amber-500',
      content:
        'Sustentabilidade, transparência, inovação, responsabilidade social e ambiental, integridade nas relações comerciais e compromisso com o desenvolvimento econômico e social do Paraná.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Missão, Visão e <span className="text-green-600">Valores</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Os pilares que guiam todas as ações e decisões da ALCOPAR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <div className={`${section.color} h-24 flex items-center justify-center`}>
                <section.icon className="h-12 w-12 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
