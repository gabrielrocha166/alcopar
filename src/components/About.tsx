import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="a-associação">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-green-600">ALCOPAR</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A ALCOPAR - Associação de Produtores de Bioenergia do Estado do Paraná - é uma entidade representativa das empresas do setor sucroenergético paranaense, atuando na defesa dos interesses do segmento e na promoção do desenvolvimento sustentável.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Fundada com o objetivo de fortalecer o setor de bioenergia, a ALCOPAR trabalha para consolidar o Paraná como um dos principais polos produtores de energia renovável do Brasil, contribuindo para a matriz energética nacional e para o desenvolvimento econômico regional.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Através de ações estratégicas, políticas e comerciais, a associação promove a integração entre seus associados e representa o setor junto aos órgãos governamentais, entidades de classe e sociedade civil.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 font-semibold inline-flex items-center space-x-2">
              <span>Saiba mais</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Indústria de bioenergia"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">30+</p>
              <p className="text-sm">Anos de história</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
