import Help from "../features/our services/Help";
import Jobs from "../features/our services/Jobs";
import StudyAbroad from "../features/our services/StudyAbroad";
import Footer from "../ui/Footer";

function OurServices() {
  return (
    <>
      <section className="bg-[var(--color-primary-500)] text-[var(--color-primary-50)]">
        <div className="py-18">
          <h1 className="text-4xl sm:text-5xl text-center font-bold">
            Our Services
          </h1>
        </div>
      </section>

      <Help />

      <StudyAbroad />

      <hr className="text-[var(--color-primary-100)] max-w-6xl mx-auto h-1" />

      <Jobs />

      <Footer />
    </>
  );
}

export default OurServices;
