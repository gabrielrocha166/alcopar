import { Building2, Zap, Users, TrendingUp } from 'lucide-react';

export default function Statistics() {
  const stats = [
    {
      icon: Building2,
      number: '28',
      label: 'Empresas Associadas',
      description: 'Representando o setor',
    },
    {
      icon: Zap,
      number: '15%',
      label: 'Produção Nacional',
      description: 'De etanol do Brasil',
    },
    {
      icon: Users,
      number: '45 mil',
      label: 'Empregos Gerados',
      description: 'Diretos e indiretos',
    },
    {
      icon: TrendingUp,
      number: 'R$ 12bi',
      label: 'Impacto Econômico',
      description: 'Anual no estado',
    },
  ];

  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Números do Setor
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            O setor de bioenergia do Paraná é uma força motriz para a economia sustentável do estado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-4 rounded-lg">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              <p className="text-5xl font-bold text-white mb-2">{stat.number}</p>
              <p className="text-xl font-semibold text-white mb-2">{stat.label}</p>
              <p className="text-green-100">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
