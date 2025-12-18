import CollegesList from "../features/universities/CollegesList";
import Banner from "../ui/Banner";

function Universities() {
  return (
    <>
      <title>Universities Page</title>
      <meta
        name="description"
        content="This is the Universities page of Saira International Education and Consultancy website"
      />
      <Banner page="Universities/Colleges" />

      <CollegesList />
    </>
  );
}
export default Universities;
