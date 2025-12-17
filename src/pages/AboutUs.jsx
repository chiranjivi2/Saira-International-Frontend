import Mission from "../features/about us/Mission";
import WhatWeDo from "../features/about us/WhatWeDo";
import WhyChooseUs from "../features/about us/WhyChooseUs";

function AboutUs() {
  return (
    <>
      <title>About Us Page</title>
      <meta
        name="description"
        content="This is the about us page of Saira International Education and Consultancy website"
      />
      <main>
        <section className="bg-(--color-primary-500) text-(--color-primary-50)">
          <div className="py-18">
            <h1 className="text-5xl text-center font-bold">About Us</h1>
          </div>
        </section>

        <section className="py-14 bg-(--color-secondary-50)">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 items-center p-6">
              {/* image */}
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="working_professional_in_office.jpeg"
                  alt="Saira International Education and Consultancy staffs"
                  className="w-full lg:h-[400px] h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/*text */}
              <div className="">
                <h1 className="text-(--color-primary-500) text-3xl sm:text-4xl font-bold mb-5 leading-tight">
                  Saira International Education and Visa Services
                </h1>
                <p className="text-justify text-lg leading-relaxed mb-8">
                  Saira International Education and Visa Services is Genuine
                  overseas education consultant, we give 100% Transparency for
                  people who want to go Abroad – whether for studying, working,
                  or migrating permanently to their preferred destination. We
                  provide 100% Genuine and Correct information. Saira
                  International Education and Consultancy started in the year
                  2025, for helping students. We are continuous helping students
                  and providing free guidance since 2025. You can visit our
                  social media links such as Instagram, Facebook, Tiktok for
                  more information. You can contact us via WhatsApp/Email.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Mission />

        <WhatWeDo />

        <WhyChooseUs />
      </main>
    </>
  );
}

export default AboutUs;
