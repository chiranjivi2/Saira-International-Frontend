import { useEffect, useState } from "react";
import { getUniversities } from "../../services/api";

function CollegesList() {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      const data = await getUniversities();
      if (data) setColleges(data);
    };
    fetchUniversities();
  }, []);

  // const Colleges = [
  //   {
  //     name: "Medicine - MBBS, PG",
  //     location: "Bos, Geo, Rus, Latvia, Uzbek",
  //     link: "https://docs.google.com/spreadsheets/d/1gTzTzDr5B6V0D6Rw5z1A9Rgfv4F54YeH/edit?pli=1&gid=273337086#gid=273337086",
  //   },
  //   {
  //     name: "All The Universities of Malta",
  //     location: "Malta",
  //     link: "https://docs.google.com/spreadsheets/d/190nWxtj5bYIloVAWvEtsykB70mcgd4XL/edit?gid=898970686#gid=898970686",
  //   },
  //   {
  //     name: "Universities of Malta (UM) Courses",
  //     location: "Malta",
  //     link: "https://docs.google.com/spreadsheets/d/1fMuG6ILgmVdB6HP9cLN27BvyFCIa4lxa/edit?gid=1587582161#gid=1587582161",
  //   },
  //   {
  //     name: "All the Universities of Latvia",
  //     location: "Latvia",
  //     link: "https://docs.google.com/spreadsheets/d/145arRI1RSDgpR4wJGRd5ZXu2Yspura3-/edit?gid=15066516#gid=15066516",
  //   },
  //   {
  //     name: "All the Universities of Romania",
  //     location: "Romania",
  //     link: "https://docs.google.com/spreadsheets/d/1d6rFJwgKv4HwhrbGzR-odJlOmQ68XEVy/edit?gid=826976884#gid=826976884",
  //   },
  //   {
  //     name: "All the Universities of United Kingdom (UK)",
  //     location: "United Kingdom (UK)",
  //     link: "https://docs.google.com/spreadsheets/d/1kMx85MCQwNlfLH3CwzAwzutUENoEsV1S/edit?gid=779513140#gid=779513140",
  //   },
  // ];

  return (
    <section className=" py-10 sm:py-16 lg:py-20 bg-[var(--color-secondary-50)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <h3 className="text-[var(--color-primary-500)] font-semibold text-2xl sm:text-3xl md:text-4xl text-center mb-6 md:mb-9">
          List of colleges of European countries is given below
        </h3>

        <div className="overflow-x-auto shadow-lg mx-auto max-w-4xl rounded-2xl">
          <table className="w-full ">
            <thead className="text-lg sm:text-xl bg-[var(--color-primary-500)] text-[var(--color-primary-50)]">
              <tr className="">
                <th className="cell">S.N.</th>
                <th className="cell break-all text-left">
                  University/College Name
                </th>
                <th className="cell text-left">Location</th>
                <th className="cell">More Details</th>
              </tr>
            </thead>

            <tbody className="p-15">
              {colleges.map((college, i) => {
                return (
                  <tr className="even:bg-[var(--color-secondary-100)]">
                    <td className="cell text-center">{i + 1}</td>
                    <td className=" cell">{college.name}</td>
                    <td className="cell ">{college.location}</td>
                    <td className="cell text-center">
                      {" "}
                      <a
                        target="_blank"
                        href={college.link}
                        className="text-[var(--color-primary-600)] font-semibold hover:underline"
                      >
                        Click here
                      </a>{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Click on "Click here" to view detailed information about each
          institution
        </p>
      </div>
    </section>
  );
}

export default CollegesList;
