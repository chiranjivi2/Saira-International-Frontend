function Hero() {
  const destinations = [
    {
      name: "Australia",
      image: "home/Australia.webp",
    },
    {
      name: "Japan",
      image: "home/Japan.webp",
    },
    {
      name: "Malta",
      image: "home/Malta.webp",
    },
    {
      name: "South Korea",
      image: "home/SouthKorea.webp",
    },
  ];

  return (
    <section className="py-12 bg-(--color-secondary-500)">
      <div className="max-w-7xl px-8 mx-auto">
        <div className="grid lg:grid-cols-[30rem_1fr] justify-center justify-items-center items-center ">
          <div className="hidden h-80 lg:block sm:h-120 mx-auto">
            <img
              className="h-full object-cover"
              src="home/girl-sit-on-suitcase.webp"
              alt="girl carrying suitcase"
            />
          </div>

          <div className="sm:w-3/4 lg:hidden ">
            <img
              src="home/girl-with-suitcase-and-pp.webp"
              alt="girl holding passport"
            />
          </div>

          {/* text */}
          <div className="relative">
            <div className=" flex flex-col gap-12 justify-center z-100">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white  text-center mt-10 z-10 font-['Rubik']">
                Study and Work Abroad
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center z-10">
                {destinations.map((destination, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-4 items-center transform group hover:-translate-y-1 transition-transform duration-500"
                    >
                      <div className="h-55 w-full rounded-2xl overflow-hidden  border-2 border-white">
                        <img
                          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-500"
                          src={destination.image}
                          alt={destination.name}
                        />
                      </div>
                      <p className="bg-white px-5 rounded-3xl text-center font-semibold">
                        {destination.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <img
              className="absolute inset-0 opacity-30  "
              src="home/map.webp"
              alt="world map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
