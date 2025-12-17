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
        <div className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-secondary-500)] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              Get In Touch
            </h1>
            {/* <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from
            you.
          </p> */}
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      sairainternationaledu@gmail.com
                    </p>
                    {/* <p className="text-gray-600">support@company.com</p> */}
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">9768827874</p>
                    <p className="text-gray-600">9768827875</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-pink-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Office</h3>
                    <p className="text-gray-600">Traffic-Chowk, Butwal</p>
                    <p className="text-gray-600">Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">Sunday - Friday: 10AM - 5PM</p>
                    {/* <p className="text-gray-600">Weekend: 10AM - 4PM</p> */}
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
