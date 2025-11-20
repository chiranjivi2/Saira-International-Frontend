function Universities() {
  return (
    <section className="py-14 bg-slate-100">
      <div className="max-w-[1200px] px-8 mx-auto ">
        <h2 className="text-[var(--color-primary-500)] font-medium text-4xl text-center mb-8">
          Famous Universities of Europe
        </h2>
        <div className=" grid grid-cols-4 gap-6 gap-x-8 items-center justify-center">
          <div className="p-2 shadow-md h-30">
            <img
              className="h-full object-contain"
              src="L_Universita_ta_Malta.png"
            />
          </div>
          <div>
            <img src="MCAST.png" />
          </div>
          <div className="p-2 shadow-md h-30 w-full ">
            <img
              className="h-full justify-self-center "
              src="Riga_Technical_University.png"
            />
          </div>
          <div>
            <img src="Liepaja_University.png" />
          </div>
          <div>
            <img src="Universidad-europea-logo.png" />
          </div>
          <div>
            <img src="Avicenna-International-College-Logo2.png" />
          </div>
          <div>
            <img src="sapienza-big.png" />
          </div>
          <div className="h-30">
            <img className="h-full" src="a.png" />
          </div>
          <div>
            <img src="It_Universities_of_Copahegan.png" />
          </div>
          <div>
            <img src="Niels_Brock.png" />
          </div>
          <div>
            <img src="SAMK_University.png" />
          </div>
          <div>
            <img src="Berlin_School_of_Business_and_Innovation2.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Universities;
