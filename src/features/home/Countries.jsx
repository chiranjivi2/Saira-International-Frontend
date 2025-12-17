function Countries() {
  const Countries = [
    { name: "Italy", src: "flag/Italy.png" },
    { name: "Malta", src: "flag/Malta.png" },
    { name: "China", src: "flag/China.webp" },
    { name: "Lithuania", src: "flag/Lithuania.png" },
    { name: "Latvia", src: "flag/Latvia.png" },
    { name: "Greece", src: "flag/Greece.png" },
    { name: "Spain", src: "flag/Spain.png" },
    { name: "Germany", src: "flag/Germany.png" },
    { name: "France", src: "flag/France.png" },
    { name: "Hungary", src: "flag/Hungary.png" },
    { name: "Finland", src: "flag/Finland.png" },
    { name: "Denmark", src: "flag/Denmark.png" },
    { name: "Romania", src: "flag/Romania.png" },
    { name: "Albania", src: "flag/Albania.png" },
    { name: "Armenia", src: "flag/Armenia.png" },
    { name: "Azerbaijan", src: "flag/Azerbaijan.png" },
    { name: "UAE", src: "flag/UAE.png" },
    { name: "Singapore", src: "flag/Singapore.png" },
    { name: "India", src: "flag/India.png" },
    { name: "USA", src: "flag/USA.png" },
    { name: "Canada", src: "flag/Canada.png" },
    { name: "UK", src: "flag/United_Kingdom.png" },
    { name: "Australia", src: "flag/Australia.png" },
    { name: "New Zealand", src: "flag/New_Zealand.png" },
  ];

  return (
    <section className="py-16 font-['Rubik']">
      <div className="max-w-[1200px] px-8 mx-auto">
        <h2 className="text-3xl md:text-4xl  text-[var(--color-primary-500)] text-center font-semibold  mb-10">
          Countries we represent
        </h2>
        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 pl-6">
          {Countries.map((country, i) => {
            return (
              <div
                className="flex gap-5 items-center hover:scale-105 transition-all duration-300"
                key={i}
              >
                {" "}
                <img
                  className="w-10"
                  src={country.src}
                  alt={`flag of ${country.name}`}
                />{" "}
                <p>{country.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Countries;
