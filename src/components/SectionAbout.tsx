export default function SectionAbout() {
  return (
    <section className="w-full bg-[#BAD3BD] py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <img
              src="/images/car-1.png"
              alt="Person with blue electric car"
              width={600}
              height={400}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-green-900">
              POUR UNE MOBILITÉ PLUS RESPONSABLE
            </h2>
            <p className="text-green-900 mb-8">
              Rejoignez une communauté engagée pour une mobilité plus propre et plus responsable. Nos solutions sont pensées pour répondre à vos besoins tout en respectant l'environnement.
            </p>
            <button className="bg-green-900 text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition-colors">
              POURQUOI CHOISIR ?
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
