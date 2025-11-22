function Jobs() {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-11 lg:px-8">
        <div className=" mb-6 lg:mb-16">
          <h3 className="text-[var(--color-primary-500)] text-3xl md:text-4xl font-bold text-center mb-3">
            Jobs
          </h3>
          <div className="w-12 h-1 bg-[var(--color-primary-500)] mx-auto "></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center items-center ">
          <div className="rounded-xl overflow-hidden sm:w-3/4 w-full ">
            <img
              className="lg:h-[400px] object-cover"
              src="ourservices/work_abroad.jpg"
              alt="study abroad"
            />
          </div>
          <div className="text-lg text-justify">
            <p className="mb-2">
              Saira International Education and Visa Services has streamlined
              the steps involved in working abroad to make your journey
              smoother. Our process is aimed at making your profile more
              accessible, attractive and engaging. Our services begin with
              helping you create a resume that meets international standards .We
              then market your profile in the countries of your choice and work
              to get you interview calls. A dedicated Job Search consultant will
              work with you on your international career, guiding you through
              the process.
            </p>
            <p>
              In today’s competitive world, time and cost have become important
              aspects of recruitment for every organization. We can help you in
              saving these when it comes to the Job of the right people. We have
              contact with many companies which can offer job for you, and you
              would love to do that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jobs;
