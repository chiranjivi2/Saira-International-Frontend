import Help from "../features/our services/Help";
import Jobs from "../features/our services/Jobs";
import StudyAbroad from "../features/our services/StudyAbroad";

function OurServices() {
  return (
    <>
      <title>Our Services Page</title>
      <meta
        name="description"
        content="This is the Our Services page of Saira International Education and Consultancy website"
      />
      <section className="bg-(--color-primary-500) text-(--color-primary-50)">
        <div className="py-18">
          <h1 className="text-4xl sm:text-5xl text-center font-bold">
            Our Services
          </h1>
        </div>
      </section>

      <Help />

      <StudyAbroad />

      <hr className="text-(--color-primary-100) max-w-6xl mx-auto h-1" />

      <Jobs />
    </>
  );
}

export default OurServices;
