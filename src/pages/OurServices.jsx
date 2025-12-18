import Help from "../features/our services/Help";
import Jobs from "../features/our services/Jobs";
import StudyAbroad from "../features/our services/StudyAbroad";
import Banner from "../ui/Banner";

function OurServices() {
  return (
    <>
      <title>Our Services Page</title>
      <meta
        name="description"
        content="This is the Our Services page of Saira International Education and Consultancy website"
      />
      <Banner page="Our Services" />

      <Help />

      <StudyAbroad />

      <hr className="text-(--color-primary-100) max-w-6xl mx-auto h-1" />

      <Jobs />
    </>
  );
}

export default OurServices;
