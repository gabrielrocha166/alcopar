import { Users } from 'lucide-react';

export default function BoardOfDirectors() {
  const directors = [
    {
      name: 'Carlos Alberto Silva',
      position: 'Presidente',
      company: 'Biopar S.A.',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Maria Fernanda Costa',
      position: 'Vice-Presidente',
      company: 'Cocamar Agroindustrial',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Roberto Mendes',
      position: 'Secretário Executivo',
      company: 'Coamo Agroindustrial',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Juliana Alves',
      position: 'Diretora Financeira',
      company: 'Nova Produtiva',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Eduardo Oliveira',
      position: 'Diretor de Mercado',
      company: 'Usina Santa Terezinha',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Fernanda Gomes',
      position: 'Diretora de Sustentabilidade',
      company: 'Bioenergia Aroeira',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Paulo Santos',
      position: 'Diretor de Operações',
      company: 'Usina São José',
      image: 'https://images.pexels.com/photos/1181573/pexels-photo-1181573.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Beatriz Martins',
      position: 'Diretora de Comunicação',
      company: 'Usina Alto Alegre',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conselho de <span className="text-green-600">Administração</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais experientes e comprometidos com o desenvolvimento do setor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director) => (
            <div
              key={director.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div
                className="h-48 bg-gray-300"
                style={{
                  backgroundImage: `url(${director.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{director.name}</h3>
                <p className="text-green-600 font-semibold mb-3">{director.position}</p>
                <p className="text-gray-600 text-sm">{director.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
