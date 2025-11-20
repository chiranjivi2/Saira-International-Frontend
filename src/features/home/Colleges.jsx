function Colleges() {
  const universities = [
    { name: "University of Malta", src: "L_Universita_ta_Malta.png" },
    { name: "MCAST", src: "MCAST.png" },
    { name: "Riga Technical University", src: "Riga_Technical_University.png" },
    { name: "Liepaja University", src: "Liepaja_University.png" },
    { name: "Universidad Europea", src: "Universidad-europea-logo.png" },
    {
      name: "Avicenna International College",
      src: "Avicenna-International-College-Logo2.png",
    },
    { name: "Sapienza", src: "sapienza-big.png" },
    { name: "University", src: "a.png" },
    {
      name: "IT University of Copenhagen",
      src: "It_Universities_of_Copahegan.png",
    },
    { name: "Niels Brock", src: "Niels_Brock.png" },
    { name: "SAMK University", src: "SAMK_University.png" },
    {
      name: "Berlin School of Business",
      src: "Berlin_School_of_Business_and_Innovation2.png",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
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
              <img
                className="h-20 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                src={university.src}
                alt={university.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Colleges;
