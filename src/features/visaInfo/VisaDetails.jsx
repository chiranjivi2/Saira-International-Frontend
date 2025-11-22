import BankFund from "./BankFund";
import StudyVisa from "./StudyVisa";

function VisaDetails() {
  return (
    <>
      <section className="py-18 bg-slate-50">
        <div className="max-w-6xl px-8 mx-auto">
          <p className="text-2xl sm:text-3xl mb-5 text-center font-semibold">
            Here we provide detail information about visa
          </p>
          {/* what is visa */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-2">What is Visa?</h3>
            <p className="text-lg leading-[1.6] text-justify">
              A visa is an authorization in the form of a sticker affixed to a
              passport which authorizes the bearer to stay in or travel through
              Malta during a limited, specified, period.
            </p>
          </div>

          {/* visa */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Schegen Visa</h3>
            <p className="text-lg leading-[1.6] text-justify">
              It represents a territory where the free movement of persons is
              guaranteed. The signatory States to the agreement have abolished
              all internal borders in lieu of a single external border.
            </p>
          </div>
          {/* visa */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              Visa Student Application
            </h3>
            <p className="text-lg leading-[1.6] text-justify">
              Applicants (including those TCNs who are visa exempt for 90 days)
              who apply for courses which exceed 90 calendar days are to be
              issued with a National Long Stay Visa (D-Visa).
            </p>
          </div>
          {/* visa */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Visa Code</h3>
            <p className="text-lg leading-[1.6] text-justify">
              The Visa Code establishes the procedures and conditions in issuing
              visas for short stays (maximum of 90 days during any 180 days) in
              and transit through EU Member States applying the Schengen acquis
              in full, and the associated states.
            </p>
          </div>
          {/* visa */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Malta</h3>
            <p className="text-lg leading-[1.6] text-justify">
              The Vi There is a Get Qualifies Government scheme, after finishing
              studies, will get 70% course fee refund.
            </p>
          </div>

          <h4 className="font-semibold mb-5 text-xl">
            ** Spouse and dependent visa **
          </h4>
          {/* Study Visa */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Study Visa</h3>
            <div className="text-lg leading-[1.6] text-justify">
              <p>
                UK, Denmark, Finland, Sweden, Germany and some other countries
                you can apply.
              </p>
              <p>
                Study visa of Malta, Greece, Italy, Latvia, Lithuania, France,
                Spain and many other countries you CANNOT apply visa for Spouse
                and Dependents.
              </p>
            </div>
          </div>
          {/* Work Visa */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-2">Work Visa</h3>
            <div className="text-lg leading-[1.6] text-justify">
              <p>
                <strong>Malta:</strong> You can apply after 1 year of work and
                required minimum wages for inviting spouse and kids
              </p>
              <p>
                <strong>Latvia:</strong> You can apply visa for Spouse and
                Dependents after getting TRC.
              </p>
            </div>
          </div>

          <StudyVisa />
        </div>
      </section>
    </>
  );
}

export default VisaDetails;
