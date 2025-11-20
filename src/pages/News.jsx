function News() {
  return (
    <section className="py-24 px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Discover Your Future
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="working_professional_in_office.jpeg"
              alt="Education"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Right Side - Text & Button */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-slate-800 leading-tight">
              Transform Your Educational Journey
            </h3>

            <p className="text-lg text-slate-600 leading-relaxed">
              Embark on a life-changing adventure with our comprehensive
              educational consultancy services. We guide students through every
              step of their international education journey, from university
              selection to visa processing.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Our expert team has helped thousands of students achieve their
              dreams of studying abroad. With personalized guidance and proven
              strategies, we ensure your success every step of the way.
            </p>

            <div className="pt-4">
              <button className="group relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Today
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="text-center transform transition-transform duration-300 hover:scale-110">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-slate-600 mt-1">Students</div>
              </div>
              <div className="text-center transform transition-transform duration-300 hover:scale-110">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-slate-600 mt-1">Universities</div>
              </div>
              <div className="text-center transform transition-transform duration-300 hover:scale-110">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-slate-600 mt-1">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
