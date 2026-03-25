import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
  const events = [
    {
      date: '25',
      month: 'ABR',
      title: 'Seminário de Bioenergia Sustentável',
      location: 'Curitiba - PR',
      time: '09:00 - 18:00',
      description: 'Discussões sobre inovações e tendências do setor de bioenergia no Brasil.',
    },
    {
      date: '10',
      month: 'MAI',
      title: 'Workshop Técnico: Cogeração de Energia',
      location: 'Maringá - PR',
      time: '14:00 - 17:00',
      description: 'Apresentação de novas tecnologias para otimização da cogeração nas usinas.',
    },
    {
      date: '18',
      month: 'JUN',
      title: 'Assembleia Geral ALCOPAR 2024',
      location: 'Londrina - PR',
      time: '10:00 - 16:00',
      description: 'Reunião anual com todos os associados para discussão de estratégias e resultados.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="eventos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Próximos <span className="text-green-600">Eventos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participe dos eventos e mantenha-se atualizado sobre as atividades da ALCOPAR.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-500 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="bg-green-600 text-white p-6 text-center">
                <p className="text-5xl font-bold mb-1">{event.date}</p>
                <p className="text-lg font-semibold uppercase tracking-wider">{event.month}</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {event.title}
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-green-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3 text-green-600" />
                    <span>{event.time}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all font-semibold">
                  Inscrever-se
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
