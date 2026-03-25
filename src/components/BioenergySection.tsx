import { Droplet, Package, Fuel, Zap } from 'lucide-react';

export default function BioenergySection() {
  const sectors = [
    {
      icon: Droplet,
      title: 'Etanol',
      description: 'Produção de etanol hidratado e anidro, combustível renovável e sustentável para a matriz energética brasileira.',
      color: 'bg-blue-500',
    },
    {
      icon: Package,
      title: 'Açúcar',
      description: 'Fabricação de açúcar cristal, refinado e VHP para o mercado interno e exportação.',
      color: 'bg-amber-500',
    },
    {
      icon: Fuel,
      title: 'Biodiesel',
      description: 'Produção de biodiesel a partir de fontes renováveis, contribuindo para a redução de emissões.',
      color: 'bg-yellow-500',
    },
    {
      icon: Zap,
      title: 'Cogeração de Energia',
      description: 'Geração de energia elétrica a partir do bagaço da cana, promovendo eficiência energética.',
      color: 'bg-green-500',
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="setor-de-bioenergia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Setor de <span className="text-green-600">Bioenergia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O Paraná é um dos principais produtores de bioenergia do Brasil, contribuindo significativamente para a sustentabilidade energética nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`${sector.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                <sector.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{sector.title}</h3>
              <p className="text-gray-600 leading-relaxed">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
