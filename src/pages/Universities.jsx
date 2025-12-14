import CollegesList from "../features/universities/CollegesList";

function Universities() {
  return (
    <>
      <section className="bg-[var(--color-primary-500)] text-[var(--color-primary-50)]">
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
