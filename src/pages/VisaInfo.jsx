import Bank from "../features/visaInfo/Bank";

import VisaDetails from "../features/visaInfo/VisaDetails";

function VisaInfo() {
  return (
    <>
      <title>Visa Info Page</title>
      <meta
        name="description"
        content="This is the Visa Information page of Saira International Education and Consultancy website"
      />
      <section className="bg-(--color-primary-500) text-(--color-primary-50)">
        <div className="py-18">
          <h1 className="text-4xl sm:text-5xl text-center font-bold">
            Visa Info
          </h1>
        </div>
      </section>

      <Bank />

      <VisaDetails />
    </>
  );
}

export default VisaInfo;
