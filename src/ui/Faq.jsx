import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getFaq } from "../services/api";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaq = async () => {
      const data = await getFaq();
      setFaqs(data);
    };
    fetchFaq();
  }, []);

  const faq = [
    {
      question: "Which countries do you provide services for?",
      answer:
        "We specialize in sending students and professionals to popular destinations including the Malta, Canada, UK, Australia, New Zealand, Germany,  and several European countries. We also offer services for Asian destinations like Japan, South Korea, and Singapore for both study and work opportunities.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We provide comprehensive services including career counseling, university selection, course guidance, application assistance, visa processing, document preparation, interview coaching, pre-departure orientation, accommodation assistance, and post-arrival support. We handle everything from start to finish.",
    },
    {
      question: "How long does the visa application process take?",
      answer:
        "The timeline varies by country and visa type. Student visas typically take 4-12 weeks after document submission. Work visas can take 2-6 months depending on the country and visa category. We provide realistic timelines during your consultation and keep you updated throughout the process.",
    },
    {
      question: "What are the eligibility requirements for studying abroad?",
      answer:
        "Requirements vary by country and program, but generally include completed previous education, English proficiency test scores (IELTS, TOEFL, PTE), financial proof, valid passport, and academic transcripts. Undergraduate programs typically require high school completion, while postgraduate programs need a bachelor's degree. We assess your profile and guide you accordingly.",
    },
    {
      question: "Do you help with scholarships and financial aid?",
      answer:
        "Yes! We assist students in finding and applying for scholarships, grants, and financial aid opportunities. Many universities offer merit-based scholarships, and we help you identify programs where you have strong chances. We also guide you through scholarship application essays and requirements.",
    },
    {
      question: "Can I work while studying abroad?",
      answer:
        "Most countries allow international students to work part-time during studies. In the UK, Canada, and Australia, you can typically work 20 hours per week during term time and full-time during holidays. The USA allows on-campus work and optional practical training. We provide detailed information about work rights for each destination.",
    },
    {
      question: "What English proficiency tests do I need?",
      answer:
        "Most universities accept IELTS, TOEFL, or PTE Academic. Some institutions also accept Duolingo English Test. Score requirements vary by university and program, typically ranging from IELTS 6.0 to 7.5. We offer preparation guidance and can recommend universities matching your current language proficiency.",
    },
    {
      question: "How much does it cost to use your services?",
      answer:
        "Our consultation fees vary based on the service package you choose. Initial career counseling sessions start from reasonable rates, and we offer comprehensive packages covering the entire application and visa process. Many of our university partnerships allow us to provide application services at no extra cost. Contact us for detailed pricing.",
    },
    {
      question: "What documents do I need to prepare?",
      answer:
        "Commonly required documents include academic transcripts and certificates, English proficiency test scores, passport copies, statement of purpose, letters of recommendation, resume/CV, financial documents, and passport-size photographs. We provide a detailed checklist customized to your destination and visa type.",
    },
    {
      question: "Do you provide support after I reach my destination?",
      answer:
        "Absolutely! We offer post-arrival support including airport pickup coordination, accommodation settlement, bank account opening guidance, mobile connection assistance, and ongoing support for any challenges you face. Our international network ensures you have support even after you've arrived abroad.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-4 font-['Nunito']">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about studying and working abroad
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-2xl transition-all"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8 ">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 py-5">
                  <p className="text-gray-600 leading-relaxed ">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-(--color-secondary-500) to-(--color-primary-500) rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to start your journey?
          </h3>
          <p className="text-indigo-100 mb-4">
            We're here to help! Reach out to our support team.
          </p>
          <button
            className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md cursor-pointer  hover:-translate-y-0.5"
            onClick={() => navigate("/contactus")}
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
