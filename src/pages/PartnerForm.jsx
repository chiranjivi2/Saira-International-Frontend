import { useForm } from "react-hook-form";

function PartnerForm() {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;
  console.log(errors);

  function onSubmit(data) {
    console.log(data);
  }

  const regxEmail = /\S+@\S+\.\S+/;

  return (
    <>
      <section className="bg-slate-100 py-14">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-4">
            <h2 className="text-[var(--color-primary-500)] text-3xl font-bold text-center mb-3">
              Upload documents for Partners
            </h2>
            <div className="w-30 h-1 bg-[var(--color-primary-500)] mx-auto"></div>
          </div>
          <div>
            <form
              className="p-1 md:p-4 md:px-16 max-w-5xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid sm:grid-cols-[10rem_20rem] md:grid-cols-[1fr_20rem_1fr] gap-3 sm:gap-6 sm:justify-center border-b border-slate-200 py-6 items-center">
                <label htmlFor="name" className="text-lg font-semibold">
                  Student's Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
                  {...register("name", { required: "This field is requierd." })}
                />
                {errors?.name && (
                  <div className="text-red-500">{errors?.name.message}</div>
                )}
              </div>

              <div className="grid   sm:grid-cols-[10rem_20rem]  md:grid-cols-[1fr_20rem_1fr] gap-3 sm:gap-6 sm:justify-center border-b border-slate-200 py-6 items-center">
                <label htmlFor="email" className="text-lg font-semibold">
                  Student's Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
                  {...register("email", {
                    required: "This field is required.",
                    pattern: {
                      value: regxEmail,
                      message: "Please provide valid email address.",
                    },
                  })}
                />
                {errors?.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="grid  sm:grid-cols-[10rem_20rem] md:grid-cols-[1fr_20rem_1fr] gap-3 sm:gap-6 sm:justify-center border-b border-slate-200 py-6 items-center">
                <label
                  htmlFor="contactNumber"
                  className="text-lg font-semibold"
                >
                  Student's Contact Number
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
                  {...register("contactNumber", {
                    required: "This field is required.",
                  })}
                />
                {errors?.contactNumber && (
                  <p className="text-red-500">{errors.contactNumber.message}</p>
                )}
              </div>
              <div className="grid  sm:grid-cols-[10rem_20rem] md:grid-cols-[1fr_20rem_1fr] gap-3 sm:gap-6 sm:justify-center border-b border-slate-200 py-6 items-center">
                <label htmlFor="dob" className="text-lg font-semibold">
                  Student's Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
                  {...register("dob", { required: "This field is required." })}
                />
                {errors?.dob && (
                  <p className="text-red-500">{errors.dob.message}</p>
                )}
              </div>
              <div className="grid  sm:grid-cols-[10rem_20rem] md:grid-cols-[1fr_20rem_1fr] gap-3 sm:gap-6 sm:justify-center border-b border-slate-200 py-6 items-center">
                <label htmlFor="nationality" className="text-lg font-semibold">
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
                  {...register("nationality", {
                    required: "This field is required.",
                  })}
                />
                {errors?.nationality && (
                  <p className="text-red-500">{errors.nationality.message}</p>
                )}
              </div>
              <div className="grid  sm:grid-cols-[10rem_20rem] md:grid-cols-[1fr_20rem_1fr] gap-3 sm:gap-6 sm:justify-center border-b border-slate-200 py-6 items-center">
                <label
                  htmlFor="destinationCountry"
                  className="text-lg font-semibold"
                >
                  Applying for Country
                </label>
                <input
                  type="text"
                  name="destinationCountry"
                  id="destinationCountry"
                  className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
                  {...register("destinationCountry", {
                    required: "This field is required.",
                  })}
                />
                {errors?.destinationCountry && (
                  <p className="text-red-500">
                    {errors.destinationCountry.message}
                  </p>
                )}
              </div>

              {/* IELTS/PTE/TOEFL */}
              <div className="grid  sm:grid-cols-[10rem_20rem] md:grid-cols-[1fr_20rem_1fr] gap-4 sm:gap-6 sm:justify-center border-b border-slate-200 py-6 items-center">
                <label className="text-lg font-semibold">IELTS/PTE/TOEFL</label>
                <div className="space-x-6">
                  <div className=" inline-block ">
                    <input
                      type="radio"
                      id="yes"
                      name="exam"
                      value="yes"
                      className="h-4 w-4 hover:cursor-pointer"
                      {...register("exam", {
                        required: "This field is required.",
                      })}
                    />{" "}
                    <label htmlFor="yes">Yes</label>
                  </div>
                  <div className="inline-block">
                    <input
                      type="radio"
                      id="no"
                      name="exam"
                      value="no"
                      className="h-4 w-4 hover:cursor-pointer"
                      {...register("exam", {
                        required: "This field is required.",
                      })}
                    />{" "}
                    <label htmlFor="no">No</label>
                  </div>
                </div>
                {errors?.exam && (
                  <p className="text-red-500">{errors.exam.message}</p>
                )}
              </div>

              {/* Company name */}

              {/* <div className="grid sm:grid-cols-[10rem_20rem] md:grid-cols-[1fr_20rem_1fr] gap-3 sm:gap-6 sm:justify-center border-b border-slate-200 py-6 items-center">
                <label htmlFor="companyName" className="text-lg font-semibold">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
                  {...register("companyName", {
                    required: "This field is requierd.",
                  })}
                />
                {errors?.companyName && (
                  <div className="text-red-500">
                    {errors?.companyName.message}
                  </div>
                )}
              </div> */}

              {/* partner name */}
              <div className="grid  sm:grid-cols-[10rem_20rem] md:grid-cols-[1fr_20rem_1fr] gap-3 sm:gap-6 sm:justify-center border-b border-slate-200 py-6 items-center">
                <label htmlFor="partnerName" className="text-lg font-semibold">
                  Partner Name
                </label>
                <input
                  type="text"
                  name="partnerName"
                  id="partnerName"
                  className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
                  {...register("partnerName", {
                    required: "This field is required.",
                  })}
                />
                {errors?.partnerName && (
                  <p className="text-red-500">{errors.partnerName.message}</p>
                )}
              </div>

              {/* partner email */}

              <div className="grid   sm:grid-cols-[10rem_20rem]  md:grid-cols-[1fr_20rem_1fr] gap-3 sm:gap-6 sm:justify-center border-b border-slate-200 py-6 items-center">
                <label htmlFor="partnerEmail" className="text-lg font-semibold">
                  Partner Email
                </label>
                <input
                  type="email"
                  name="partnerEmail"
                  id="partnerEmail"
                  className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
                  {...register("partnerEmail", {
                    required: "This field is required.",
                    pattern: {
                      value: regxEmail,
                      message: "Please provide valid email address.",
                    },
                  })}
                />
                {errors?.partnerEmail && (
                  <p className="text-red-500">{errors.partnerEmail.message}</p>
                )}
              </div>

              {/* upload documents */}
              <div className="grid  sm:grid-cols-[10rem_20rem] md:grid-cols-[1fr_20rem_1fr] gap-3 sm:gap-6 sm:justify-center py-6 items-center">
                <label
                  htmlFor="document"
                  className="text-lg font-semibold text-wrap"
                >
                  Upload Documents(Education, Passport, CV etc.)
                </label>
                <input
                  type="file"
                  id="partnerDocument"
                  name="partnerDocument"
                  className="w-full text-lg border border-slate-400 rounded-md  focus:-outline-offset-1 focus:outline-blue-600 file:bg-blue-500 file:px-2 file:py-1 file:text-[var(--color-primary-50)] file:font-semibold file:rounded-md file:hover:bg-blue-600 file:cursor-pointer file:border-none file:mr-3 file:transition-all file:duration-300"
                  {...register("partnerDocument", {
                    required: "This field is required.",
                  })}
                />
                {errors?.partnerDocument && (
                  <p className="text-red-500">
                    {errors.partnerDocument.message}
                  </p>
                )}
              </div>

              {/* submit button */}
              <div className="flex gap-6 justify-end mt-5">
                <button
                  className="px-4 py-2 bg-slate-200 text-[var(--color-primary-600)] rounded-md hover:cursor-pointer hover:bg-slate-300 hover:shadow-xl"
                  type="reset"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-[var(--color-primary-400)] text-blue-50 rounded-md font-semibold hover:bg-blue-600 hover:cursor-pointer shadow-md hover:shadow-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnerForm;
