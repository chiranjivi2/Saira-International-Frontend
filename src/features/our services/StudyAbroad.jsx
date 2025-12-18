function StudyAbroad() {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-11 lg:px-8">
        <div className=" mb-8 lg:mb-16">
          <h3 className="text-[var(--color-primary-500)] text-3xl md:text-4xl font-bold text-center mb-3">
            Study Abroad
          </h3>
          <div className="w-20 h-1 bg-[var(--color-primary-500)] mx-auto "></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center items-center ">
          <div className=" relative group rounded-xl overflow-hidden sm:w-3/4 w-full">
            <img
              className=" object-cover transition-transform duration-700 group-hover:scale-110"
              src="ourservices/study_abroad.webp"
              alt="study abroad"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div>
            <p className="text-lg text-justify">
              Study in your Dream university with the help of our Experienced
              Counsellors. We can assist you fulfill your education requirement
              for your course abroad. Immigration policies are changing every
              year, and countries keep on competing to provide better education
              to students. No wonder it’s difficult to choose the right study
              abroad destination. To help you shortlist the perfect study abroad
              destination, we have compiled a list of the best countries to
              study abroad and work in 2025. Learn about their quality of
              education, cost of studying, immigration policies, and much more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudyAbroad;
