import { Layers } from 'lucide-react';

export default function OrganizationalStructure() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Estrutura <span className="text-green-600">Organizacional</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organização clara e hierárquica para melhor funcionamento e efetividade.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div className="w-full max-w-xs">
            <div className="bg-green-600 text-white rounded-lg p-6 text-center shadow-lg">
              <Layers className="h-8 w-8 mx-auto mb-2" />
              <p className="font-bold text-lg">Assembleia Geral</p>
            </div>
          </div>

          <div className="w-full h-8 flex justify-center">
            <div className="w-1 bg-green-300"></div>
          </div>

          <div className="w-full max-w-xs">
            <div className="bg-green-500 text-white rounded-lg p-6 text-center shadow-lg">
              <p className="font-bold text-lg">Conselho de Administração</p>
            </div>
          </div>

          <div className="w-full h-8 flex justify-center">
            <div className="w-1 bg-green-300"></div>
          </div>

          <div className="w-full max-w-2xl">
            <div className="bg-green-400 text-white rounded-lg p-6 text-center shadow-lg mb-8">
              <p className="font-bold text-lg">Diretoria Executiva</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Diretoria de Mercado e Indicadores',
                'Diretoria Financeira',
                'Diretoria de Sustentabilidade',
                'Diretoria de Comunicação',
                'Assessoria Jurídica',
                'Assessoria Técnica',
                'Secretaria Executiva',
                'Recursos Humanos',
              ].map((dept) => (
                <div key={dept} className="bg-green-100 border-2 border-green-400 rounded-lg p-4 text-center">
                  <p className="text-sm font-semibold text-green-900">{dept}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-8 flex justify-center">
            <div className="w-1 bg-green-300"></div>
          </div>

          <div className="w-full max-w-2xl">
            <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-6 text-center">
              <p className="font-bold text-lg text-blue-900">Associados</p>
              <p className="text-sm text-blue-800 mt-2">28 empresas do setor de bioenergia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
