import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  return (
    <section className="py-14 bg-(--color-secondary-0) font-['Rubik']">
      <div className="max-w-[1200px] mx-auto px-8 text-center">
        <span className="block mb-4 font-medium text-3xl italic">
          Welcome to
        </span>
        <h2 className="font-bold text-4xl mb-2">
          Saira International Education and Consultancy
        </h2>
        <p className="text-2xl mb-10">Your gateway to global oppurtunities.</p>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 items-center p-6">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="working_professional_in_office.jpeg"
              alt="staff of Saira International Education and Consultancy"
              className="w-full lg:h-[450px] h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="">
            <p className="text-justify text-lg leading-8 mb-8 ">
              Saira International Education and Consultancy is Genuine overseas
              education consultant, we give 100% Transparency for people who
              want to go Abroad – whether for studying, working, or migrating
              permanently to their preferred destination. We provide 100%
              Genuine and Correct information. Saira International Education and
              Consultancy started in the year 2025, for helping students. We are
              continuous helping students and providing free guidance since
              2025. You can visit our social media links such as Instagram,
              Facebook, Tiktok for more information. You can contact us via
              WhatsApp/Email.
            </p>
            <button
              className="px-8 py-3 font-medium bg-(--color-secondary-500) text-indigo-50 rounded-md block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-(--color-secondary-700)"
              onClick={() => navigate("/aboutus")}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
