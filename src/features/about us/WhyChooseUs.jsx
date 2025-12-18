function WhyChooseUs() {
  return (
    <section className="py-14 bg-(--color-primary-50)">
      <div className="max-w-6xl mx-auto px-12">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-(--color-primary-500) text-2xl sm:text-3xl lg:text-4xl mb-3 font-bold ">
            Why Choose Us
          </h3>
          <div className="w-20 h-1 bg-(--color-primary-500) mx-auto rounded-full"></div>
        </div>

        {/* abroad education consultant  */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-14 justify-items-center items-center mx-auto mb-30">
          <div className="sm:w-3/4 h-60 rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
              src="aboutus/abroad_education.webp"
              alt="abroad education"
            />
          </div>
          <div className="">
            <h4 className="text-2xl text-(--color-primary-400) font-medium mb-4">
              Abroad Education Consultant
            </h4>
            <p className="leading-7 text-justify text-lg ">
              We specialize in the field of abroad Job & education and our
              expert overseas education consultants will guide you step-by-step
              to get admission in top institutes in countries like Italy, Malta,
              Greece, Latvia, Spain, Germany, France, Denmark, Sweden, Finland,
              Australia, US, Canada, UK, Singapore, Romania and some more
              countries.
            </p>
          </div>
        </div>

        {/* job search services  */}
        <div className="grid lg:grid-cols-2 justify-items-center gap-8 lg:gap-14 items-center max-w-6xl mb-30">
          <div className="">
            <h4 className="text-2xl text-[var(--color-primary-400)] font-medium mb-2 lg:mb-4">
              Job Search Services
            </h4>
            <p className="leading-7 text-justify text-lg ">
              Saira International Education and Visa Services helps individuals
              to get a job abroad while they are applying from their home
              country. The most convenient aspect of this service is that
              resumes of applicants are sent by Saira International Education
              and Visa Services to employers who are in search of suitable
              profiles. We ensure that these resumes reach hundreds of employers
              and placement agencies by saving the applicants’ lot of legwork.
              Simultaneously, our Job Search Services team markets their
              profiles consistently.
            </p>
          </div>
          <div className="sm:w-3/4 row-1 lg:col-2  rounded-2xl overflow-hidden">
            <img
              className="transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
              src="aboutus/job_search_services.webp"
              alt="professional searching for jobs"
            />
          </div>
        </div>

        {/* resume writing services */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14 justify-items-center items-center mx-auto mb-30">
          <div className="sm:w-3/4 rounded-2xl overflow-hidden">
            <img
              className="transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
              src="aboutus/resume_writing_services.webp"
              alt="resume writing"
            />
          </div>
          <div className="">
            <h4 className="text-2xl text-[var(--color-primary-400)] font-medium mb-2 lg:mb-4">
              Resume Writing Services
            </h4>
            <p className="leading-7 text-justify text-lg ">
              We have an in-house team of experienced resume writers who make a
              convincing case on the behalf of the job applicants by presenting
              riveting resumes. Our result oriented services ensure that the
              applicants’ chances of working abroad increase significantly. This
              is ensured by our resume marketing, job search and process
              consultancy services.
            </p>
          </div>
        </div>

        {/* migrate */}
        <div className="grid lg:grid-cols-2 justify-items-center gap-8 lg:gap-14 items-center max-w-6xl mb-30">
          <div className="">
            <h4 className="text-2xl text-[var(--color-primary-400)] font-medium mb-2 lg:mb-4">
              Migrate
            </h4>
            <p className="leading-7 text-justify text-lg ">
              If you like the country you have been working in, you can become a
              permanent resident by applying for the same or you can even look
              into other countries for opportunities, our foreign education
              consultants can guide you on the same. Either way, living in a
              foreign country lets you experience an international lifestyle.
            </p>
          </div>
          <div className="sm:w-3/4 row-1 lg:col-2 rounded-2xl overflow-hidden">
            <img
              className="transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
              src="aboutus/migrate.webp"
              alt="migrate"
            />
          </div>
        </div>

        {/* reach every social media */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 justify-items-center items-center mx-auto mb-30">
          <div className="sm:w-3/4 rounded-2xl overflow-hidden">
            <img
              className="transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
              src="aboutus/social_media.webp"
              alt="social media applications"
            />
          </div>
          <div className="">
            <h4 className="text-2xl text-[var(--color-primary-400)] font-medium mb-2 lg:mb-4">
              Reach Every Social Media
            </h4>
            <p className="leading-7 text-justify text-lg ">
              We reply to each and every Email, Facebook Message, or any comment
              on any of our social media pages or channels. It let us feel a
              great love by your side.
            </p>
          </div>
        </div>

        {/* experienced professionals */}
        <div className="grid lg:grid-cols-2 justify-items-center gap-8 lg:gap-14 items-center max-w-6xl mb-30">
          <div className="">
            <h4 className="text-2xl text-[var(--color-primary-400)] font-medium mb-2 lg:mb-4">
              Experienced Professionals
            </h4>
            <p className="leading-7 text-justify text-lg ">
              Our purpose is clear. We create clarity and confidence today for a
              more sustainable tomorrow. And our values are more than words.
            </p>
          </div>
          <div className="sm:w-3/4 row-1 lg:col-2 rounded-2xl overflow-hidden">
            <img
              className="transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
              src="aboutus/experienced_professionals.webp"
              alt="experienced professionals"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
