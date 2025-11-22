import { FaEuroSign } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { IoCashOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

function BankFund() {
  return (
    <section className="py-14 bg-[var(--color-primary-50)]">
      <div className="max-w-6xl mx-auto px-8">
        <h3 className="text-3xl text-[var(--color-primary-500)] text-center font-bold mb-12">
          Show Bank Funds for Study Visa
        </h3>

        <div className="grid grid-cols-3 gap-6 ">
          {/* study in Malta */}
          <div className="flex flex-col  rounded-2xl overflow-hidden  w-85 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-auto h-50 ">
              <img
                className="h-full w-full object-cover"
                src="visainfo/malta.jpg"
                alt="malta"
              />
            </div>
            <div className="p-5 px-6">
              <p className="text-3xl text-center font-bold mb-3 text-[var(--color-primary-500)]">
                Study in Malta
              </p>
              <ul className="flex flex-col gap-2 text-lg">
                <li className="flex gap-6 items-center">
                  {" "}
                  <div>
                    <IoCashOutline className="h-6 w-6 text-[var(--color-primary-500)]" />{" "}
                  </div>
                  <span>
                    {" "}
                    Eur <span className="font-semibold">10,000</span> for{" "}
                    <span className="font-semibold">1</span> year course
                  </span>
                </li>
                <li className="flex gap-6 items-center ">
                  <div>
                    <SlCalender className="h-6 w-6 text-[var(--color-primary-500)]" />
                  </div>
                  <span>
                    <span className="font-semibold">3</span> Months Bank
                    Statement
                  </span>
                </li>
                <li className="flex gap-6 items-center ">
                  <div>
                    <IoIosTimer className="h-6 w-6 text-[var(--color-primary-500)] " />
                  </div>
                  <span>
                    <span className="font-semibold">20</span> days old funds
                    also ok. If funds are old then much better
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* study in Greece */}
          <div className="flex flex-col  rounded-2xl overflow-hidden  w-85 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-auto h-50 ">
              <img
                className="h-full w-full object-cover"
                src="visainfo/greece.jpg"
                alt="greece"
              />
            </div>
            <div className="p-5 px-6">
              <p className="text-3xl text-center font-bold mb-3 text-[var(--color-primary-500)]">
                Study in Greece
              </p>
              <ul className="flex flex-col gap-2 text-lg">
                <li className="flex gap-6 items-center ">
                  {" "}
                  <div>
                    <IoCashOutline className="h-6 w-6 text-[var(--color-primary-500)]" />{" "}
                  </div>
                  <span>
                    {" "}
                    Eur <span className="font-semibold">400</span> per month
                    (i.e.
                    <FaEuroSign className="inline-block" />
                    <span className="font-semibold">4800</span> per year)
                  </span>
                </li>

                <li className="flex gap-6 items-center">
                  <div>
                    <IoIosTimer className="h-6 w-6 text-[var(--color-primary-500)] " />
                  </div>
                  <span>
                    <span className="font-semibold">3</span> months old fund
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* study in Latvia */}
          <div className="flex flex-col  rounded-2xl overflow-hidden  w-85 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="w-auto h-50 ">
              <img
                className="h-full w-full object-cover"
                src="visainfo/latvia.jpg"
                alt="latvia"
              />
            </div>
            <div className="p-5 px-6">
              <p className="text-3xl text-center font-bold mb-3 text-[var(--color-primary-500)]">
                Study in Latvia
              </p>
              <ul className="flex flex-col gap-2 text-lg">
                <li className="flex gap-6 items-center ">
                  {" "}
                  <div>
                    <IoCashOutline className="h-6 w-6 text-[var(--color-primary-500)]" />{" "}
                  </div>
                  <span>
                    {" "}
                    Eur <span className="font-semibold">448</span> per month
                    (i.e.
                    <FaEuroSign className="inline-block" />
                    <span className="font-semibold">5376</span> per year)
                  </span>
                </li>

                <li className="flex gap-6 items-center">
                  <div>
                    <IoIosTimer className="h-6 w-6 text-[var(--color-primary-500)] " />
                  </div>
                  <span>
                    <span className="font-semibold">3</span> months old fund
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* study in Malta */}
          <div className="flex flex-col  rounded-2xl bg-[var(--color-secondary-100)] w-80">
            <div className="w-auto h-50 overflow-hidden rounded-2xl ">
              <img
                className="h-full w-full object-cover"
                src="visainfo/malta.jpg"
                alt="malta"
              />
            </div>
            <div className="p-4">
              <p className="text-3xl text-center font-bold mb-3">
                Study in Malta
              </p>
              <ul className="list-disc pl-5">
                <li> Eur 10,000 for 1 year course</li>
                <li>3 Months Bank Statement and 20 days old funds also ok.</li>
                <li>If funds are old then much better</li>
              </ul>
            </div>
          </div>
          {/* study in Malta */}
          <div className="flex flex-col  rounded-2xl bg-[var(--color-secondary-100)] w-80">
            <div className="w-auto h-50 overflow-hidden rounded-2xl ">
              <img
                className="h-full w-full object-cover"
                src="visainfo/malta.jpg"
                alt="malta"
              />
            </div>
            <div className="p-4">
              <p className="text-3xl text-center font-bold mb-3">
                Study in Malta
              </p>
              <ul className="list-disc pl-5">
                <li> Eur 10,000 for 1 year course</li>
                <li>3 Months Bank Statement and 20 days old funds also ok.</li>
                <li>If funds are old then much better</li>
              </ul>
            </div>
          </div>
          {/* study in Malta */}
          <div className="flex flex-col  rounded-2xl bg-[var(--color-secondary-100)] w-80">
            <div className="w-auto h-50 overflow-hidden rounded-2xl ">
              <img
                className="h-full w-full object-cover"
                src="visainfo/malta.jpg"
                alt="malta"
              />
            </div>
            <div className="p-4">
              <p className="text-3xl text-center font-bold mb-3">
                Study in Malta
              </p>
              <ul className="list-disc pl-5">
                <li> Eur 10,000 for 1 year course</li>
                <li>3 Months Bank Statement and 20 days old funds also ok.</li>
                <li>If funds are old then much better</li>
              </ul>
            </div>
          </div>
          {/* study in Malta */}
          <div className="flex flex-col  rounded-2xl bg-[var(--color-secondary-100)] w-80">
            <div className="w-auto h-50 overflow-hidden rounded-2xl ">
              <img
                className="h-full w-full object-cover"
                src="visainfo/malta.jpg"
                alt="malta"
              />
            </div>
            <div className="p-4">
              <p className="text-3xl text-center font-bold mb-3">
                Study in Malta
              </p>
              <ul className="list-disc pl-5">
                <li> Eur 10,000 for 1 year course</li>
                <li>3 Months Bank Statement and 20 days old funds also ok.</li>
                <li>If funds are old then much better</li>
              </ul>
            </div>
          </div>
          {/* study in Malta */}
          <div className="flex flex-col  rounded-2xl bg-[var(--color-secondary-100)] w-80">
            <div className="w-auto h-50 overflow-hidden rounded-2xl ">
              <img
                className="h-full w-full object-cover"
                src="visainfo/malta.jpg"
                alt="malta"
              />
            </div>
            <div className="p-4">
              <p className="text-3xl text-center font-bold mb-3">
                Study in Malta
              </p>
              <ul className="list-disc pl-5">
                <li> Eur 10,000 for 1 year course</li>
                <li>3 Months Bank Statement and 20 days old funds also ok.</li>
                <li>If funds are old then much better</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BankFund;
