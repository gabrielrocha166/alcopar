import { CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';

export default function InstitutionalRole() {
  const roles = [
    {
      icon: Users,
      title: 'Representatividade',
      description: 'Defender os interesses coletivos das empresas associadas perante órgãos governamentais, entidades de classe e sociedade civil.',
    },
    {
      icon: CheckCircle,
      title: 'Regulamentação',
      description: 'Participar do processo de elaboração e implementação de políticas públicas que afetam o setor de bioenergia.',
    },
    {
      icon: TrendingUp,
      title: 'Desenvolvimento',
      description: 'Promover o crescimento econômico sustentável do setor, fomentando inovação tecnológica e boas práticas.',
    },
    {
      icon: Shield,
      title: 'Sustentabilidade',
      description: 'Garantir que a expansão do setor ocorra de forma ambientalmente responsável e socialmente justa.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Papel Institucional da <span className="text-green-600">ALCOPAR</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A ALCOPAR desempenha um papel fundamental na estrutura do setor de bioenergia do Paraná, atuando como elo entre seus associados, governo e sociedade. Nossa instituição trabalha continuamente para criar um ambiente favorável ao desenvolvimento sustentável da indústria.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Através de suas ações estratégicas, políticas e comerciais, a ALCOPAR contribui significativamente para a consolidação do Paraná como um dos principais polos de energia renovável do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="bg-gray-50 rounded-lg p-6 hover:bg-green-50 transition-colors">
                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-lg mr-4">
                    <role.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{role.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
