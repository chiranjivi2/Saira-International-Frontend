function StudentForm() {
  return (
    <section className="bg-slate-100 py-14">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-4">
          <h2 className="text-[var(--color-primary-500)] text-3xl font-bold text-center mb-3">
            Upload documents for Students
          </h2>
          <div className="w-30 h-1 bg-[var(--color-primary-500)] mx-auto"></div>
        </div>
        <div>
          <form className=" p-4 px-8 max-w-5xl">
            <div className="grid grid-cols-[1fr_20rem_1fr] border-b border-slate-400 py-6 items-center">
              <label for="name" className="text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
              />
            </div>

            <div className="grid grid-cols-[1fr_20rem_1fr] border-b border-slate-400 py-6 items-center">
              <label for="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
              />
            </div>
            <div className="grid grid-cols-[1fr_20rem_1fr] border-b border-slate-400 py-6 items-center">
              <label for="contact_number" className="text-lg font-semibold">
                Contact Number
              </label>
              <input
                type="text"
                name="contact_number"
                id="contact_number"
                className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
              />
            </div>
            <div className="grid grid-cols-[1fr_20rem_1fr] border-b border-slate-400 py-6 items-center">
              <label for="dob" className="text-lg font-semibold">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
              />
            </div>
            <div className="grid grid-cols-[1fr_20rem_1fr] border-b border-slate-400 py-6 items-center">
              <label for="nationality" className="text-lg font-semibold">
                Nationality
              </label>
              <input
                type="text"
                name="nationality"
                id="nationality"
                className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
              />
            </div>
            <div className="grid grid-cols-[1fr_20rem_1fr] border-b border-slate-400 py-6 items-center">
              <label
                for="destination_country"
                className="text-lg font-semibold"
              >
                Applying for Country
              </label>
              <input
                type="text"
                name="destination_country"
                id="destination_country"
                className="text-lg border border-slate-400 rounded-md px-2 py-1 focus:-outline-offset-1 focus:outline-blue-600"
              />
            </div>

            {/* IELTS/PTE/TOEFL */}
            <div className="grid grid-cols-[1fr_20rem_1fr]  py-6 items-center">
              <label className="text-lg font-semibold">IELTS/PTE/TOEFL</label>
              <div className="space-x-6">
                <div className=" inline-block ">
                  <input
                    type="checkbox"
                    id="yes"
                    name="exam"
                    className="h-4 w-4 hover:cursor-pointer"
                  />{" "}
                  <label for="yes">Yes</label>
                </div>
                <div className="inline-block">
                  <input
                    type="checkbox"
                    id="no"
                    name="exam"
                    className="h-4 w-4 hover:cursor-pointer"
                  />{" "}
                  <label for="no">No</label>
                </div>
              </div>
            </div>

            {/* submit button */}
            <div className="flex gap-6 justify-end mt-5">
              <button
                className="px-4 py-2 bg-slate-200 text-[var(--color-primary-600)] rounded-md hover:cursor-pointer hover:bg-slate-300 hover:shadow-xl"
                type="reset"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-[var(--color-primary-400)] text-blue-50 rounded-md font-semibold hover:bg-blue-600 hover:cursor-pointer shadow-md hover:shadow-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default StudentForm;
