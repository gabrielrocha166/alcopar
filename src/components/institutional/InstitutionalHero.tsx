export default function InstitutionalHero() {
  return (
    <section className="relative h-96 flex items-center justify-center mt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/8474527/pexels-photo-8474527.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          A Associação
        </h1>
        <p className="text-xl text-gray-200">
          Conheça a história, missão e estrutura da ALCOPAR
        </p>
      </div>
    </section>
  );
}
