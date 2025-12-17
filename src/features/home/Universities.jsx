function Universities() {
  const universities = [
    {
      name: "University of Malta",
      src: "L_Universita_ta_Malta.png",
      website: "https://www.um.edu.mt/",
    },
    { name: "MCAST", src: "MCAST.png", website: "https://mcast.edu.mt/" },
    {
      name: "Riga Technical University",
      src: "Riga_Technical_University.png",
      website: "https://www.rtu.lv/en",
    },
    {
      name: "Liepaja University",
      src: "Liepaja_University.png",
      website: "https://www.rtu.lv/lv/liepaja",
    },
    {
      name: "Universidad Europea",
      src: "Universidad-europea-logo.png",
      website: "https://universidadeuropea.com/",
    },
    {
      name: "Avicenna International College",
      src: "Avicenna-International-College-Logo2.png",
      website: "https://avicenna.hu/",
    },
    {
      name: "Sapienza",
      src: "sapienza-big.png",
      website: "https://www.uniroma1.it/en/pagina-strutturale/home",
    },
    {
      name: "American International School of Buchrest",
      src: "a.png",
      website: "https://www.aisb.ro/",
    },
    {
      name: "IT University of Copenhagen",
      src: "It_Universities_of_Copahegan.png",
      website: "https://en.itu.dk/",
    },
    {
      name: "Niels Brock",
      src: "Niels_Brock.png",
      website: "https://www.nielsbrock.com/",
    },
    {
      name: "SAMK University",
      src: "SAMK_University.png",
      website: "https://www.samk.fi/en/",
    },
    {
      name: "Berlin School of Business",
      src: "bsbi.png",
      website: "https://www.berlinsbi.com",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 font-['Rubik']">
      <div className="max-w-[1200px] px-8 mx-auto">
        <h2 className="text-[var(--color-primary-500)] font-semibold text-3xl sm:text-4xl text-center mb-12">
          Famous Universities of Europe
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {universities.map((university, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:cursor-pointer flex items-center justify-center min-h-[140px]"
            >
              <a href={university.website} target="_blank">
                <img
                  className="h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  src={university.src}
                  alt={university.name}
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Universities;
