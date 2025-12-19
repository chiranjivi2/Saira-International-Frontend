import { useNavigate } from "react-router-dom";
import Banner from "../ui/Banner";

function UploadDocuments() {
  const navigate = useNavigate();
  return (
    <>
      <title>Upload documents Page</title>
      <meta
        name="description"
        content="This is the upload document page of Saira International Education and Consultancy website"
      />
      <Banner page="Upload Documents" />

      <section className="py-16">
        <div className="max-w-6xl mx-auto sm:px-8">
          <div className="grid lg:grid-cols-2 gap-15">
            {/* for students */}
            <div className=" flex flex-col items-center">
              <div className="w-xs sm:w-lg lg:w-md h-60 sm:h-80 mb-8 relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  src="uploadDocuments/students.webp"
                  alt="students"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div>
                <button
                  className="bg-[var(--color-secondary-500)]  px-5 py-2 text-white font-bold cursor-pointer rounded-sm mx-auto shadow-md hover:bg-[var(--color-secondary-700)] hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/uploaddocuments/studentform")}
                >
                  For Students{" "}
                </button>
              </div>
            </div>
            {/* for partners] */}
            <div className=" flex flex-col items-center">
              <div className="w-xs sm:w-lg lg:w-md h-60 sm:h-80 mb-8 relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
                  src="uploadDocuments/partners.webp"
                  alt="partners"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div>
                <button
                  className="bg-(--color-secondary-500)  px-5 py-2 text-white font-bold cursor-pointer rounded-sm shadow-md mx-auto hover:bg-[var(--color-secondary-700)] hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/uploaddocuments/partnerform")}
                >
                  For Partners{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UploadDocuments;
