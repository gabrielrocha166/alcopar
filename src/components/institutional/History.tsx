export default function History() {
  const timelineEvents = [
    {
      year: '1994',
      title: 'Fundação da ALCOPAR',
      description: 'Associação constituída para representar e defender os interesses das empresas produtoras de etanol no Estado do Paraná.',
    },
    {
      year: '2000',
      title: 'Expansão do Setor',
      description: 'Com o crescimento do setor sucroenergético, a ALCOPAR expande sua atuação para outras áreas de bioenergia.',
    },
    {
      year: '2008',
      title: 'Inserção de Novos Segmentos',
      description: 'Integração de produtores de açúcar, biodiesel e cogeração de energia à associação.',
    },
    {
      year: '2015',
      title: 'Modernização e Sustentabilidade',
      description: 'Implementação de programas voltados ao desenvolvimento sustentável e inovação tecnológica.',
    },
    {
      year: '2020',
      title: 'Fortalecimento Institucional',
      description: 'Consolidação de parcerias estratégicas e aumento da representatividade no setor.',
    },
    {
      year: '2024',
      title: 'Presente e Futuro',
      description: 'ALCOPAR segue como protagonista na defesa do setor de bioenergia e desenvolvimento do Paraná.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossa <span className="text-green-600">História</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Três décadas dedicadas ao desenvolvimento sustentável do setor de bioenergia no Paraná.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2"></div>
                <div className="w-1/2 px-8">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white"></div>
                  <div className={`bg-gray-50 rounded-xl p-6 ${index % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}>
                    <p className="text-3xl font-bold text-green-600 mb-2">{event.year}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
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
