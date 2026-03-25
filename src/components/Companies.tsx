import { Building } from 'lucide-react';

export default function Companies() {
  const companies = [
    'Biopar',
    'Cocamar',
    'Coamo',
    'Nova Produtiva',
    'Usina São Luiz',
    'Usina Alto Alegre',
    'Usina Santa Terezinha',
    'Usina Nova América',
    'Usina São José',
    'Bioenergia Aroeira',
    'Usina Cofco',
    'Usina Ivaí',
  ];

  return (
    <section className="py-20 bg-white" id="associados">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empresas <span className="text-green-600">Associadas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as principais empresas que fazem parte da ALCOPAR e impulsionam o setor de bioenergia no Paraná.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {companies.map((company) => (
            <div
              key={company}
              className="bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-green-200"
            >
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-center font-semibold text-gray-900">{company}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold">
            Ver todas as empresas
          </button>
        </div>
      </div>
    </section>
  );
}
