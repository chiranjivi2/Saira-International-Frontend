import React, { useEffect, useState } from "react";
import { MapPin, User, Phone } from "lucide-react";
import { getPartners } from "../../services/api";

export default function OfficialPartners() {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    const fetchOfficialPartners = async () => {
      const data = await getPartners();
      setPartners(data);
      console.log(data);
    };
    fetchOfficialPartners();
  }, []);
  //   const partners = [
  //     {
  //       branchName: "India",
  //       city: "Delhi",
  //       contactPersonName: "Dr. Piyush Bharadwaj",
  //       addressDetails:
  //         "D-Mall, Netaji Subhash Palace, Pitampura, Delhi, India 110034",
  //     },
  //     {
  //       branchName: "Sri Lanka",
  //       city: "Colombo",
  //       contactPersonName: "Mr. Azeem",
  //       addressDetails: "Colombo",
  //     },
  //     {
  //       branchName: "Nepal",
  //       city: "Kathmandu",
  //       contactPersonName: "Deepak Chaudhari",
  //       addressDetails:
  //         "Above Boba Chai/Bubble Tea 20 meter from Eyeplex Mall, New Baneshwor Devkota Sadak, Kathmandu 44600, Nepal",
  //       mapLink: "f",
  //     },
  //   ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Official Partners
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-linear-to-r from-(--color-primary-500) to-(--color-secondary-500) mx-auto rounded-full"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              {/* Header with gradient */}
              <div className="bg-linear-to-r from-(--color-primary-500) to-(--color-secondary-500) p-4 sm:p-5 md:p-6 text-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-1">
                  {partner.branchName}
                </h2>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                {/* Contact Person */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      Contact Person
                    </p>
                    <p className="text-sm sm:text-base text-gray-900 font-semibold break-words">
                      {partner.contactPersonName}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      Address
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed break-words">
                      {partner.addressDetails}
                    </p>
                  </div>
                </div>

                {/* Map Link Button */}
                {partner.mapLink && (
                  <div className="pt-2 sm:pt-4">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-linear-to-r from-(--color-primary-500) to-(--color-secondary-500) text-white py-2.5 sm:py-3 px-4 rounded-lg sm:rounded-xl font-semibold hover:from-(--color-primary-700) hover:to-(--color-secondary-700) transition-all duration-300 text-center shadow-md hover:shadow-lg text-sm sm:text-base"
                    >
                      View on Map
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center px-4">
          <p className="text-gray-600 text-xs sm:text-sm">
            For more information, please contact your nearest partner office
          </p>
        </div>
      </div>
    </div>
  );
}
