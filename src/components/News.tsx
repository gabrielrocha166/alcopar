import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
  const news = [
    {
      image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Paraná bate recorde de produção de etanol em 2024',
      date: '15 de Março, 2024',
      excerpt: 'Estado alcança marco histórico com produção superior a 3 bilhões de litros de etanol, consolidando posição no cenário nacional.',
    },
    {
      image: 'https://images.pexels.com/photos/414659/pexels-photo-414659.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Nova tecnologia aumenta eficiência na cogeração de energia',
      date: '10 de Março, 2024',
      excerpt: 'Investimentos em modernização das usinas permitem maior aproveitamento do bagaço da cana para geração de energia elétrica.',
    },
    {
      image: 'https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'ALCOPAR firma parceria para expansão do biodiesel',
      date: '5 de Março, 2024',
      excerpt: 'Associação anuncia acordo estratégico para aumentar a produção de biodiesel e fortalecer a matriz energética sustentável.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="notícias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Últimas <span className="text-green-600">Notícias</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fique por dentro das principais novidades do setor de bioenergia no Paraná.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>
                <button className="text-green-600 font-semibold inline-flex items-center hover:text-green-700 transition-colors">
                  Ler mais
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold">
            Ver todas as notícias
          </button>
        </div>
      </div>
    </section>
  );
}
