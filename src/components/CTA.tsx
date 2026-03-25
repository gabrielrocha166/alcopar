import { Mail, Phone, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-green-600" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Entre em contato com a ALCOPAR
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Tem dúvidas sobre o setor de bioenergia? Quer se associar? Nossa equipe está pronta para atendê-lo.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-white mr-4 mt-1" />
                <div>
                  <p className="text-white font-semibold">Telefone</p>
                  <p className="text-green-100">(41) 3123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-white mr-4 mt-1" />
                <div>
                  <p className="text-white font-semibold">E-mail</p>
                  <p className="text-green-100">contato@alcopar.org.br</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-white mr-4 mt-1" />
                <div>
                  <p className="text-white font-semibold">Endereço</p>
                  <p className="text-green-100">
                    Rua das Indústrias, 1234 - Centro<br />
                    Curitiba - PR, 80010-000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua mensagem</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all font-semibold"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
