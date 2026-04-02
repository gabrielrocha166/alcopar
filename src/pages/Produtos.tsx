import { ArrowRight, Leaf, Droplet, Wheat, Cog } from 'lucide-react';

interface ProductCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  page: string;
  image: string;
}

const products: ProductCard[] = [
  {
    id: 'sugarcane',
    title: 'Cana-de-Açúcar',
    description: 'Conheça a matéria-prima fundamental para a bioenergia brasileira. Origem, cultivo, colheita e importância econômica do setor.',
    icon: <Wheat className="h-12 w-12" />,
    color: 'from-green-500 to-emerald-600',
    page: 'sugarcane',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'ethanol',
    title: 'Álcool (Etanol)',
    description: 'Combustível renovável que reduz emissões de carbono. Descubra os processos de produção e aplicações do etanol de cana.',
    icon: <Droplet className="h-12 w-12" />,
    color: 'from-blue-500 to-cyan-600',
    page: 'ethanol',
    image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'sugar',
    title: 'Açúcar',
    description: 'Produto de valor global amplamente consumido. Explore tipos, qualidade e mercado internacional do açúcar brasileiro.',
    icon: <Leaf className="h-12 w-12" />,
    color: 'from-amber-500 to-orange-600',
    page: 'sugar',
    image: 'https://images.pexels.com/photos/3738097/pexels-photo-3738097.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'subprodutos',
    title: 'Subprodutos',
    description: 'Aproveite máximo da cana-de-açúcar. Conheça energia, fertilizantes, insumos químicos e outras soluções sustentáveis.',
    icon: <Cog className="h-12 w-12" />,
    color: 'from-purple-500 to-pink-600',
    page: 'subprodutos',
    image: 'https://images.pexels.com/photos/3932603/pexels-photo-3932603.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

interface ProdutosProps {
  onNavigate?: (page: string) => void;
}

export default function Produtos({ onNavigate }: ProdutosProps) {
  const handleProductClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6">Produtos da Bioenergia</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            O setor sucroenergético brasileiro oferece soluções integradas e sustentáveis. Da cana-de-açúcar até seus derivados, cada produto contribui para uma economia circular que beneficia o meio ambiente e a sociedade.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col bg-white border border-gray-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`bg-gradient-to-br ${product.color} p-3 rounded-xl text-white`}>
                      {product.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>

                  <button
                    onClick={() => handleProductClick(product.page)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold group/btn"
                  >
                    Saiba Mais
                    <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">600M+</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Toneladas/Ano</h3>
              <p className="text-gray-700">De cana-de-açúcar processada anualmente no Brasil</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">40%</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Produção Global</h3>
              <p className="text-gray-700">Brasil lidera a produção mundial de bioenergia</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">1M+</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Empregos</h3>
              <p className="text-gray-700">Gerados diretamente pelo setor sucroenergético</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Economia Circular</h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-12 border border-green-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              O setor sucroenergético brasileiro é exemplo de economia circular. Da mesma planta, extraem-se múltiplos produtos de alto valor agregado, minimizando desperdícios e maximizando sustentabilidade.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 border border-green-200 text-center">
                <p className="font-bold text-green-700">Açúcar</p>
                <p className="text-sm text-gray-600">Alimento global</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200 text-center">
                <p className="font-bold text-blue-700">Etanol</p>
                <p className="text-sm text-gray-600">Energia limpa</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-amber-200 text-center">
                <p className="font-bold text-amber-700">Energia</p>
                <p className="text-sm text-gray-600">Cogeração</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-200 text-center">
                <p className="font-bold text-purple-700">Insumos</p>
                <p className="text-sm text-gray-600">Químicos, fertilizantes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Produtos Sustentáveis para o Mundo</h2>
          <p className="text-lg opacity-90">
            Cada produto da bioenergia contribui para um futuro mais sustentável e uma economia circular que beneficia o planeta e as gerações futuras.
          </p>
        </div>
      </section>
    </div>
  );
}
