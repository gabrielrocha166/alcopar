import { Handshake } from 'lucide-react';

export default function Partners() {
  const partners = [
    'Governo do Paraná',
    'FAEP',
    'FIEP',
    'UNICA',
    'ANP',
    'SENAR',
    'CNA',
    'MAPA',
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-green-600">Parceiros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos em conjunto com instituições governamentais e entidades de classe para fortalecer o setor.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner) => (
            <div
              key={partner}
              className="bg-white rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-lg transition-all cursor-pointer border border-gray-200"
            >
              <div className="bg-gray-100 p-3 rounded-full mb-4">
                <Handshake className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-center font-semibold text-gray-900 text-sm">{partner}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
