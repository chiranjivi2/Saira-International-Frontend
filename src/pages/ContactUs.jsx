import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { postContactUsData } from "../services/api";
import { toast } from "react-hot-toast";
import OfficialPartners from "../features/contact us/OfficialPartners";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",

    query: "",
    phoneNo: "",
    qualification: "",
    intrestedIn: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phoneNo) newErrors.phoneNo = "Phone Number is required.";
    if (!formData.qualification)
      newErrors.qualification = "Qualification is required.";
    if (!formData.query) newErrors.query = "Query is required.";
    if (!formData.intrestedIn)
      newErrors.intrestedIn = "Program interested in is required.";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);

    const postData = async () => {
      try {
        const result = await postContactUsData(formData);

        toast.success("form data sent successfully.");
        setFormData({
          fullName: "",
          email: "",

          query: "",
          phoneNo: "",
          qualification: "",
          intrestedIn: "",
        });

        console.log("result:", result);
      } catch (err) {
        console.log("Upload failed", err);
        toast.error("error", err);
      }
    };
    postData();
  };

  return (
    <>
      <title>Contact Us Page</title>
      <meta
        name="description"
        content="This is the contact us page of Saira International Education and Consultancy website"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Hero Section */}
        <div className="bg-(--color-primary-500) text-white py-12 sm:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold  animate-fade-in">
              Get In Touch
            </h1>
            {/* <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from
            you.
          </p> */}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="animate-slide-in-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-indigo-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                      Email
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm break-words">
                      sairainternationaledu@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-purple-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                      Phone
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      9768827874
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      9768827875
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-pink-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                      Office
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Traffic-Chowk, Butwal
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-green-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                      Working Hours
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Sunday - Friday: 10AM - 5PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-indigo-600" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Send us a message
                  </h2>
                </div>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                    <p className="text-green-800 font-medium">
                      ✓ Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                    {errors?.fullName && (
                      <p className="text-red-500 text-md py-2">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                    {errors?.email && (
                      <p className="text-red-500 text-md py-2">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="9768827784"
                    />
                    {errors?.phoneNo && (
                      <p className="text-red-500 text-md py-2">
                        {errors.phoneNo}
                      </p>
                    )}
                  </div>

                  {/* qualification */}
                  <div>
                    <label className="block text-grey-700 font-medium mb-2">
                      Qualification
                    </label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" disabled>
                        Select your qualification
                      </option>
                      <option value="10">10</option>
                      <option value="12">12</option>
                      <option value="Bachelors">Bachelors</option>
                      <option value="Masters">Masters</option>
                    </select>
                    {errors?.qualification && (
                      <p className="text-red-500 text-md py-2">
                        {errors.qualification}
                      </p>
                    )}
                  </div>

                  {/* Interested in */}
                  <div>
                    <label className="block text-grey-700 font-medium mb-2">
                      Program Interested
                    </label>
                    <select
                      name="intrestedIn"
                      value={formData.intrestedIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="" disabled>
                        Select your interested program
                      </option>
                      <option value="Diploma">Diploma</option>
                      <option value="Bachelors">Bachelors</option>
                      <option value="Masters">Masters</option>
                      <option value="Others">Others</option>
                      {/* <option value="Doctorals/PHD">Doctorals/PHD</option>
                      <option value="Diploma and Certificate Courses">
                        Diploma and Certificate Courses
                      </option>
                      <option value="PG Diploma/ Certification">
                        PG Diploma/ Certification
                      </option>
                      <option value="Professional Courses">
                        Professional Courses
                      </option>
                      <option value="Technical Courses">
                        Technical Courses
                      </option>
                      <option value="Vocational Courses">
                        VocationalCourses
                      </option> */}
                    </select>
                    {errors?.intrestedIn && (
                      <p className="text-red-500 text-md py-2">
                        {errors.intrestedIn}
                      </p>
                    )}
                  </div>

                  {/* <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="How can we help?"
                    />
                  </div> */}

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                    {errors?.query && (
                      <p className="text-red-500 text-md py-2">
                        {errors.query}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-secondary-500)] text-white font-semibold py-4 rounded-lg hover:from-[var(--color-primary-600)] hover:to-[var(--color-secondary-600)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <OfficialPartners />

        <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }
      `}</style>
      </div>
    </>
  );
}

export default ContactUs;
