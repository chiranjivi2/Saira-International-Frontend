import CollegesList from "../features/universities/CollegesList";

function Universities() {
  return (
    <>
      <title>Universities Page</title>
      <meta
        name="description"
        content="This is the Universities page of Saira International Education and Consultancy website"
      />
      <section className="bg-(--color-primary-500) text-(--color-primary-50)">
        <div className="py-18">
          <h1 className="text-4xl sm:text-5xl text-center font-bold">
            Universities / Colleges
          </h1>
        </div>
      </section>

      <CollegesList />
    </>
  );
}
export default Universities;
