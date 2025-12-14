import Bank from "../features/visaInfo/Bank";
import BankFund from "../features/visaInfo/BankFund";
import VisaDetails from "../features/visaInfo/VisaDetails";
import VisaImage from "../features/visaInfo/VisaImage";

function VisaInfo() {
  return (
    <>
      <section className="bg-[var(--color-primary-500)] text-[var(--color-primary-50)]">
        <div className="py-18">
          <h1 className="text-4xl sm:text-5xl text-center font-bold">
            Visa Info
          </h1>
        </div>
      </section>

      <Bank />

      <VisaImage />

      <VisaDetails />
    </>
  );
}

export default VisaInfo;
