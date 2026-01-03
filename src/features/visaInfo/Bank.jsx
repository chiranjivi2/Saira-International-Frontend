import { useEffect, useState } from "react";
import { FaEuroSign } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { IoCashOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { getBankFund } from "../../services/api";
import { FaCircle } from "react-icons/fa";

function Bank() {
  const [bankFund, setBankFund] = useState([]);
  // const countries = [
  //   {
  //     name: "Malta",
  //     list: {
  //       cash: "Eur 10,000 for 1 year course",
  //       bank_statement: "3 months bank statement",
  //       time: "20 days old funds also ok. If funds are old then much better",
  //     },
  //   },
  //   {
  //     name: "Greece",
  //     list: {
  //       cash: "Eur 400 per month (i.e.💶4800 per year)",
  //       time: "3 months old funds ",
  //     },
  //   },

  //   {
  //     name: "Latvia",
  //     list: {
  //       cash: "Eur 448 per month (i.e.💶5376 per year)",
  //       time: "3 months old funds ",
  //     },
  //   },
  //   {
  //     name: "Cyprus",
  //     list: {
  //       cash: "Eur 8000 for 1 year course",
  //       bank_statement: "3 months bank statement",
  //       time: "1 week old funds also ok ",
  //     },
  //   },
  //   {
  //     name: "Slovakia",
  //     list: {
  //       cash: "Eur 2640 per year ",
  //       time: "3 months old funds ",
  //     },
  //   },
  //   {
  //     name: "Italy",
  //     list: {
  //       cash: "Eur 10000 per year ",
  //       time: "3 months old funds ",
  //     },
  //   },
  //   {
  //     name: "Austria",
  //     list: {
  //       cash: "Euro 6627 (Foundation Course) Under age 24 ",
  //       cash2: "Euro 12000 (Bachelors and Masters) Over age 24",
  //       time: "2 years old funds ",
  //     },
  //   },
  // ];

  useEffect(() => {
    const fetchBankFunds = async () => {
      const data = await getBankFund();
      if (data) setBankFund(data);
    };
    fetchBankFunds();
  }, []);

  if (!bankFund.length) return null;

  return (
    <section className="py-14 bg-[var(--color-primary-50)]">
      <div className="max-w-6xl mx-auto sm:px-8">
        <h3 className="text-3xl text-[var(--color-primary-500)] text-center font-bold mb-12">
          Show Bank Funds for Study Visa
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-6 md:gap-12">
          {/* study in Malta */}

          {bankFund.map((country) => {
            return (
              <div
                key={country._id}
                className="flex flex-col  rounded-2xl overflow-hidden w-70 xl:w-85  lg:w-75 sm:w-80  shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-sm sm:w-2xl h-50 ">
                  <img
                    className="h-full w-full object-cover"
                    src={country.imageURL}
                    alt={country.countryName}
                  />
                </div>
                <div className="p-5 px-6">
                  <p className="text-2xl sm:text-3xl text-center font-bold mb-3 text-[var(--color-primary-500)]">
                    Study in {country.countryName}
                  </p>

                  <ul className="flex flex-col gap-2 text-lg">
                    {country.details.map((detail, index) => (
                      <li key={index} className="flex gap-6 items-center">
                        <div>
                          <FaCircle className="h-3 w-3  text-(--color-primary-500)" />
                        </div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <ul className="flex flex-col gap-2 text-lg">
                    <li className="flex gap-6 items-center">
                      {" "}
                      <div>
                        <IoCashOutline className="h-6 w-6 text-[var(--color-primary-500)]" />{" "}
                      </div>
                      <span>{country.details[0]}</span>
                    </li>
                    {country.list.cash2 && (
                      <li className="flex gap-6 items-center">
                        {" "}
                        <div>
                          <IoCashOutline className="h-6 w-6 text-[var(--color-primary-500)]" />{" "}
                        </div>
                        <span>{country.list.cash2}</span>
                      </li>
                    )}
                    {country.list.bank_statement && (
                      <li className="flex gap-6 items-center ">
                        <div>
                          <SlCalender className="h-6 w-6 text-[var(--color-primary-500)]" />
                        </div>
                        <span>{country.list.bank_statement}</span>
                      </li>
                    )}
                    <li className="flex gap-6 items-center ">
                      <div>
                        <IoIosTimer className="h-6 w-6 text-[var(--color-primary-500)] " />
                      </div>
                      <span>{country.list.time}</span>
                    </li>
                  </ul> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Bank;
