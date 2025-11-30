import React from "react";
import { Plane } from "lucide-react";

export default function StudyAbroadHero() {
  const destinations = [
    {
      name: "Australia",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop",
    },
    {
      name: "UK",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
    },
    {
      name: "USA",
      image:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop",
    },
    {
      name: "Canada",
      image:
        "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop",
    },
    {
      name: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 relative overflow-hidden flex items-center">
      {/* Decorative Dots - Top Left */}
      <div className="absolute top-8 left-8 opacity-30">
        <div className="grid grid-cols-8 gap-2">
          {[...Array(32)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Decorative Dots - Bottom Left */}
      <div className="absolute bottom-8 left-8 opacity-30">
        <div className="grid grid-cols-8 gap-2">
          {[...Array(32)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Paper Plane with Trail */}
      <div className="absolute top-12 right-32">
        <svg className="w-64 h-32" viewBox="0 0 200 100">
          <path
            d="M 10,60 Q 50,30 90,50 Q 130,70 170,45"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="4,6"
            opacity="0.5"
          />
        </svg>
        <Plane className="absolute top-6 right-2 w-7 h-7 text-white opacity-90 transform rotate-12" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-8 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Student with Luggage */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Student Image */}
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop"
                alt="Happy Student"
                className="w-72 h-96 object-cover rounded-3xl"
              />

              {/* Luggage - Left */}
              <div className="absolute -left-16 bottom-0 w-24 h-32 bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg shadow-2xl transform -rotate-3">
                <div className="absolute top-2 left-2 right-2 h-1 bg-white/30 rounded"></div>
                <div className="absolute top-4 left-2 right-2 h-1 bg-white/30 rounded"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-blue-500 rounded-full"></div>
                <div className="absolute top-0 right-2 w-2 h-6 bg-blue-500 rounded-b-full"></div>
              </div>

              {/* Luggage - Right */}
              <div className="absolute -right-12 bottom-0 w-20 h-28 bg-gradient-to-br from-blue-300 to-blue-400 rounded-lg shadow-2xl transform rotate-2">
                <div className="absolute top-2 left-2 right-2 h-1 bg-white/30 rounded"></div>
                <div className="absolute top-4 left-2 right-2 h-1 bg-white/30 rounded"></div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Study Abroad Text and Destinations */}
          <div className="space-y-8">
            {/* Study Abroad Title */}
            <h1 className="text-7xl lg:text-8xl font-bold text-white leading-tight">
              Study Abroad
            </h1>

            {/* Destination Cards */}
            <div className="grid grid-cols-5 gap-4">
              {destinations.map((dest, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    <div className="bg-white py-2 text-center">
                      <span className="text-blue-900 font-semibold text-sm">
                        {dest.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
